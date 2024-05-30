$(document).ready(function(){
    /* Show And Hide Scroll Up */
    let header = document.querySelector("nav");

    window.onscroll = function(){
        scrollDown() , removeActive()
    }
    
    function scrollDown(){
        if(document.documentElement.scrollTop > 500){
            header.style.backgroundColor = "#fff";
            $(".icons-navbar div").css({
                "background-color": "#eee"
            });
            $(".scroll-up").css({
                "display" : "block"
            })
        } else{
            header.style.backgroundColor = "#ffffff28";
            $(".icons-navbar div").css({
                "background-color": "transparent"
            });
            $(".scroll-up").css({
                "display" : "none"
            })
        }
    }

    // Go Up
    $(".scroll-up").click(function(){
        document.documentElement.scrollTop = 0;
    });

    /* Add And Remove Class ACtive */
    let links = document.querySelectorAll(".navbar .navbar-nav li");

    $(links).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(".navbar .navbar-nav li a").removeClass('active');
    });

    // Show And Hide Inputs
    $(".glass-search").on("click", function(){
        $(".search").toggleClass("active-card")
        $(".cards-save").removeClass("active-card")
        $(".login").removeClass("active-card")
    })

    $(".shopping").on("click", function(){
        $(".cards-save").toggleClass("active-card")
        $(".search").removeClass("active-card")
        $(".login").removeClass("active-card")
    })

    $(".userLogin").on("click", function(){
        $(".login").toggleClass("active-card")
        $(".cards-save").removeClass("active-card")
        $(".search").removeClass("active-card")
    })

    function removeActive(){
        $(".login").removeClass("active-card")
        $(".cards-save").removeClass("active-card")
        $(".search").removeClass("active-card")
    }

    $("#owl-demo").owlCarousel({
        autoPlay:true,
        goToFirst : true,
        goToFirstSpeed : 500,
        items : 3, //10 items above 1000px browser width
        itemsDesktop : [1000,3], //5 items between 1000px and 901px
        itemsTablet: [768,2], //2 items between 600 and 0;
        itemsMobile : [575,1], // itemsMobile disabled - inherit from itemsTablet option
    });
    $("#owl-demo2").owlCarousel({
        autoPlay:true,
        items : 3, //10 items above 1000px browser width
        itemsDesktop : [1000,3], //5 items between 1000px and 901px
        itemsTablet: [768,2], //2 items between 600 and 0;
        itemsMobile : [575,1], // itemsMobile disabled - inherit from itemsTablet option
    });
    $("#owl-demo3").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 3,
        itemsDesktop : [1000,3], //5 items between 1000px and 901px
        itemsTablet: [768,2], //2 items between 600 and 0;
        itemsMobile : [575,1], // itemsMobile disabled - inherit from itemsTablet option
    });
})