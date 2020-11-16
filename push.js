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
    "endpoint": "<Endpoint URL>",
    "keys": {
        "p256dh": "BEdJXPhBafTlt8TjopMXZzouYp4u80_Mbb4nz5S3yMiv4vTrE62WmWCHAb9_3obiz9dcWogMtYAPh8MCZCWLmgk",
        "auth": "<Auth key>"
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