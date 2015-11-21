

function digfunc() {
	var d = new Date();
 
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
	
	var x = document.getElementById("digwatch");
	
	x.getElementsByClassName("digit-hours")[0].innerHTML= h;
	x.getElementsByClassName("digit-minutes")[0].innerHTML=m;
	x.getElementsByClassName("digit-seconds")[0].innerHTML=s;
	
	
	}
	setInterval(digfunc, 1000);
function myfunc2() {
	
	
	var d = new Date();
 
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
	
	var secondhand = s*6;
	var minutehand = m*6;
	var hourhand = ((h-12)*30) + (m/2);
	
	var x = document.getElementById("watch2");
	x.getElementsByClassName("hours-hand")[0].style.transform = "rotate("+ hourhand +"deg)";
	x.getElementsByClassName("minutes-hand")[0].style.transform = "rotate("+ minutehand +"deg)";
	x.getElementsByClassName("seconds-hand")[0].style.transform = "rotate("+ secondhand +"deg)"
}	
function GetWeather(yourUrl){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

var weather = JSON.parse(GetWeather('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22islamabad%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'));
if (!weather.query.results.channel.item.condition)
    location.reload();

function weatherNew() { 
    clean();

    completeWeather();

    spacer();
	var disp = document.getElementById("newweather");
	disp.style.display= "block";
	
    
}

function clean() { 
    document.getElementById("container").innerHTML = "";
}

function addInContainer(object) {
    var container = document.getElementById("container");
    container.appendChild(object);
}

function spacer() {
    addInContainer(document.createElement("br"));
    addInContainer(document.createElement("br"));
}


function completeWeather(){
    var table = document.createElement("table");

    var row1 = document.createElement("tr");
    var header = document.createElement("th");
    header.setAttribute("colspan", "2");
    header.textContent = weather.query.results.channel.location.city + " " + weather.query.results.channel.location.country;
    row1.appendChild(header);

    var row2 = document.createElement("tr");
    var td11 = document.createElement("td");
    td11.textContent = "Temperature";
    var td12 = document.createElement("td");
    td12.textContent = weather.query.results.channel.item.condition.temp;
    row2.appendChild(td11);
    row2.appendChild(td12);
    
    var row3 = document.createElement("tr");
    var td21 = document.createElement("td");
    td21.textContent = "Condition";
    var td22 = document.createElement("td");
    td22.textContent = weather.query.results.channel.item.condition.text;
    row3.appendChild(td21);
    row3.appendChild(td22);

    var row4 = document.createElement("tr");
    var td31 = document.createElement("td");
    td31.textContent = "Moist";
    var td32 = document.createElement("td");
    td32.textContent = weather.query.results.channel.atmosphere.humidity;
    row4.appendChild(td31);
    row4.appendChild(td32);

    var row5 = document.createElement("tr");
    var td41 = document.createElement("td");
    td41.textContent = "Date";
    var td42 = document.createElement("td");
    td42.textContent = weather.query.results.channel.item.condition.date;
    row5.appendChild(td41);
    row5.appendChild(td42);

    table.appendChild(row1);
    table.appendChild(row5);
    table.appendChild(row2);
	 table.appendChild(row4);
    table.appendChild(row3);
   

    addInContainer(table);
}


function newClock()
{
	var disp = document.getElementById("new_clock");
	disp.style.display= "block";
	var old_disp = document.getElementById("container");
	old_disp.style.display= "none";
	myfunc2();
	
}
function newCalender()
{
	var disp = document.getElementById("newcalendar");
	disp.style.display= "block";
	var old_disp = document.getElementById("container");
	old_disp.style.display= "none";
	
	
	
}
function newWeather()
{
	var disp = document.getElementById("newweather");
	disp.style.display= "block";
	var old_disp = document.getElementById("container");
	old_disp.style.display= "none";
	
	
	
	
}

