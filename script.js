var idTable=[["-1", "0", "92803342050", "92803342050", "7085101158", "8216620219"],                 //monday
            ["2992554819", "2992554819", "4640596961", "0", "0", "0"],                              //tuesday
            ["4928189003", "7956423044", "4640596961", "4640596961", "0", "3227920578"],            //wednesday
            ["0", "6306944163", "92803342050", "92803342050", "0", "89999600136", "2992554819"],    //thursday
            ["4515724423", "2992554819", "7956423044", "7956423044", "4266725480", "4266725480"]];  //friday
           
var passTable=[["-1", "0", "cosbuc11R2", "cosbuc11R2", "3u5ZSY", "3vusvY"],               //monday
                ["mateC", "mateC", "1NpS2Q", "0", "0", "0"],                            //tuesday
                ["2aqEhT", "b6z4qD", "1NpS2Q", "1NpS2Q", "0", "8gqSUv"],                //wednesday
                ["0", "0JsqgQ", "cosbuc11R2", "cosbuc11R2", "0", "pa5WfX", "mateC"],      //thursday
                ["806phK", "mateC", "b6z4qD", "b6z4qD", "h2u4g6o8", "h2u4g6o8"]];       //friday

var hourTable=[["-1", "SC", "INFORMATICA", "INFORMATICA", "SPORT", "FRANCEZA"],                           //monday
                ["MATEMATICA", "MATEMATICA", "FIZICA", "ENGLEZA", "ENGLEZA", "DIRIGENTIE"],               //tuesday
                ["GEOGRAFIE", "ROMANA", "FIZICA", "FIZICA", "FRANCEZA", "ECONOMIE"],                      //wednesday
                ["RELIGIE", "BIOLOGIE", "INFORMATICA", "INFORMATICA", "ENGLEZA", "CHIMIE", "MATEMATICA"], //thursday
                ["ISTORIE", "MATEMATICA", "ROMANA", "ROMANA", "ENGLEZA", "ENGLEZA"]];                     //friday

function parseID(x) {return x.substr(0, 3) + " " + x.substr(3, 3) + " " + x.substr(6, 4);}

main(); setTimeout(function(){setInterval(main, 60000);}, (60-new Date().getSeconds())*1000);
function main() {
var day=new Date().getDay()-1;//0-4 
var min=new Date().getHours()*60+new Date().getMinutes(), hStart, hEnd, hNow, hour; //0-6
if (new Date().getMinutes()<10) hNow=new Date().getHours()+":0"+new Date().getMinutes(); else hNow=new Date().getHours()+":"+new Date().getMinutes();
if (445 <= min && min < 490) {hour=0; hStart="7:30"; hEnd="8:10"; perc=(min-450)/40;}
else if (490 <= min && min < 535) {hour=1; hStart="8:15"; hEnd="8:55"; perc=(min-495)/40;}
else if (535 <= min && min < 580) {hour=2; hStart="9:00"; hEnd="9:40"; perc=(min-540)/40;}
else if (580 <= min && min < 625) {hour=3; hStart="9:45"; hEnd="10:25"; perc=(min-585)/40;}
else if (625 <= min && min < 670) {hour=4; hStart="10:30"; hEnd="11:10"; perc=(min-630)/40;}
else if (670 <= min && min < 715) {hour=5; hStart="11:15"; hEnd="11:55"; perc=(min-675)/40;}
else if (715 <= min && min < 760) {hour=6; hStart="12:00"; hEnd="12:40"; perc=(min-720)/40;}

if (typeof idTable[day] == "undefined" || typeof idTable[day][hour] == "undefined")
  document.getElementsByTagName("div")[0].innerHTML='<h1 id="hourInfo">IN AFARA PROGRAMULUI</h1>';
else {
  document.getElementById("hourInfo").innerHTML="Ora actuala: <span id='lucidaText'>" + hourTable[day][hour] +"</span>";
  document.getElementById("hourProgress").innerHTML="|" + "-".repeat(perc*(70+Math.abs(0.5-perc)*15)) + "<span id='whiteText'>|</span>" + "-".repeat((1-perc)*(70+Math.abs(0.5-perc)*15)) + "|<br>" + hStart + " <span id='invisibleText'>"+ ".".repeat(perc*72) + "</span> <span id='whiteText'>" + hNow + "</span> <span id='invisibleText'>"+ ".".repeat((1-perc)*72) + "</span> " + hEnd;
  document.getElementById("idInfo").innerHTML="Meeting ID: " + parseID(idTable[day][hour]);
  document.getElementById("passInfo").innerHTML="Passcode: " + passTable[day][hour];
  document.getElementById("browserLink").href="http://zoom.us/wc/join/" + idTable[day][hour];
  document.getElementById("appLink").href="zoommtg://zoom.us/join?action=join&confno=" + idTable[day][hour];}
}
