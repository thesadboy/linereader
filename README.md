linereader
==========

a module for nodejs with reading text file line by line

## Install
```npm i node-lr --save```
## Usage
```
var LR = require('node-lr').LR;
var path = require('path');

var lr = new LR(path.join(__dirname, 'test.txt'));
lr.on('line', function(line){
  console.log(line);
});
```
