const VoximplantKit = require('@voximplant/kit-functions-sdk').default;
module.exports = async function(context, callback) {
     var kit = new VoximplantKit(context)
     var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var currentTime = new Date();

today = mm + '/' + dd + '/' + yyyy;
out=today+currentTime;
     kit.setVariable('today',out);
    callback(200, kit.getResponseBody())
}
