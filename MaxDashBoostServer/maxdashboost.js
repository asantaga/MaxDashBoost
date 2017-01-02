var dash_button = require('node-dash-button');  // Node-Dash-Button library
var MaxCube = require('maxcube');               // MaxCube Library
var config = require('./config.json');          // config.json for properties file
var promise = require('bluebird');              // Using Bluebird for Promises

// Radiators to Boost per set
var boostSet1 = [
    "13856e", "13856e"
];

console.log("Connecting to MaxCube @ "+  config.maxCubeIp);
// Print out DashButtons Being listened to
var dashButtonList = [
];
for (i = 0; i < config.dashButtons.length; i++)
{
    dashButtonList.push(config.dashButtons[i].id);
}
console.log('Listening to ' + i + " DashButtons " + dashButtonList);

var dashButtonListener = dash_button(dashButtonList, null, null, 'all'); //address from step above
dashButtonListener.on("detected", function (dash_id)
{
    // Button Pressed, find name of DashButton
    var dashButtonData = config.dashButtons.filter(function (v)
    {
        return v.id === dash_id;
    })[0];
    console.log(dashButtonData);
    console.log(typeof dashButtonData);
    if (typeof dashButtonData === 'undefined' || dashButtonData === null)
    {
        console.log("Unknown DashButton Found");
    }
    else
    {
        console.log("Found Button " + dashButtonData.name + " boosting " + dashButtonData.boostRadiators);
        boostRadiators(dashButtonData.boostRadiators);
    }

});

// Pass in a colleciton of radiators
function boostRadiators(radiators)
{
    if (typeof radiators === 'undefined' || radiators === null)
    {
        throw  "NoRadiators provided to boostRadiators";
    }
    console.log("Boosting Radiators "+JSON.stringify(radiators));
    
    var myMaxCube = new MaxCube(config.maxCubeIp, 62910);
    myMaxCube.on('connected',
            function ()
            {
                console.log('Connected to Max Cube');
                promise.each(radiators,
                        function (element, index, length)
                        {
                            return  myMaxCube.setTemperature(element, 'BOOST').then(
                                    function (success)
                                    {
                                        console.log(JSON.stringify(success));
                                        console.log('Radiator ' + radiators[i] + ' BOOSTED');
                                    },
                                    function (error)
                                    {
                                        console.log('Error Boosting ' + radiators[i]);
                                    });
                        });
                // Done Boosting close connection
                myMaxCube.close().then (function() { console.log('Connection Closed');});                
            }
    );

}
console.log('Waiting for BoostButton Presses');

