var idTable=[["-1", "01", "02", "03", "04", "05"],        //monday
             ["10", "11", "12", "13", "14", "15"],        //tuesday
             ["20", "21", "22", "23", "24", "25"],        //wednesday
             ["30", "31", "32", "33", "34", "35", "36"],  //thursday
             ["40", "41", "42", "43", "44", "45"]];       //friday
           
var passTable=[["-1", "01", "02", "03", "04", "05"],        //monday
               ["10", "11", "12", "13", "14", "15"],        //tuesday
               ["20", "21", "22", "23", "24", "25"],        //wednesday
               ["30", "31", "32", "33", "34", "35", "36"],  //thursday
               ["40", "41", "42", "43", "44", "45"]];       //friday

var hourTable=[["-1", "SC", "INFORMATICA", "INFORMATICA", "SPORT", "FRANCEZA"],                           //monday
                ["MATEMATICA", "MATEMATICA", "FIZICA", "ENGLEZA", "ENGLEZA", "DIRIGENTIE"],               //tuesday
                ["GEOGRAFIE", "ROMANA", "FIZICA", "FIZICA", "FRANCEZA", "ECONOMIE"],                      //wednesday
                ["RELIGIE", "BIOLOGIE", "INFORMATICA", "INFORMATICA", "ENGLEZA", "CHIMIE", "MATEMATICA"], //thursday
                ["ROMANA", "ISTORIE", "MATEMATICA", "ROMANA", "ENGLEZA", "ENGLEZA"]];                     //friday

var hStart=["7:30", "8:15", "9:00", "09:45", "10:30", "11:15", "12:00"];
var hEnd=["8:10", "8:55", "9:40", "10:25", "11:10", "11:55", "12:40"];
var hMin=[445, 490, 535, 580, 625, 670, 715, 760];

function parseID(x) {if (x.length==9) return x.substr(0, 3) + " " + x.substr(3, 3) + " " + x.substr(6, 3); else if (x.length==10) return x.substr(0, 3) + " " + x.substr(3, 3) + " " + x.substr(6, 4); else if (x.length==11) return x.substr(0, 3) + " " + x.substr(3, 4) + " " + x.substr(7, 4); else if (x.length==12) return x.substr(0, 4) + " " + x.substr(4, 4) + " " + x.substr(8, 4);}
function parseTime(x) {if (x<10) return "0"+x; else return x;}

function main() {
var day=new Date().getDay()-1;//0-4 
var min=new Date().getHours()*60+new Date().getMinutes(), hNow=new Date().getHours() + ":" + parseTime(new Date().getMinutes()), hour; //0-6
if (hMin[0] <= min && min < hMin[1]) hour=0;
else if (hMin[1] <= min && min < hMin[2]) hour=1;
else if (hMin[2] <= min && min < hMin[3]) hour=2;
else if (hMin[3] <= min && min < hMin[4]) hour=3;
else if (hMin[4] <= min && min < hMin[5]) hour=4;
else if (hMin[5] <= min && min < hMin[6]) hour=5;
else if (hMin[6] <= min && min < hMin[7]) hour=6;
perc=(min-(hMin[hour]+5))/40;
        
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
    document.getElementById("hourProgress").innerHTML= hStart[hour] + " |" + "-".repeat(perc*70) + "<span id='whiteText'>|</span>" + "-".repeat((1-perc)*70) + "| " + hEnd[hour] + "<br>" + "<span id='invisibleText'>" + "-".repeat(perc*70) + "</span><span id='whiteText'>" + hNow + "</span><span id='invisibleText'>"+ "-".repeat((1-perc)*70) + "</span>";}}
} main(); setTimeout(function(){main(); setInterval(main, 60000);}, (60-new Date().getSeconds())*1000);
