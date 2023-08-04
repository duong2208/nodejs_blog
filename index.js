const express = require('express')  //lệnh require sẽ đi vào 'node_modules' tải thư viện express và lưu vào biến 
const app = express()   //trả về đối tượng app để xây dựng website 
const port = 3000   //run website ở cổng 3000

//route - đường dẫn truy cập trang trên trình duyệt  
app.get('/tintuc', (req, res) => {
    var a = 1       //(req, res) => {res.send('Hello')} là arrow function
    var b = 2
    var c = a + b
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//app được khởi tạo từ express và nó lắng nghe cổng 3000 trên trình duyệt