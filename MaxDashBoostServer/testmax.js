var MaxCube = require('maxcube');
var myMaxCube = new MaxCube('192.168.0.222', 62910);

myMaxCube.on('connected', function ()
{
    console.log('Connected, waiting 1second');

    setTimeout(function ()
    {
        myMaxCube.setTemperature('1381f8', 21).then(
                function (success)
                {
                    if (success)
                    {
                        console.log('Temperature set');
                    }
                    else
                    {
                        console.log('Error setting Temperature');
                    }
                    myMaxCube.close();
                },
                function (failure)
                {
                    console.log('Error occured ' + failure);
                }
        );

    },5000);
});

myMaxCube.on('closed', function ()
{
    console.log('Connection closed');
});
