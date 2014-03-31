var LineReader = require('./line_reader').LineReader;
var path = require('path');

var lr = new LineReader(path.join(__dirname, 'test.txt'));
lr.on('line', function(line){
  console.log(line);
});