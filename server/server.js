const app = require('express')();

var fs = require('fs');
var path = require('path');
var mime = require('mime');

// Image download endpoint
app.use(function(req, res, next) {
  next();
});
app.use('/assets/images/\*', function(req, res) {
  var file = path.join(__dirname, req.originalUrl);
  var filename = path.basename(file);
  var mimetype = mime.lookup(file);
  if(!fs.existsSync(file)) {
    res.status(404).send('Not Found');
  }
  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  res.setHeader('Content-type', mimetype);
  var filestream = fs.createReadStream(file);
  filestream.pipe(res);
});
app.listen(3000);
console.log("Server started, listening on port: 3000");
