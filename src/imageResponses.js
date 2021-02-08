const fs = require('fs');

const getMeme = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(fs.readFileSync('client/spongegar.png'));
  response.end();
};

module.exports.getMeme = getMeme;
