var lengthOfImages = 0,
    numOfSelectedImage = 0;

// Add "show" class one by one.

function loadElements(list, speed = 150) {
  let images = list;
  
  images.each(function(i) {
    setTimeout(function() {
      images.eq(i).addClass("show");
    }, 100 + speed * i);
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
        
        loadElements($(".side-category"), 100);
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
  
  if($this.hasClass("selected")) {
    return;
  }
  
  $(".side-category").removeClass("selected");
  
  $this.addClass("selected");
  
  $(".image-container").html(imgs);
  
  loadElements($(".image-item"), 150);
});


//Click on image to open the black screen

$(".image-container").on('click', '.image-item', function() {
  let $this = $(this),
      numOfSelectedImage = $this.index(),
      thisImage = $this.children("img").clone();
  showNthImage(numOfSelectedImage);
  $(".black-screen").css({"display": "block"});
});


//Show nth image

function showNthImage(n) {
  let lenghtOfImages = $(".image-item").length;
  if(n < 0) {
    numOfSelectedImage = lenghtOfImages - 1;
  } else if(n > lenghtOfImages - 1) {
    numOfSelectedImage = 0;
  } else {
    numOfSelectedImage = n;
  }
  console.log(numOfSelectedImage)
  let $selectedElement = $(".image-item img").toArray()[numOfSelectedImage].cloneNode();
  $(".black-screen-image").html($selectedElement);
}


//Press ESC to close the black screen div

$(document).on('keydown', function(e) {
  if(e.keyCode == 27) {
    $(".black-screen").css({"display": "none"});
  }
});



//Default start page

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
    
    loadElements($(".side-category"), 100);
    
  }
});






