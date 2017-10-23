let imgChildren = $(".pics-zone").children();

imgChildren.each(function(i) {
  setTimeout( function() {
    imgChildren.eq(i).addClass("show-pic");
  }, 100 + 200 * i);
});

$(".category").click(function() {
  let $this = $(this);
  let imgChildren = $(".pics-zone").children();
  
  $(".category").removeClass("selected");
  $this.addClass("selected");
  
  imgChildren.each(function(i) {
    setTimeout( function() {
      imgChildren.eq(i).addClass("show-pic");
    }, 100 + 200 * i);
  });
});
