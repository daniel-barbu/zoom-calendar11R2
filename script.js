var id=[[-1, 0, 93348152492, 93348152492, 7085101158, 8216620219],                      //monday
            [2992554819, 2992554819, 4640596961, 0, 0, 0],                              //tuesday
            [4928189003, 7956423044, 4640596961, 4640596961, 0, 3227920578],            //wednesday
            [0, 6306944163, 93348152492, 93348152492, 0, 89999600136, 2992554819],      //thursday
            [4515724423, 2992554819, 7956423044, 7956423044, 0, 0]];                    //friday
           
var pass=[["-1", "0", "clasa11R2", "clasa11R2", "3u5ZSY", "3vusvY"],                    //monday
                ["mateC", "mateC", "1NpS2Q", "0", "0", "0"],                            //tuesday
                ["2aqEhT", "b6z4qD", "1NpS2Q", "1NpS2Q", "0", "8gqSUv"],                //wednesday
                ["0", "0JsqgQ", "clasa11R2", "clasa11R2", "0", "pa5WfX", "mateC"],      //thursday
                ["806phK", "mateC", "b6z4qD", "b6z4qD", "0", "0"]];                     //friday
 
var dayOfWeek=new Date().getDay()-1;//0-4
var minutesToday=new Date().getHours()*60+new Date().getMinutes(), hour; //0-6
if (445 <= minutesToday && minutesToday < 490) hour=0;
else if (490 <= minutesToday && minutesToday < 535) hour=1;
else if (535 <= minutesToday && minutesToday < 580) hour=2;
else if (580 <= minutesToday && minutesToday < 625) hour=3;
else if (625 <= minutesToday && minutesToday < 670) hour=4;
else if (670 <= minutesToday && minutesToday < 715) hour=5;
else if (715 <= minutesToday && minutesToday < 760) hour=6;

if (typeof id[dayOfWeek][hour] != "undefined"){ 
  document.getElementById("hourInfo")="Ora actuala: "+ hour[dayOfWeek][hour];
  document.getElementById("meetingInfo")="Meeting ID: " id[dayOfWeek][hour] + " — Passcode: " + pass[dayOfWeek][hour];
  document.getElementById("browserLink").href="http://zoom.us/wc/join/" + id[dayOfWeek][hour];
  document.getElementById("appLink").href="zoommtg://zoom.us/join?action=join&confno=" + id[dayOfWeek][hour];}
else {}
