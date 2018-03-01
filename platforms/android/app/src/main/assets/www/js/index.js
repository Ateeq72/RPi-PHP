/**
 * Created by ateeq-ahmed on 12/2/18.
 */

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

        sendTo(new ArrayBuffer('hello'),'192.168.0.77',8777);

    }
};

app.initialize();

function sendTo(data, addr, port) {
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
