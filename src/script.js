// Add "is-shown" class one by one.

function loadPics() {
  let imgChildren = $(".is-shown").children();
  
  imgChildren.removeClass("show-pic");

  imgChildren.each(function(i) {
    setTimeout( function() {
      imgChildren.eq(i).addClass("show-pic");
    }, 100 + 170 * i);
  });
}

loadPics();

// Changes selected category and loads relevant pics.

$(".category").click(function() {
  let $this = $(this),
      catNumber = $this.index(),
      $pages = $(".pics-zone");
  
  console.log(catNumber);
  $(".category").removeClass("selected");
  $this.addClass("selected");
  
  $pages.removeClass("is-shown");
  $pages[catNumber].className += " is-shown";
  
  loadPics();
});

//$(".container").load('2d.html');

$.ajax({
  type: "POST",
  url: '/2d',
  success: function(res) {
    let dude = res["backgrounds"].map(function(item) {
      return "<h1>" + item["title"] + "</h1>";
    })
    console.log(dude);
    
    $(".container").html(dude);
  }
});








