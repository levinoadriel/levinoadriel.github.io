$(function () {

  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: false
    },
    // zoom: {
    //   enabled: true,
    //   duration: 300 // don't foget to change the duration also in CSS
    // }
  });

  $('.img').hover(function () {
    $(this).find('.overlay').fadeIn('fast');
    $(this).find('.image-popup').fadeIn('fast');
  }, function () {
    $(this).find('.overlay').fadeOut('fast');
    $(this).find('.image-popup').fadeOut('fast');
  });

});