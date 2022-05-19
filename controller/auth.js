const user = require('../models/user');

const getLogin=(req, res) => {
    res.status(200).render('auth/login',{
            pageTitle: 'Login',
            path:'login',
    });
}


const postLogin=(req, res) => {
    const { email, password } = req.body;

user.findOne({ where: { email }})
.then((user) => {
    if (!user) {
        console.log('login: 找不到此 user 或密碼錯誤');
        return res.redirect('/login');
    }
    if (user.password === password) {
        console.log('login: 成功');
        return res.redirect('/')
    } 
    console.log('login: 找不到此 user 或密碼錯誤');
    res.redirect('/login');
})
.catch((err) => {
    console.log('login error:', err);

});
};

const postLogout=(req, res) => {
    // TODO: 實作 logout 機制
    res.redirect('/login');
}



module.exports={
    getLogin,
    postLogin,
    postLogout,
}
