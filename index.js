const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = function (apikey) {
    var module = {};

    module.whitelist = async function (userid, product) {
        var details = {
            "user": userid,
            "product": product,
            "apikey": apikey
        }
        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        var data = await fetch("https://nautauth.xyz/api/v1/whitelist", {
            method: 'POST',
            body: formBody,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
        }).then(res => res.json());
        
        return data
    };

    module.check_whitelist = async function (userid, product, studioname) {
        var data = await fetch(`https://nautauth.xyz/api/v1/ownsproduct?studioname=${studioname.toLowerCase()}&robloxid=${userid}&product=${product.toLowerCase()}`).then(res => res.json());
        
        if(data.status == "User owns product.") {
            return true
        }else{
            return false
        }
    };

    return module;
};