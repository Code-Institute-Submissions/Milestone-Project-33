
$(window).on('scroll', function(){
        if ($(window).scrollTop()){
            $('nav').addClass('white-bg-nav');
        }
        else 
        {
            $('nav').removeClass('white-bg-nav');
        }
      });

$(window).on('scroll', function(){
        if ($(window).scrollTop()){
            $('nav div ul li a').addClass('text-black-nav');
        }
        else 
        {
            $('nav div ul li a').removeClass('text-black-nav');
        }
      });

$(window).on('scroll', function(){
        if ($(window).scrollTop()){
            $('.w-one').addClass('d-none');
        }
        else 
        {
            $('.w-one').removeClass('d-none');
        }
      });

$(window).on('scroll', function(){
        if ($(window).scrollTop()){
             $(".b-one").removeClass('d-none');
        }
        else 
        {
            $('.b-one').addClass('d-none');
        }
      });

$(document).ready(function (){

  $('.navbar-toggler').on('click', function () {
      $('.mobile-menu').toggleClass('open');
  }
);
});

$(document).ready(function (){

  $('.navbar-toggler').on('click', function () {
      $('.nav-link').toggleClass('text-black-mobile');
  }
);
});

let v1 = false;

$(document).ready(function (){

  $('.navbar-toggler').on('click', function () {
      if (!v1)
        $('.navbar-toggler-icon').toggleClass('navbar-toggler-icon2');
  }
);
});

$(window).on('scroll', function(){
        if ($(window).scrollTop()){
            v1 = true;
            $('.navbar-toggler-icon').addClass('navbar-toggler-icon2');
        }
        else 
        {
            v1 = false;
            $('.navbar-toggler-icon').removeClass('navbar-toggler-icon2');
        }
      });

$(document).ready(function (){

  $('.navbar-toggler').on('click', function () {
      $('body').toggleClass('overflow-toggler');
  }
);
});