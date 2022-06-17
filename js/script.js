$(function(){
    // sticky menu start
  $(window).scroll(function () {
    var sticky = $(this).scrollTop()
    //this is for sticky menu
    if (sticky > 50) {
      $(".menu-bar").addClass("sticky-menu")
    } else {
      $(".menu-bar").removeClass("sticky-menu")
    }
  });
  // sticky menu end

  //review slider start
  $('.review-slide-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots:true,
    pauseOnHover:false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  //review slider end


   //back to top button start

  //back to to button animation
  $(window).scroll(function () {
    var sticky = $(this).scrollTop()
    if (sticky > 50) {
      $(".back-to-top").fadeIn(300)
    } else {
      $(".back-to-top").fadeOut(300)
    }
  });
  //back to top button click start
  $(".back-to-top").click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 2000)
  })
  //back to top button  end
})