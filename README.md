linereader
==========

a module for nodejs with reading text file line by line

## Install
```npm i lr --save```
## Usage
```
var LR = require('lr').LR;
var path = require('path');

var lr = new LR(path.join(__dirname, 'test.txt'));
lr.on('line', function(line){
  console.log(line);
});
```
