linereader
==========

a module for nodejs with reading text file line by line

## Install
```npm i linereader --save
## Usage
```
var LineReader = require('./line_reader').LineReader;
var path = require('path');

var lr = new LineReader(path.join(__dirname, 'test.txt'));
lr.on('line', function(line){
  console.log(line);
});
```
