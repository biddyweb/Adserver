var express      = require('express');
var router       = express.Router();
var jsonParser   = require('body-parser').json();
var http         = require('http');

router.route('/')
.post(jsonParser, function(request, response){
  //console.log(request.body);	
	var adSize = request.body.adSize;
	var offeredPrice = request.body.offeredPrice;
	var dspRes = '';
	var data = {};
	var options = {
		host: 'localhost',
		port: 4000,
		path: '/',
  	method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
	};
	
	//		console.log('finished');
      data['size'] = adSize;
			data['offeredPrice'] = offeredPrice;
			var req = http.request(options, function(res) {				
        res.on('data', function (chunk) {
					dspRes = dspRes + chunk;
//				  console.log(chunk.toString('ascii'));
          debugger;
        });
			});
      var stringData = JSON.stringify(data);
			console.log(stringData);
      req.write(stringData);
			req.end();

		response.send(dspRes);
	});

module.exports = router;
