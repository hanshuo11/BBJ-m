// ajax请求
window.postJSON = function (url, data) {
    return require('superagent')
        .post('/api' + url)
        .send(data)
}

window.fetchGet = function (url, data, api) {
    let reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
    if (api) {
        return require('superagent')
            .get('/api' + url)
            .query(data)

    } else {
        return require('superagent')
            .get(url)
            .query(data)
    }
}
// window.$alert-=function(inf){
//     alert
// }



// cookie的设置
window.getCookie = function (cookieName) {
    var strCookie = document.cookie;

    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (cookieName == arr[0]) {
            return eval("(" + arr[1] + ")");
        }
    }
    return "";
}
window.setCookie = function (cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
window.clearCookie = function clearCookie(name) {
    setCookie(name, "", -1);
}