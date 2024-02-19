const express = require('express');
const { sequelize } = require('./models');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes");
app.use("/", indexRouter);

sequelize.sync()
.then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
})
.catch((err) => console.log(err));