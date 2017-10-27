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
      id = this.id;
  
  if (!$this.hasClass("selected")) {
    console.log(id);
    $(".category").removeClass("selected");
    $this.addClass("selected");
    
    $.ajax({
      type: "POST",
      url: "/" + id,
      success: function(res) {
        let categories = res["sideBar"].map(function(cat) {
          return "<li>" + cat + "</li>";
        });
        $(".side-bar").html(categories);
      } 
    });
  }
});


$.ajax({
  type: "POST",
  url: '/3d',
  success: function(res) {
    let title = res["imgs"]["iacStudy"].map(function(item) {
      return "<div class='image-item'><img src=" + item["image"] + "><div class='title'>" + item["title"] +"</div></></div>";
    });
    
    let categories = res["sideBar"].map(function(cat) {
      return "<li>" + cat + "</li>";
    });
    
    $(".image-container").html(title);
    $(".side-bar").html(categories);
  }
});








