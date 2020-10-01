var idTable=[["-1", "0", "92803342050", "92803342050", "78027691338", "8216620219"],                //monday
            ["2992554819", "2992554819", "4640596961", "79002124094", "76791166480", "0"],          //tuesday
            ["4928189003", "7956423044", "4640596961", "4640596961", "0", "3227920578"],            //wednesday
            ["0", "6306944163", "92803342050", "92803342050", "0", "89999600136", "2992554819"],    //thursday
            ["4515724423", "2992554819", "7956423044", "7956423044", "4266725480", "4266725480"]];  //friday
           
var passTable=[["-1", "0", "cosbuc11R2", "cosbuc11R2", "n5zcS3", "3vusvY"],               //monday
                ["mateC", "mateC", "1NpS2Q", "5Zkui8", "3HqWPd", "0"],                    //tuesday
                ["2aqEhT", "b6z4qD", "1NpS2Q", "1NpS2Q", "0", "8gqSUv"],                  //wednesday
                ["0", "0JsqgQ", "cosbuc11R2", "cosbuc11R2", "0", "pa5WfX", "mateC"],      //thursday
                ["806phK", "mateC", "b6z4qD", "b6z4qD", "h2u4g6o8", "h2u4g6o8"]];         //friday

var hourTable=[["-1", "SC", "INFORMATICA", "INFORMATICA", "SPORT", "FRANCEZA"],                           //monday
                ["MATEMATICA", "MATEMATICA", "FIZICA", "ENGLEZA", "ENGLEZA", "DIRIGENTIE"],               //tuesday
                ["GEOGRAFIE", "ROMANA", "FIZICA", "FIZICA", "FRANCEZA", "ECONOMIE"],                      //wednesday
                ["RELIGIE", "BIOLOGIE", "INFORMATICA", "INFORMATICA", "ENGLEZA", "CHIMIE", "MATEMATICA"], //thursday
                ["ISTORIE", "MATEMATICA", "ROMANA", "ROMANA", "ENGLEZA", "ENGLEZA"]];                     //friday

var hStart=["7:30", "8:15", "9:00", "9:45", "10:30", "11:15", "12:00"];
var hEnd=["8:10", "8:55", "9:40", "10:25", "11:10", "11:55", "12:40"];
var hMin=[445, 490, 535, 580, 625, 670, 715, 760];

function parseID(x) {if (x.length==9) return x.substr(0, 3) + " " + x.substr(3, 3) + " " + x.substr(6, 3); else if (x.length==10) return x.substr(0, 3) + " " + x.substr(3, 3) + " " + x.substr(6, 4); else if (x.length==11) return x.substr(0, 3) + " " + x.substr(3, 4) + " " + x.substr(7, 4); else if (x.length==12) return x.substr(0, 4) + " " + x.substr(4, 4) + " " + x.substr(8, 4);}
function parseTime(x) {if (x<10) return "0"+x; else return x;}

var testVar=579;

function main() {
var day=new Date().getDay()-1;//0-4 
var min=new Date().getHours()*60+new Date().getMinutes(), hNow=new Date().getHours() + ":" + parseTime(new Date().getMinutes()), hour; //0-6
            min=testVar;
if (hMin[0] <= min && min < hMin[1]) hour=0;
else if (hMin[1] <= min && min < hMin[2]) hour=1;
else if (hMin[2] <= min && min < hMin[3]) hour=2;
else if (hMin[3] <= min && min < hMin[4]) hour=3;
else if (hMin[4] <= min && min < hMin[5]) hour=4;
else if (hMin[5] <= min && min < hMin[6]) hour=5;
else if (hMin[6] <= min && min < hMin[7]) hour=6;
perc=(min-(hMin[hour]+5))/40+0.01;
        
if (typeof idTable[day] == "undefined" || typeof idTable[day][hour] == "undefined")
  document.getElementsByTagName("div")[0].innerHTML='<h1 id="hourInfo">IN AFARA PROGRAMULUI</h1>';
else {
  document.getElementById("hourInfo").innerHTML="Ora actuala: <span id='lucidaText'>" + hourTable[day][hour] +"</span>";
  document.getElementById("idInfo").innerHTML="Meeting ID: " + parseID(idTable[day][hour]);
  document.getElementById("passInfo").innerHTML="Passcode: " + passTable[day][hour];
  document.getElementById("browserLink").href="http://zoom.us/wc/join/" + idTable[day][hour];
  document.getElementById("appLink").href="zoommtg://zoom.us/join?action=join&confno=" + idTable[day][hour];
  if (perc < 0) 
    intervalVar = setInterval(function(){
      document.getElementById("hourProgress").innerHTML="Ora va incepe in ";
      document.getElementById("hourProgress").innerHTML+= hMin[hour]+4-min + ":" + parseTime(60-new Date().getSeconds()); }, 1000);
  else { 
    if (typeof intervalVar !== "undefined") clearInterval(intervalVar);
    document.getElementById("hourProgress").innerHTML= hStart[hour] + " |" + "-".repeat(perc*70) + "<span id='whiteText'>|</span>" + "-".repeat((1-perc)*70) + "| " + hEnd[hour] + "<br>" + "<span id='invisibleText'>" + "-".repeat(perc*70-2) + "</span><span id='whiteText'>" + hNow + "</span><span id='invisibleText'>"+ "-".repeat((1-perc)*70-2) + "</span>";}}
} main(); setTimeout(function(){main(); setInterval(main, 60000);}, (60-new Date().getSeconds())*1000);
