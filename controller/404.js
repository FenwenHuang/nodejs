const getError=(req, res) => {
    res.status(404)
        .render('404', {
            path: '*',
            pageTitle: 'Page Not Found'
        });
}


module.exports={
    getError
}
