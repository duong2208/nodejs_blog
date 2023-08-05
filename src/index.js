const path = require('path')
const morgan = require('morgan')
const express = require('express')  //lệnh require sẽ đi vào 'node_modules' tải thư viện express và lưu vào biến 
const handlebars = require('express-handlebars');
const app = express()   //trả về đối tượng app để xây dựng website 
const port = 3000   //run website ở cổng 3000

const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}))       //urlencoded là middleware để xử lý dữ liệu từ form submit lên server 
app.use(express.json())     //XMLHttpRequest, fetch,  axios: gửi code từ javascript lên server 
//HTTP logger
// app.use(morgan('combined'))

//Template engine (handlebars)
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');  //set là đặt cho ứng dụng app sử dụng view engine là handlebars 
app.set('views', path.join(__dirname, 'resources/views'))

//Routes init
route(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)        //start ra 1 web server 
})

//app được khởi tạo từ express và nó lắng nghe cổng 3000 trên trình duyệt