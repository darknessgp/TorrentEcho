var FTP = require('ftps');

FTP.prototype.mirror = function(remotePath, localPath, removeSource) {
    if (!localPath || !remotePath) {
        return this;
    }

    // Check if the last character is a slash, if not add one so folders are pulled correctly
    var lastChar = remotePath.substr(-1);
    if (lastChar !== '/') {
        remotePath = remotePath + '/';
    }
    // Check if the last character is a slash, if not add one so folders are pulled correctly
    var lastChar = localPath.substr(-1);
    if (lastChar !== '/') {
        localPath = localPath + '/';
    }

    options = '';
    if (removeSource){
      options += " --Remove-source-files ";
    }

    return this.raw("mirror -c -vvv " + options + this._escapeshell(remotePath) + " " + this._escapeshell(localPath));
}

FTP.prototype.queuemirror = function(remotePath, localPath) {
    if (!localPath || !remotePath) {
        return this;
    }

    // Check if the last character is a slash, if not add one so folders are pulled correctly
    var lastChar = remotePath.substr(-1);
    if (lastChar !== '/') {
        remotePath = remotePath + '/';
    }
    // Check if the last character is a slash, if not add one so folders are pulled correctly
    var lastChar = localPath.substr(-1);
    if (lastChar !== '/') {
        localPath = localPath + '/';
    }

    return this.raw("queue mirror -c -vvv " + this._escapeshell(remotePath) + " " + this._escapeshell(localPath));
}

FTP.prototype.pget = function(remotePath, localFolder) {
    if (!localFolder || !remotePath) {
        return this;
    }

    return this.raw("pget -c -O " + this._escapeshell(localFolder) + " " + this._escapeshell(remotePath));
}

FTP.prototype.queuepget = function(remotePath, localFolder) {
    if (!localFolder || !remotePath) {
        return this;
    }

    return this.raw("queue pget -c -O " + this._escapeshell(localFolder) + " " + this._escapeshell(remotePath));
}

module.exports = FTP;
