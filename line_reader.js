var readline = require('readline');
var fs = require('fs');
var path = require('path');
var util = require('util');
var EventEmitter = process.EventEmitter;

var LineReader = exports.LineReader = function(pathorstream, options) {
  options = options || {
    flags: 'r',
    encoding: 'utf8',
    fd: null,
    mode: 0666,
    autoClose: true
  }
  if (typeof pathorstream == 'string') {
    this.stream = fs.createReadStream(pathorstream, options);
  } else {
    this.stream = pathorstream;
  }
  this.tmpstream = fs.createWriteStream(path.join(__dirname, '_tmp.tmp'));
  var that = this;
  this.rl = readline.createInterface({
    input: this.stream,
    output: this.tmpstream
  }).on('line', function(line) {
    that.emit('line', line);
  }).on('close', function() {
    that.tmpstream.end();
    fs.unlink(path.join(__dirname, '_tmp.tmp'));
    that.emit('end');
  });
};

util.inherits(LineReader, EventEmitter);