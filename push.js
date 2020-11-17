var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BKhjWAgFt-RKcoKUvffrUzOXoVDueeL8aBlgrwpmc6oqHOzAXGJY2z1CREzQeBGlkRa1qeMjMNBIolFXdpDTqIw",
    "privateKey": "MQoZ7QCwShhUpCCmZI3j7KwqrrHcjDagT07PJp8YJX4"
};


webPush.setVapidDetails(
    'mailto:davi_muhammad@yahoo.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/fAc5kEtOr5k:APA91bF-i4Hl7Ut6VZTjmN7sXh6xtLTTrvtzXvFdWqntfZeWRHfRxQ9sd5kIE6woHBmxy-3v_KzvQzCfhjZPBvmvVtzPfKtKQ_A18fllkTLfly8z4Ct3seiQzy1w8U_SXUAUYaSsdGHK",
    "keys": {
        "p256dh": "BPq6vAZp6k0V/acw8KdWHp1DFUAgFokU1EnvpAWXkMvhcFP4WXNaDdxuxZQheGwl3/Krzk/8sTcOjWtIFEeqI78=",
        "auth": "xuRDIoP6xygQj/E2fnNSzA=="
    }
};
var payload = 'Selamat Datang di Aplikasi Informasi Liga Inggris';

var options = {
    gcmAPIKey: '191057097503',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);