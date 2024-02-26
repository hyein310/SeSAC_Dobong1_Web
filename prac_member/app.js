const express = require('express');
const { sequelize } = require('./models');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views'); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require('./routes/user');
app.use('/user',userRouter);


// 404 error
app.get("*", (req, res) => {
    res.render("404");
  });

sequelize.sync()
.then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
})
.catch((err) => console.log(err));