/******************************
goodnotes6破解
https://apps.apple.com/cn/app/goodnotes-6/id1444383602?l=en-GB

*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/hakxixo/hcc/main/ goodnotes.js

[mitm] 

hostname = buy.itunes.apple.com

*******************************/

var objc = JSON.parse($response.body);

    objc = {
  "request_date": "2023-10-17T04:49:33Z",
  "request_date_ms": 1697518173528,
  "subscriber": {
    "entitlements": {
      "apple_access": {
        "expires_date": "9999-10-24T04:49:29Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.goodnotes.premium_7dt_1y_999",
        "purchase_date": "2023-10-17T04:49:29Z"
      },
      "crossplatform_access": {
        "expires_date": "9999-10-24T04:49:29Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.goodnotes.premium_7dt_1y_999",
        "purchase_date": "2023-10-17T04:49:29Z"
      }
    },
    "first_seen": "2023-10-17T04:36:38Z",
    "last_seen": "2023-10-17T04:36:38Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "40647e46-2e34-4484-8979-8f435d275217",
    "original_application_version": "2382619.335074522",
    "original_purchase_date": "2023-10-17T04:34:11Z",
    "other_purchases": {},
    "subscriptions": {
      "com.goodnotes.premium_7dt_1y_999": {
        "auto_resume_date": null,
        "billing_issues_detected_at": null,
        "expires_date": "9999-10-24T04:49:29Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2023-10-17T04:49:30Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2023-10-17T04:49:29Z",
        "refunded_at": null,
        "store": "app_store",
        "store_transaction_id": "420001646783944",
        "unsubscribe_detected_at": null
      }
    }
  }
}

$done({body : JSON.stringify(objc)});

