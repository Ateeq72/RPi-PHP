/**
 * Created by ateeq-ahmed on 11/2/18.
 */

var storage = window.localStorage;

var getIpAndPort = function(){

    var ip = this.storage.getItem('ip');
    var port = this.storage.getItem('port');

    return {'ip' : ip, 'port' : port};

};

var setIpAndPort = function(ip,port){

    this.storage.setItem('ip', ip);
    this.storage.setItem('port', port);


};

function sendTo(data, addr, port) {

    if (addr == null || port == null || addr == undefined || port == undefined || addr == '' || port == ''){
        alert('IP or Port not set!');
    }

    data = stringToArrayBuffer(data);

    chrome.sockets.udp.create(function(createInfo) {
        chrome.sockets.udp.bind(createInfo.socketId, '0.0.0.0', 0, function(result) {
            chrome.sockets.udp.send(createInfo.socketId, data, addr, port, function(result) {
                if (result < 0) {
                    console.log('send fail: ' + result);
                    chrome.sockets.udp.close(createInfo.socketId);
                } else {
                    console.log('sendTo: success ' + port);
                    chrome.sockets.udp.close(createInfo.socketId);
                }
            });
        });
    });
}

function stringToArrayBuffer(string) {
    // UTF-16LE
    var buf = new ArrayBuffer(string.length * 2);
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = string.length; i < strLen; i++) {
        bufView[i] = string.charCodeAt(i);
    }
    return buf;
}