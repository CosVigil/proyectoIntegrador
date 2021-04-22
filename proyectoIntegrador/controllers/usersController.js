const usersController = {
    profile: function (req, res){
        return res.render('profile', {title:''})
    },
    register: function (req, res){
        return res.render('register', {title:''})
     },
     login: function (req, res){
        return res.render('login', {title:''})
     },
     profileEdit: function (req, res){
        return res.render('profile-edit', {title:''})
     }

}

module.exports = usersController;