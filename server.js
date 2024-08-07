const express = require('express');
const app = express();
const authrouter = require('./router/auth.router');
const contactrouter = require('./router/contactrouter');
const admin_router = require('./router/admin_router');
const trendingRouter = require('./router/trending_router');
const connectDB = require('./db');
const cors = require('cors');
const errorMiddleware = require('./middlewares/error-middleware');

const corsOptions = {
  origin: [
    "http://localhost:5173", 

    "https://www.shopsphere360.in"
  ],
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.json("hello");
});

app.use('/api/auth', authrouter);
app.use('/api/form', contactrouter);
app.use('/api/admin', admin_router);
app.use('/api/trending', trendingRouter);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3009;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Server listening at http://localhost:' + PORT);
  });
});
