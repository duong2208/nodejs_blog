const path = require('path');
const express = require('express'); //lệnh require sẽ đi vào 'node_modules' tải thư viện express và lưu vào biến
const morgan = require('morgan');
const methodOverride = require('method-override')
const handlebars = require('express-handlebars');

const SortMiddleware = require('./app/middlewares/SortMiddleware');

const route = require('./routes');
const db = require('./config/db')

const app = express(); //trả về đối tượng app để xây dựng website
const port = 3000; //run website ở cổng 3000





//Connect DB
db.connect()

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
); //urlencoded là middleware để xử lý dữ liệu từ form submit lên server, req.body phải có 

app.use(express.json()); //XMLHttpRequest, fetch,  axios: gửi code từ javascript lên server , req.body phải có 

// override with POST having ?_method=PUT
app.use(methodOverride('_method'))

//Custom middlewares
app.use(SortMiddleware);

//HTTP logger
// app.use(morgan('combined'))

//Template engine (handlebars)
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';
                const icons = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-sort-ascending',
                    desc: 'oi oi-sort-descending',
                }
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                }
                const icon = icons[sortType]
                const type = types[sortType]
                return `<a href="?_sort&column=${field}&type=${type}"><span class="${icon}"></span></a>`
            }
        }
    }),
);
app.set('view engine', 'hbs'); //set là đặt cho ứng dụng app sử dụng view engine là handlebars
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`); //start ra 1 web server
});

//app được khởi tạo từ express và nó lắng nghe cổng 3000 trên trình duyệt
