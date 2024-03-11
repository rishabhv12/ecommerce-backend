const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

/* configure body-parser */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const { auth_route, user_route, product_route, cart_route, order_route } = require('./routes');

app.use('/api/v1/auth', auth_route);
app.use('/api/v1/users', user_route);
app.use('/api/v1/products', product_route);
app.use('/api/v1/carts', cart_route);
app.use('/api/v1/orders', order_route);

const dbConfig = require('./config/database-config-example');

/* connecting to the database */
mongoose.connect("mongodb://mongodb:27017/ecom", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get("/check" , (req,res)=>{
    res.send("The application is up and running ");
})
/* listen for requests */
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});