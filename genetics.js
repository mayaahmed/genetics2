

var x=10; var y=0;
var mainString; var truncatedString; var slicedString;
var m=20;  var n=10;

var resultsString=" ";


function run(){ 
 mainString = document.getElementById('inputText').value;
 console.log(mainString);
 mainString=mainString.trim();

 if(mainString.length == m) splitStringLast(mainString);

if(mainString.length > m){
truncatedString = mainString.substring(0, m);
 splitString(truncatedString);
 slicedString= mainString.slice(1); 
}

var i =0;
while(slicedString.length >m && i<8){
truncatedString = slicedString.slice(0, m);
splitString(truncatedString);
slicedString= slicedString.slice(1); 
i=i+1;
 }


if(i==8 && slicedString.length>m){
truncatedString = slicedString.slice(0, m);
splitStringLast(truncatedString);
}

else if(slicedString.length == m) splitStringLast(slicedString);
google();

} //  end of function run


function splitString(string){
 part1 = string.substring(0, n);
part2= string.slice(n);
y=y+10;

resultsString=resultsString+ ' " ' + part1 + "     " +part2 + " \" OR ";


/*
output.innerHTML= output.innerHTML+ ' " ' + part1 + "     ";
output.innerHTML= output.innerHTML+part2 + " \" OR ";
*/
}


function splitStringLast(string){
 part1 = string.substring(0, n);
part2= string.slice(n);
y=y+10;

resultsString=resultsString+ ' " ' + part1 + "     " +part2 + " \" ";
/*
output.innerHTML= output.innerHTML+ ' " ' + part1 + "     ";
output.innerHTML= output.innerHTML+part2 + " \" ";
*/
}

function google()
{
  var str = resultsString;
str="http://www.google.com/search?hl=en&source=hp&q=" + str + "&aq=f&oq=&aqi=";
var replaced=str.replace(" ","+");
window.location.assign(replaced)
}
