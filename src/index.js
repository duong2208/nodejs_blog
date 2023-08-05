const path = require('path')
const morgan = require('morgan')
const express = require('express')  //lệnh require sẽ đi vào 'node_modules' tải thư viện express và lưu vào biến 
const handlebars  = require('express-handlebars');
const app = express()   //trả về đối tượng app để xây dựng website 
const port = 3000   //run website ở cổng 3000

app.use(express.static(path.join(__dirname, 'public')))
//HTTP logger
app.use(morgan('combined'))

//Template engine (handlebars)
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));  
app.set('view engine', 'hbs');  //set là đặt cho ứng dụng app sử dụng view engine là handlebars 
app.set('views', path.join(__dirname, 'resources/views'))
//route - đường dẫn truy cập trang trên trình duyệt  
app.get('/', (req, res) => {   //(req, res) => {res.send('Hello')} là arrow function
    res.render('home')
})

app.get('/news', (req, res) => {   
    res.render('news')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//app được khởi tạo từ express và nó lắng nghe cổng 3000 trên trình duyệt