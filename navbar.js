$(window).scroll(function(){
    if ($(window).scrollTop() > 30) {
      $(".top-nav").css("opacity", "0.8")
    }else{
      $(".top-nav").css("opacity", "1")
    };
  });
