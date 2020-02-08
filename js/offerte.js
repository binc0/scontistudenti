 var settings = {
  "async": true,
  "url": "https://raw.githubusercontent.com/binc0/studenti/master/csvjson.json",
  "method": "GET",
};

$.ajax(settings).done(function (jcontent){
    
    console.log(jcontent.Nome);
   
for (var i = 0; i < jcontent.count; i++) {
    console.log(i);

var output = document.getElementById('offerte');
output.innerHTML += '';
    


}

});




<div class="col-md-6 mb-4 mb-lg-4 col-lg-4">
            
            <div class="listing-item">
              <div class="listing-image">
                <img src="images/img_1.jpg" alt="Free Website Template by Free-Template.co" class="img-fluid">
              </div>
              <div class="listing-item-content">
                <a href="listings-single.html" class="bookmark" data-toggle="tooltip" data-placement="left" title="Bookmark"><span class="icon-heart"></span></a>
                <a class="px-3 mb-3 category" href="#">Hotels</a>
                <h2 class="mb-1"><a href="listings-single.html">Luxe Hotel</a></h2>
                <span class="address">West Orange, New York</span>
              </div>
            </div>

          </div>

