const express = require('express');
const app = express();
let userRouter = require('./router/userRouter')
let foodRouter = require('./router/foodRouter')
app.use('/user', userRouter)
app.use('/food', foodRouter)
app.listen(3000, () => {
    console.log('server running on 3000');

})