const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    //route - đường dẫn truy cập trang trên trình duyệt
    // app.get('/', (req, res) => {   //(req, res) => {res.send('Hello')} là arrow function
    //     res.render('home')
    // })

    app.use('/news', newsRouter);

    app.use('/', siteRouter);

    app.post('/search', (req, res) => {
        console.log(req.body);
        res.send('');
    });
}

module.exports = route;
