// TODO: 컨트롤러 코드

exports.main = (req, res) => {
    res.render("index");
};
exports.get_signin = (req, res) => {
    res.render("signin");
}
exports.get_signup = (req, res) => {
    res.render("signup");
}
