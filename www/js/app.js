/**
 * Created by ateeq-ahmed on 11/2/18.
 */
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

    alert('Hello!');

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
}