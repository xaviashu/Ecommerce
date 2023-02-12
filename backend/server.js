const app = require("./app");
const dotenv = require("dotenv");

//Config
dotenv.config({path:"banckend/config/config.env"});


app.listen(process.env.PORT, () => {
    console.log(`Server is working on port :- ${process.env.PORT}`);
})