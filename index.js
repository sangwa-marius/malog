// ANSI Color codes
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
};

const malog = (req, res, next) => {
  const startTime = Date.now();
  const originalSend = res.send;
  
  res.send = function(data) {
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
      statusColor = colors.cyan;
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
      `${statusColor}[${status}]${colors.reset} ${colors.blue}${method}${colors.reset} ${colors.magenta}${url}${colors.reset} ${colors.white}--${message}${colors.reset} ${timeColor}${responseTime}ms${colors.reset}`
    );
    
    return originalSend.call(this, data);
  };
  
  next();
};

module.exports = malog;