// Add "is-shown" class one by one.

function loadPics() {
  let images = $(".image-container").children();
  
  images.each(function(i) {
    setTimeout(function() {
      images.eq(i).addClass("show-pic");
    }, 100 + 170 * i);
  });
}

// Changes selected main category and load side-categories.

$(".category").click(function() {
  let $this = $(this),
      catNumber = $this.index(),
      id = this.id;
  
  if (!$this.hasClass("selected")) {
    $(".category").removeClass("selected");
    $this.addClass("selected");
    
    $.ajax({
      type: "POST",
      url: "/" + id,
      success: function(res) {
        page = res;
        let categories = res["sideBar"].map(function(cat) {
          return "<li id='" + cat.category + "' class='side-category'>" + cat.title + "</li>";
        });
        
        $(".side-bar").html(categories);
        $(".image-container").html("<div class='no-images-selected'>Select a Category</div>");
      } 
    });
  }
});

//Change selected side-category and load relevant imgs

$(".side-bar").on('click', '.side-category', function() {
  let $this = $(this),
      category = $this.attr("id"),
      imgs = page.imgs[category].map(function(item) {
        return "<div class='image-item'><img src=" + item["image"] + "><div class='title'>" + item["title"] +"</div></></div>";
      });
  $(".side-category").removeClass("selected");
  
  $this.addClass("selected");
  
  $(".image-container").html(imgs);
  
  loadPics();
});



//default start page

var page = {};

$.ajax({
  type: "POST",
  url: '/3d',
  success: function(res) {
    page = res;

    let categories = res["sideBar"].map(function(cat) {
      return "<li id='" + cat.category + "' class='side-category'>" + cat.title + "</li>";
    });
    
    $(".image-container").html("<div class='no-images-selected'>Select a Category</div>");
    $(".side-bar").html(categories);
    
  }
});






