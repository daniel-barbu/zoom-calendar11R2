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
var min=new Date().getHours()*60+new Date().getMinutes(), hStart, hEnd, hNow=new Date().getHours()+":"+new Date().getMinutes(), hour; //0-6
if (445 <= min && min < 490) {hour=0; hStart="7:30"; hEnd="8:10";}
else if (490 <= min && min < 535) {hour=1; hStart="8:15"; hEnd="8:55";}
else if (535 <= min && min < 580) {hour=2; hStart="9:00"; hEnd="9:40";}
else if (580 <= min && min < 625) {hour=3; hStart="9:45"; hEnd="10:25";}
else if (625 <= min && min < 670) {hour=4; hStart="10:30"; hEnd="11:10";}
else if (670 <= min && min < 715) {hour=5; hStart="11:15"; hEnd="11:55";}
else if (715 <= min && min < 760) {hour=6; hStart="12:00"; hEnd="12:40";}

function parseID(x) {return x.substr(0, 3) + " " + x.substr(3, 3) + " " + x.substr(6, 4);}

day=1; hour=2;

if (typeof idTable[day] == "undefined" || typeof idTable[day][hour] == "undefined") {
  document.getElementById("hourInfo").innerHTML="IN AFARA PROGRAMULUI";
  document.getElementById("hourProgress").innerHTML="";
  document.getElementById("idInfo").innerHTML="";
  document.getElementById("passInfo").innerHTML="";
  document.getElementById("browserLink").href="";
  document.getElementById("appLink").href="";}
else {
  document.getElementById("hourInfo").innerHTML="Ora actuala: " + hourTable[day][hour];
  document.getElementById("hourProgress").innerHTML="|-----------------------------------------------|<br>" + hStart + "---" + hNow + "---" + hEnd;
  document.getElementById("idInfo").innerHTML="Meeting ID: " + parseID(idTable[day][hour]);
  document.getElementById("passInfo").innerHTML="Passcode: " + passTable[day][hour];
  document.getElementById("browserLink").href="http://zoom.us/wc/join/" + idTable[day][hour];
  document.getElementById("appLink").href="zoommtg://zoom.us/join?action=join&confno=" + idTable[day][hour];}
