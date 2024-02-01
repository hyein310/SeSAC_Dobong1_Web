const express = require("express");
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.get('/prac2', function (req,res){
    res.render("prac2");
})

app.post('/prac2', function (req,res) {
    console.log(req.body);
    res.render('/prac2');
});

// app.post("/axios", function (req,res) {
//     console.log(req.body);
//     res.send(req.body);
// });


app.listen(PORT, () => {
    console.log((`http://localhost:${PORT}`));
});
