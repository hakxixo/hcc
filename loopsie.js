/******************************
脚本名称:   loopsie破解
下载地址：https://apps.apple.com/cn/app/loopsie-ai-art-generator/id1259909228?l=en-GB
*******************************
[rewrite_local]

https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/hakxixo/hcc/main/loopsie.js

[mitm] 

hostname = api.revenuecat.com

*******************************/

var objc = JSON.parse($response.body);

    objc = {
  "request_date_ms" : 1696994647688,
  "request_date" : "2023-10-11T03:24:07Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-10-11T03:21:48Z",
    "original_application_version" : "0",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.gamelounge.loopsie.ios.subscription_yearly" : {
        "original_purchase_date" : "2023-10-11T03:24:04Z",
        "expires_date" : "9999-99-99T03:24:03Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "420001640272245",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2023-10-11T03:24:03Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      },
      "com.gamelounge.loopsie.ios.one_time" : {
        "store" : "app_store",
        "purchase_date" : "2023-02-23T02:33:33Z",
        "ownership_type" : "PURCHASED",
        "original_purchase_date" : "2023-02-23T02:33:33Z",
        "expires_date" : "9999-99-99T09:09:09Z"
      }
    },
    "entitlements" : {
      "pro-iOS" : {
        "store" : "app_store",
        "purchase_date" : "2023-02-23T02:33:33Z",
        "ownership_type" : "PURCHASED",
        "original_purchase_date" : "2023-02-23T02:33:33Z",
        "product_identifier" : "com.gamelounge.loopsie.ios.one_time",
        "expires_date" : "9999-99-99T09:09:09Z"
      }
    },
    "original_purchase_date" : "2023-10-10T08:52:34Z",
    "original_app_user_id" : "$RCAnonymousID:364c9192774943edb4e2f91ace9b7527",
    "last_seen" : "2023-10-11T03:21:48Z"
  }
}

$done({body : JSON.stringify(objc)});

