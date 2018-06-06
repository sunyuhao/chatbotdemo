'use strict';
const querystring = require('querystring');
const http = require('http');
const functions = require('firebase-functions');
const {
    dialogflow
} = require('actions-on-google');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const app = dialogflow({ debug: true });
const xhr = new XMLHttpRequest();

const postCode = () => {
    //     var data = querystring.stringify({
    //       v: "1",
    //       t: "pageview",
    //       tid:"UA-61504645-1",
    //       cid:"1",
    //       dh:"voice.centerparcs.fr",
    //       dp:"/testyuhao1",
    //       dt:"Test Yuhao 1"
    //     });

    //   var options = {
    //     host: 'www.google-analytics.com',
    //     port: 80,
    //     path: '/collect',
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         'Content-Length': Buffer.byteLength(data)
    //     }
    //   };

    //   var req = http.request(options, (res) => {
    //     res.setEncoding('utf8');
    //     res.on('data', (chunk) => {
    //         console.log("body: " + chunk);
    //     });
    //   });

    //   req.write(data);
    //   req.end();
    //   console.log('----------------------------------------------------------------------')
    //   console.log(data)


    var url = 'http://www.google-analytics.com/collect?v=1&t=pageview&tid=UA-61504645-1&cid=1&dh=voice.centerparcs.fr&dp=/testyuhao1&dt=Test Yuhao 1';
    var params = '';

    xhr.open('POST', url, true);

    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.send(params);

    xhr.onreadystatechange=function() {
        if (xhr.readyState === 4){   //if complete
            if(xhr.status === 200){  //check if "OK" (200)
                console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
            } else {
                console.log('----------------------------------------------------------------------')
            }
        } 
    }

};

const welcome = (conv) => {
    postCode();
    conv.ask("lol");
    // conv.ask( conv.user.id);
    
}

app.intent('Default Welcome Intent', welcome);

exports.wundermanParis = functions.https.onRequest(app);