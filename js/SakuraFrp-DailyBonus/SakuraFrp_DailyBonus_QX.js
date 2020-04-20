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
0 9 * * * SakuraFrp_DailyBonus_QX.js

[rewrite_local]
# Get cookie. 【QX TF188+】:
https:\/\/www\.natfrp\.com\/\?page=panel&module=sign url script-request-header SakuraFrp_GetCookie_QX.js

# MITM = www.natfrp.com
*/

var bonus = {
  url: 'https://www.natfrp.com/?page=panel&module=sign&sign&csrf=184b57caea2ae52bff7254bde7c791ab',
  headers: {
    "Cookie": $prefs.valueForKey("CookieSFrp"),
  }
};
var date = new Date()
var week = ["Sunday","Monday","Tuseday","Wednesday","Thursday","Friday","Saturday"];
var month = ["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."];

$task.fetch(bonus).then(response => {
    $notify("Sakura Frp Daily bonus", "", week[date.getDay()] + ", " + month[date.getMonth()] + " " + date.getDate() + ", " + response.body)
}, reason => {
    $notify("Sakura Frp Daily bonus. Interface error‼️‼️‼️", "", reason.error)
});