function loadPics() {
  let imgChildren = $(".is-shown").children();
  
  imgChildren.removeClass("show-pic");

  imgChildren.each(function(i) {
    setTimeout( function() {
      imgChildren.eq(i).addClass("show-pic");
    }, 100 + 200 * i);
  });
}

loadPics();

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
