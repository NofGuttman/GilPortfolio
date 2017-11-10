var randomListOfScrolls = [];

for(let i = 0; i < 12; i++) {
  randomListOfScrolls.push([Math.random() * 8 - 1, Math.random() * 2 - 1]);
}

$(document).scroll(function() {
  let scroll = $(this).scrollTop();
    
  $(".header").children("span").each(function(i) {
    $(this).css({ transform: "translate(" + scroll * (randomListOfScrolls[i][1] / 10) + "px, " + scroll * (randomListOfScrolls[i][0] / 10) + "px)"});
  });
});