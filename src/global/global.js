

const adminEmail = "engine74396@gmail.com"

// 因为被拒绝，下一次要等72小时才能再选
// const waitMinutesBecauseReject = 60 * 24 * 2
const waitMinutesBecauseReject = 60 * 3
// const waitMinutesBecauseRecall = 60 * 24 * 3
const waitMinutesBecauseRecall = 60 * 5

Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

export default {
    waitMinutesBecauseReject,
    waitMinutesBecauseRecall,
    adminEmail
}