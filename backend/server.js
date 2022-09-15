
const express = require("express");
const connectDB = require("./config/db")
const userRotes= require('./routes/userRouter');
const adminRotes =require('./routes/adminRouter')

const morgan = require('morgan')
const cors = require('cors')



const PORT =  3001;
const app = express();

app.use(express.json())
connectDB()
app.use(morgan('dev'))
app.use(cors())


app.use('/', userRotes)
app.use('/admin', adminRotes)


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
 