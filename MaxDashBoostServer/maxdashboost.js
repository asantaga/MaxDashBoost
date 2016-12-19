var dash_button = require('node-dash-button');
var MaxCube = require('maxcube');
var config = require('./config.json');


// Radiators to Boost per set
var boostSet1 = ["13856e", "13856e"];

console.log(config.maxCubeIp);

var dashButtonList = [];
for (i = 0; i < config.dashButtons.length; i++)
{
    dashButtonList.push(config.dashButtons[i].id);
}

console.log('Listening to ' + i + " DashButtons " + dashButtonList);

var dashButtonListener = dash_button(dashButtonList, null, null, 'all'); //address from step above
dashButtonListener.on("detected", function (dash_id) {
    // Button Pressed, find name of DashButton

    var dashButtonData = config.dashButtons.filter(function (v) {
        return v.id === dash_id;
    })[0];
    console.log(dashButtonData);
    console.log(typeof dashButtonData);
    if ( typeof dashButtonData === 'undefined' || dashButtonData === null )
    {
        console.log("Unknown DashButton Found");
    }
    else
    {
         console.log("Found Button "+dashButtonData.name+" boosting "+dashButtonData.boostRadiators);
         boostRadiators(dashButtonData.boostRadiators);
    }

});

// Pass in a colleciton of radiators
function boostRadiators(radiators) {
   if ( typeof radiators === 'undefined' || radiators === null )
        throw  "NoRadiators provided";
    var myMaxCube = new MaxCube(config.maxCubeIp, 62910);
    myMaxCube.on('connected', function () {
        console.log('Connected to Max Cube');

        for (var i = 0; i < radiators.length; i++) {
            console.log("Boosting radiator " + radiators[i]);
            myMaxCube.setTemperature(radiators[i], 'BOOST').then(
                function (success) {
                    console.log(JSON.stringify(success));
                    console.log('Radiator '+radiators[i]+' BOOSTED');
                },
                function (error) {
                    console.log('Error Boosting '+radiators[i]);
                }
             );
        }
    });
}
console.log('Waiting for BoostButton Presses');
