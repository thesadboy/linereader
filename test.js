var LR = require('./lr').LR;
var path = require('path');

var lr = new LR(path.join(__dirname, 'test.txt'));
lr.on('line', function(line){
  console.log(line);
});