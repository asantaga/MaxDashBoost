/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * 
 * 13856e (KitchenThermo, Kitchen_Living Room) - temp: 24.2, setpoint: 21, valve: 0, mode: AUTO
1385f3 (Central Thermostat1, Kitchen_Living Room) - temp: 22.9, setpoint: 21, valve: 21, mode: AUTO
1315bc (Radiator Thermostat 1, Spare Bedroom) - temp: 0, setpoint: 17, valve: 0, mode: MANUAL
12e5fc (Streetside Thermostat, Master Bedroom) - temp: 24.5, setpoint: 21.5, valve: 0, mode: MANUAL
1385de (Hallway, Hallway) - temp: 22, setpoint: 19, valve: 0, mode: AUTO
138561 (Matteos  Bedroom, Matteos Bedroom) - temp: 24.2, setpoint: 17, valve: 0, mode: AUTO
12e5c7 (Garden Thermostat 1, Master Bedroom) - temp: 23, setpoint: 21.5, valve: 9, mode: MANUAL
0dd84e (Radiator Thermostat 1, Front Room) - temp: 24.1, setpoint: 21, valve: 0, mode: MANUAL
1381f8 (Office Thermostat 1, Office) - temp: 22.2, setpoint: 20, valve: 0, mode: AUTO
12e5f4 (Utility Room, Utility Room) - temp: 0, setpoint: 16, valve: 0, mode: AUTO
 * 
 * 
 */

{
    "maxCubeIp" : "192.168.0.222",
    "dashButtons" :  [
                { "name" : "fairyButton", "id" : "50:f5:da:55:fc:d7"},
                { "name" : "finishButton", "id" : "ac:63:be:1d:1e:2f"} 
            ],
    "boostSets" : 
            [
                "buttonName" : "fairyButton", "boostRadiators" : ["13856e","1385f3"],"Comment" : "Kitchen Thermostat"
            ]
}
