var express = require('express');
var app     = express();

var adProposalRoute = require('./routes/adProposal');
app.use('/adpropsal', adProposalRoute);


app.listen(3000, function(){
   console.log('Listening on port 3000');
 });
