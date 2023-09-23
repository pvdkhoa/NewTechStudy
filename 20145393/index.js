const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/route');

app.use(bodyParser.json());

// Import mygroup data
const mygroup = require('./models/mygroup');

function logRequestDetails(req, res, next) {
  const method = req.method;
  const url = req.originalUrl;

  console.log(`Method ${method} -- URL: ${url}`);
  next();
}
app.use(logRequestDetails);
app.use('/', routes);


// Khởi chạy server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server đang chạy trên cổng ${port}`);
});