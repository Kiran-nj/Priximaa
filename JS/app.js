$(document).ready(function(){

    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        navText :['PREV','NEXT'],
        items: 1,
        responsive:{
            0:{
               
            },
            600:{
                
            },
            1000:{
                
            }
        }
    })

});
document.getElementById('changeableNumber').addEventListener('click', function() {
    // Change the content to '4554' after a delay for the transition to take effect
    setTimeout(() => {
      this.textContent = '4554';
    }, 100);
  });

  $(document).ready(function(){

    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        smartSpeed:1000,
        margin:24,
        center:true,
        responsive:{
            0:{
               
            },
            600:{
                
            },
            1140:{
                items:2,
            }
        }
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        items:1,
    })

});

