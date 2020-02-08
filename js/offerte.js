 var settings = {
  "async": true,
  "url": "https://raw.githubusercontent.com/binc0/studenti/master/csvjson.json",
  "method": "GET",
};

$.ajax(settings).done(function (jcontent){
    
    console.log(jcontent[1].Nome);
   
for (var i = 0; i < jcontent.count; i++) {
    console.log(i);

var output = document.getElementById('offerte');
output.innerHTML += '';
    


}

});






