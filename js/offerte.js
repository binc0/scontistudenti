 var settings = {
  "async": true,
  "url": "https://raw.githubusercontent.com/binc0/studenti/master/csvjson.json",
  "method": "GET",
};

$.ajax(settings).done(function (jcontent){
    
    var jcontent = JSON.parse(jcontent);
    console.log(jcontent.elements[0].Nome);
    console.log(jcontent.elements.length);
   
for (var i = 0; i < jcontent.elements.length; i++) {
    console.log(i);

var output = document.getElementById('offerte');
output.innerHTML += '<div class="col-md-6 mb-4 mb-lg-4 col-lg-4"> <div class="listing-item"><div class="listing-image"><img src="' + jcontent.elements[i].image +'" alt="' + jcontent.elements[i].Nome +'" class="img-fluid"> </div> <div class="listing-item-content"> <a href="listings-single.html" class="bookmark" data-toggle="tooltip" data-placement="left" title="Bookmark"><span class="icon-heart"></span></a> <a class="px-3 mb-3 category" href="#' + jcontent.elements[i].tag +'">' + jcontent.elements[i].tag +'</a> <h2 class="mb-1"><a href="listings-single.html">' + jcontent.elements[i].Nome +'</a></h2> <span class="address">' + jcontent.elements[i].text +'</span> </div> </div> </div>';
    


}

});






