const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');


const userRouter = require("./routers/users")
const blogRouter = require("./routers/blogs")
const likedislikeRouter = require("./routers/likedislikes")

app.use(morgan('dev'));
app.use(express.json());
app.use("/user", userRouter);
app.use("/blog", blogRouter)
app.use("/likedislike", likedislikeRouter)


const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server is running on PORT ::`, PORT)
})