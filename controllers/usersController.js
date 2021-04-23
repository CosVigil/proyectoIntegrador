const usersController = {
    profile: function (req, res){
        return res.render('profile')
    },
   
     profileEdit: function (req, res){
        return res.render('profile-edit')
     }

}

module.exports = usersController;