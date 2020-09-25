var idTable=[["-1", "0", "93348152492", "93348152492", "7085101158", "8216620219"],                 //monday
            ["2992554819", "2992554819", "4640596961", "0", "0", "0"],                              //tuesday
            ["4928189003", "7956423044", "4640596961", "4640596961", "0", "3227920578"],            //wednesday
            ["0", "6306944163", "93348152492", "93348152492", "0", "89999600136", "2992554819"],    //thursday
            ["4515724423", "2992554819", "7956423044", "7956423044", "4266725480", "4266725480"]];  //friday
           
var passTable=[["-1", "0", "clasa11R2", "clasa11R2", "3u5ZSY", "3vusvY"],               //monday
                ["mateC", "mateC", "1NpS2Q", "0", "0", "0"],                            //tuesday
                ["2aqEhT", "b6z4qD", "1NpS2Q", "1NpS2Q", "0", "8gqSUv"],                //wednesday
                ["0", "0JsqgQ", "clasa11R2", "clasa11R2", "0", "pa5WfX", "mateC"],      //thursday
                ["806phK", "mateC", "b6z4qD", "b6z4qD", "h2u4g6o8", "h2u4g6o8"]];       //friday

var hourTable=[["-1", "SC", "INFORMATICA", "INFORMATICA", "SPORT", "FRANCEZA"],                           //monday
                ["MATEMATICA", "MATEMATICA", "FIZICA", "ENGLEZA", "ENGLEZA", "DIRIGENTIE"],               //tuesday
                ["GEOGRAFIE", "ROMANA", "FIZICA", "FIZICA", "FRANCEZA", "ECONOMIE"],                      //wednesday
                ["RELIGIE", "BIOLOGIE", "INFORMATICA", "INFORMATICA", "ENGLEZA", "CHIMIE", "MATEMATICA"], //thursday
                ["ISTORIE", "MATEMATICA", "ROMANA", "ROMANA", "ENGLEZA", "ENGLEZA"]];                     //friday
 
var day=new Date().getDay()-1;//0-4
var min=new Date().getHours()*60+new Date().getMinutes(), hour; //0-6
if (445 <= min && min < 490) hour=0;
else if (490 <= min && min < 535) hour=1;
else if (535 <= min && min < 580) hour=2;
else if (580 <= min && min < 625) hour=3;
else if (625 <= min && min < 670) hour=4;
else if (670 <= min && min < 715) hour=5;
else if (715 <= min && min < 760) hour=6;

function parseID(x) {return x.substr(0, 3) + " " + x.substr(3, 3) + " " + x.substr(6, 4);}

if (typeof id[dayOfWeek][hour] != "undefined"){ 
  document.getElementById("hourInfo").innerHTML="Ora actuala: " + hourTable[day][hour];
  document.getElementById("meetingInfo").innerHTML="Meeting ID: " + parseID(idTable[day][hour]) + " — Passcode: " + passTable[day][hour];
  document.getElementById("browserLink").href="http://zoom.us/wc/join/" + parseID(idTable[day][hour]);
  document.getElementById("appLink").href="zoommtg://zoom.us/join?action=join&confno=" + parseID(idTable[day][hour]);}
else {
  document.getElementById("hourInfo")="Ora actuala: IN AFARA PROGRAMULUI";
  document.getElementById("meetingInfo")="Meeting ID: 000 000 0000 — Passcode: 000000";}
