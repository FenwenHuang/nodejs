const getLogin=(req, res) => {
    res.status(200).render('auth/login',{
            pageTitle: 'Login',
            path:'login',
    });
}


const postLogin=(req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        res.redirect('/');
    } else {
        console.log('欄位尚未填寫完成！')
    }
}

const postLogout=(req, res) => {
    // TODO: 實作 logout 機制
    res.redirect('/login');
}



module.exports={
    getLogin,
    postLogin,
    postLogout,
}
