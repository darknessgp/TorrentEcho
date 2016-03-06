var FTP = require('ftps');

FTP.prototype.mirror = function (remotePath, localPath) {
	console.log("Mirror test");

 	if (!localPath || !remotePath) { return this; }
 	return this.raw("mirror -c -vvv '" + this._escapeshell(remotePath) + "' '" + this._escapeshell(localPath) + 
"'");
 }

module.exports = FTP;