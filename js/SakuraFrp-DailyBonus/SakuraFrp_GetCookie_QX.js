/*
Sakura Frp daily bonus script

Update 2020.04.20 15:55

About the author:
Arms

Description :
Need to manually log in to the https://www.natfrp.com/?page=panel&module=sign checkin to get cookie. if QX pops up to get a cookie success notification, you can disable this script.
Note that the following config is only a local script configuration, please put this script into Quantumult X/Script

script will be performed every day at 9 am. You can modify the execution time.

[task_local]
# Sakura Frp daily bonus script
0 9 * * * SakuraFrp_GetCookie_QX.js

[rewrite_local]
# Get cookie. 【QX TF188+】:
https:\/\/www\.natfrp\.com\/\?page=panel&module=sign url script-request-header SakuraFrp_GetCookie_QX.js

# MITM = www.natfrp.com
*/

var SFRP = $request.headers["Cookie"];

if (SFRP) {
  if ($prefs.valueForKey("CookieSFrp") != undefined) {
    if ($prefs.valueForKey("CookieSFrp") != SFRP) {
      var cookie = $prefs.setValueForKey(SFRP, "CookieSFrp");
      if (!cookie) {
        $notify("更新 Sakura Frp 签到Cookie失败‼️", "", "")
      } else {
        $notify("更新 Sakura Frp 签到Cookie成功 🎉", "", "")
      }
    }
  } else {
    var cookie = $prefs.setValueForKey(SFRP, "CookieSFrp");
    if (!cookie) {
      $notify("首次写入 Sakura Frp Cookie失败‼️", "", "")
    } else {
      $notify("首次写入Sakura Frp Cookie成功 🎉", "", "")
    }
  }
}
$done({})