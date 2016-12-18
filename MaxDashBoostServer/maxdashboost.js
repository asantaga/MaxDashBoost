var dash_button = require('node-dash-button');
var MaxCube = require('maxcube');
var config = require('./config.json');

// Buttons
var fairyButton = "50:f5:da:55:fc:d7";
var finishButton = "ac:63:be:1d:1e:2f";
var dashButtons = [fairyButton,finishButton];

// CubeIP
var maxCubeIP = "192.168.0.222";
// Radiators to Boost per set
var boostSet1 = ["13856e", "13856e"];


var dashButtonListener = dash_button(dashButtons, null, null, 'all'); //address from step above
dashButtonListener.on("detected", function (dash_id) {
    if (dash_id === fairyButton) {
        console.log("found fairy button");
        try{
            boostRadiators(boostSet1);
        }
        catch (err)
        {
            // Display error and continue
            console.log(err);
        }
    }
    else if (dash_id === finishButton) {
        console.log("found finish Dash");
    }
});

// Pass in a colleciton of radiators
function boostRadiators(radiators) {
    if (radiators==null) throw  "NoRadiators provided";
    var myMaxCube = new MaxCube(maxCubeIP, 62910);
    myMaxCube.on('connected', function () {
        console.log('Connected to Max Cube');

        for (var i = 0; i < radiators.length; i++) {
            console.log("Boosting radiator " + radiators[i]);
            //myMaxCube.setTemperature('13856e', 'BOOST').then(
            //    function (success) {
            //        console.log('Radiators BOOSTED');
            //    },
            //    function (error) {
            //        console.log('Error Boosting MainRoom');
            //    }
            // );
        }
    });
}
console.log('Waiting for BoostButton Presses');
