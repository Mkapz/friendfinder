var path = require('path');

module.exports = function(app){

	//direct the user to the homepage on port 3000
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

    //direct the user to the surveypage on port 3000
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

};