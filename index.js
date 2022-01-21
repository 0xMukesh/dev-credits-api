const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

const router = require('./routes/router.js')
const rateLimiter = require('./middleware/rateLimiter.js')

const app = express()

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

app.get('/', (req, res) => {
    res.send('DEV credits API 👨‍💻')
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(rateLimiter);
app.use(router);

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`The server is active at ${port} port`)
})