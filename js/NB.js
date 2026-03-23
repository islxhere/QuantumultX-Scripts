let obj = JSON.parse($response.body);
obj = {
    "data": {
        "processAppleReceipt": {
            "__typename": "SubscriptionResult",
            "error": 0, 
            "subscription": {
                "__typename": "AppStoreSubscription",
                "status": "active",
                "originalPurchaseDate": "2021-11-09T03:14:18.000Z",
                "originalTransactionId": "710000869822929",
                "expirationDate": "2099-12-31T03:14:17.000Z",
                "productId": "com.gingerlabs.Notability.premium_subscription",
                "tier": "premium",
                "refundedDate": null,
                "refundedReason": null,
                "user": null
            }
        }
    }
};
$done({ body: JSON.stringify(obj) });

var obj = JSON.parse($response.body);

obj = {
    "data": {
        "processAppleReceipt": {
            "__typename": "SubscriptionResult",
            "error": 0,
            "subscription": {
                "__typename": "AppStoreSubscription",
                "status": "canceled",
                "originalPurchaseDate": "2023-04-19T03:11:16.000Z",
                "originalTransactionId": "570001184068302",
                "expirationDate": "9999-05-19T03:11:15.000Z",
                "productId": "com.gingerlabs.Notability.premium_subscription",
                "tier": "premium",
                "refundedDate": null,
                "refundedReason": null,
                "isInBillingRetryPeriod": false,
                "gracePeriodExpiresAt": null,
                "expirationIntent": "CUSTOMER_CANCELLED",
                "overDeviceLimit": false,
                "user": null
            },
            "isClassic": false
        }
    }
}
$done({body: JSON.stringify(obj)});