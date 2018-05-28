// Get parameters from the URL using javascript
//*****************************
    //First initialize URLparameters, then you can get parameters usin
    //    URLparameters.parameter1

var URLparameters = function () {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to URLparameters!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
    return query_string;
}();



//****************************************************
//******   DATE AND TIME in Javascript  ***********
//****************************************************

/*
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var month_names_short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


d = new Date();
d = new Date("2015-08-30");


year_full = d.getFullYear();
year_weird = d.getYear();  //years from 1900

month_number = d.getMonth(); //0 = January (#)
    month_name = months[ d.getMonth() ];

weekday_number = d.getDay(); //0 = Sunday
    weekday_name = days[ d.getDay() ];

day_number = d.getDate();
    if (day_number< 10) { day_number= '0' + day_number; }
hours = d.getHours();

minutes = d.getMinutes();
    if (minutes< 10) { minutes= '0' + minutes; }

seconds = d.getSeconds();
    if (seconds< 10) { seconds= '0' + seconds; }


*/

function getmyDate(aOffset){  //deprecated
  offset = aOffsetDays || 0;
  return getMyDateString(null, offset);
}

function getMyDateString(aDate, aOffsetDays) { // get the date in format "2015-08-02" -> used to fill inputs with type date.
    d = aDate || new Date();  // if no date given, then it is just today
    offset = aOffsetDays || 0;

    d.setDate(d.getDate() + offset);

    yy = d.getFullYear();
    mm = d.getMonth() + 1;
    if (mm< 10) { mm= '0' + mm; }

    dd = d.getDate();
    if (dd< 10) { dd= '0' + dd; }
    mdate = yy + "-" + mm +"-" + dd;
    return mdate;

    //document.getElementById("myDate").value = mdate;
}


function ISO_week_number(dt) {
  var tdt = new Date(dt.valueOf());
  var dayn = (dt.getDay() + 6) % 7;
  tdt.setDate(tdt.getDate() - dayn + 3);
  var firstThursday = tdt.valueOf();
  tdt.setMonth(0, 1);
  if (tdt.getDay() !== 4){
    tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
  }
  return 1 + Math.ceil((firstThursday - tdt) / 604800000);
}

function getMonthLongName(aDate){
  d = aDate || new Date();  // if no date given, then it is just today

  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  month_number = d.getMonth(); //0 = January (#)
  month_name = months[ d.getMonth() ];
  return month_name;
}

function getMonthLongName_es(aDate){
  d = aDate || new Date();  // if no date given, then it is just today

  var months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  month_number = d.getMonth(); //0 = Enero (#)
  month_name = months[ d.getMonth() ];
  return month_name;
}

function getWeekDay(aDate){
  d = aDate || new Date();  // if no date given, then it is just today

  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  weekday_number = d.getDay(); //0 = Sunday

  var weekday_name = days[ d.getDay() ];
  return weekday_name;
}

function getWeekDay_es(aDate){
  d = aDate || new Date();  // if no date given, then it is just today

  var days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  weekday_number = d.getDay(); //0 = Sunday
  var weekday_name = days[ d.getDay() ];
  return weekday_name;
}

//numbers
function getMonthNumber(aDate){
  d = aDate || new Date();  // if no date given, then it is just today
  mm = d.getMonth() + 1;
  if (mm< 10) { mm= '0' + mm; }
  return mm;
  
}




//---------------------------

function submitBackground_POST(aURL, aParameters, aSucessMessage) {
   // aURL= "www.arrietaeguren.es/sop/cards/cloudStorage.php";
   // parameters = "action="+action+"&user="+user+"&pass="+pass+"&json="+json;


  var xmlhttp;
  if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else{// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

  
  xmlhttp.onreadystatechange=function(){
    if (sucess_message!="" && sucess_message!=undefined){
      window.alert(success_message);
    }

  }

  xmlhttp.open("POST",aURL,true);
  
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  
  xmlhttp.send(parameters);
  
}// end submitBackground_POST



function addPinchListenerAlex2(aMyElementID){
  
  //requires: 'http://hammerjs.github.io/dist/hammer.min.js';

  locall = localStorage.getItem(aMyElementID + "size");
  if (locall != null ){
    $("#" + aMyElementID).css('font-size', locall + 'px');
    //window.alert(size_ini);
  }
  var size_ini = parseInt($("#"+aMyElementID).css('font-size'));
  if (size_ini == 0){size_ini=1};

  var size_new; // = size_ini;

  var myElement = document.getElementById(aMyElementID);
  var mc = new Hammer.Manager(myElement, {
      touchAction: 'auto',  //then we need to use ev.preventDefault();
  });

  // create a pinch and rotate recognizer
  // these require 2 pointers
  var pinch = new Hammer.Pinch();
  var rotate = new Hammer.Rotate();

  // we want to detect both the same time
  pinch.recognizeWith(rotate);

  // add to the Manager
  mc.add([pinch, rotate]);

  mc.on("pinchstart rotatestart", function(ev){
    ev.preventDefault();

    //get current size:
    size_ini =  parseInt($("#"+aMyElementID).css('font-size'));
    if (size_ini == 0){size_ini=1};
    //document.getElementById("p4").innerHTML= document.getElementById("p4").innerHTML + size_ini + "<br>" ;
  });

  mc.on("pinch rotate", function(ev) {
    ev.preventDefault();
    console.log(ev.scale);

    var scalee = ev.scale;
    var size_new = parseInt(size_ini * scalee);


    //set  current size
    $("#" + aMyElementID).css('font-size', size_new + 'px');
    //document.getElementById("p3").innerHTML= "<p>Font size_ini: " + size_ini + "<br>Scale: " + scalee + "<br>New size: " + size_new + "</p>";
  });


  mc.on("pinchend", function(ev){
    //ev.preventDefault()
    
    size_fin =  parseInt($("#"+aMyElementID).css('font-size'));
    localStorage.setItem(aMyElementID + "size", size_fin);
    if (size_ini == 0){size_ini=1};
    
  });

}  //end addPinchListenerAlex




function arrayToSelectOptions(aDropdown,aArrayWithOptions, aAppendOnly){
  //Function to put options from an array into a dropdown (tag:select) | append = false to reset. | Selects the first option and refreshes which works for jquery mobile ;)
  if (aAppendOnly != true){
    aDropdown.html(""); //reset the dropdown.
  }

  //Add options
  aArrayWithOptions.forEach(function(item,index){
    aDropdown.append('<option value="' + item +  '">' + item + '</option>');
  });

  //Select the first option.
  first_option = aDropdown.first().val();
  aDropdown.val(first_option);
  aDropdown.selectmenu('refresh', true);

}