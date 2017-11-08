$(document).scroll(function() {
  let scroll = $(this).scrollTop();
  
  let listOfScroll = [4, 3, 0, 5, 2, 6, 4, 3, 7, 4, -2, 1];
  
  $(".header").children("span").each(function(i) {
    $(this).css({ transform: "translateY(" + scroll * (listOfScroll[i] / 10) + "px)"})
  });
});