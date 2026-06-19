// ANSI Color codes
const { colors } = require("./colors")
const malog = (req, res, next) => {
  const startTime = Date.now();
  const originalSend = res.send;

  res.send = function (data) {
    const responseTime = Date.now() - startTime;
    const status = res.statusCode;
    const method = req.method;
    const url = req.originalUrl;

    let message = '';
    let statusColor;

    if (status >= 200 && status < 300) {
      message = 'OK';
      statusColor = colors.green;
    } else if (status >= 300 && status < 400) {
      message = 'REDIRECT';
      statusColor = colors.lightBlue;
    } else if (status >= 400 && status < 500) {
      message = 'CLIENT_ERROR';
      statusColor = colors.yellow;
    } else {
      message = 'SERVER_ERROR';
      statusColor = colors.red;
    }

    let timeColor = responseTime < 100 ? colors.green :
      responseTime < 500 ? colors.yellow : colors.red;

    console.log(
      `${statusColor}[${status}]${colors.reset} ${colors.blue}${method}${colors.reset} ${colors.purple}${url}${colors.reset} ${colors.white}--${message}${colors.reset} ${timeColor}${responseTime}ms${colors.reset}`
    );

    return originalSend.call(this, data);
  };

  next();
};

module.exports = malog;