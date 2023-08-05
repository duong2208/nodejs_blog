class NewsController {

    //[GET] /news
    index(req, res) {
        res.render('news')
    }

    //[GET] /news/:slug 
    show(req, res) {
        res.send('NEWS DETAil')
    }
}

module.exports = new NewsController     //tạo ra 1 instance (đối tượng) của NewsController và exports ra ngoài.
                                        //module.exports là xuất ra ngoài, 