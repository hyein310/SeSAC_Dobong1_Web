const User = require("../model/User");

exports.main = (req, res) => {
    res.render("index");
};

exports.success = (req, res) => {
    const userdata = User.userInfo();
    //서버의 계정정보와, 클라이언트의 계정정보가 일치하는지
    console.log('req',req.body.id);
    console.log('req',req.body.pw);
    console.log(userdata.id);
    console.log(userdata.pw)
    if (req.body.id === userdata.id && req.body.pw === userdata.pw) {
        // res.render("success", {userInfo: userdata});
        res.send({isSuccess:true});
    }
    else {
        res.send({isSuccess:false});
    }
       
}