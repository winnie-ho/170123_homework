// Use the code provided to complete the following tasks:

// Add JS code to allow a new cat to be added programmatically. Do it rough and ready at first!
// Refactor the code to make it easy to add a new cat, just like we did with the quotes.
// OPTIONAL: Remove the cat data in the HTML and add them via your javascript. If you want to be fancy, put the cat data into an array.
// OPTIONAL: Style the site!
// Hint: Be careful with the order you append your elements to each other! Also be careful with what you need to pass when setting an image's width via the DOM.

catData = [
{name: "Jelly", favFood: "Tuna", link: "http://www.mycatspace.com/wp-content/uploads/2013/08/adopting-a-cat.jpg"},
{name: "Tickles", favFood: "Cheese", link: "https://devblogs.nvidia.com/parallelforall/wp-content/uploads/2016/07/cute.jpg"},
{name:"Boba", favFood: "Sock Fluff", link: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
{name:"Barnaby", favFood: "Tuna", link: "http://2l9qrt3qasud2pxgh21ym8qe.wpengine.netdna-cdn.com/wp-content/uploads/2014/10/Cat-Dressed-as-a-Bunny-For-Halloween.jpg.jpg"},
{name:"Max", favFood: "Wisk", link: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"}
]


var createCat = function(name, favFood, link){
  var ul = document.createElement("ul");
  ul.classList.add("cat");
  var liName = document.createElement("li");
  liName.innerText = ("Name: " + name);
  var lifaveFood = document.createElement("li");
  lifaveFood.innerText = ("Favourite food: " + favFood);
  ul.appendChild(liName);
  ul.appendChild(lifaveFood);
  return ul;
}


var appendElements = function(cats, ul, picture){
  cats.appendChild(ul);
  ul.appendChild(picture);
}


var addPhoto = function(link){
  var photo = document.createElement("img");
  photo.src = link;
  photo.width = 200;
  return photo;
}

var addCat = function(name, favFood, link){
  var ul = createCat(name, favFood);
  var picture = addPhoto(link);
  var cats = document.getElementById("cats");
  appendElements(cats, ul, picture);

}



var app = function(){
    addCat("Garfield", "Cheese Burger", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");

    for (var cat of catData){
      addCat(cat.name, cat.favFood, cat.link)
    };

};


window.onload = app;