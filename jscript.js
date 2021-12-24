$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".menu").css("background" , "rgb(39, 34, 33)");
        }
  
        else{
            $(".menu").css("background" , "transparent");  	
        }
    })
  })
  
  var lastScrollTop = 0;
  
  window.addEventListener("scroll", function(){ 
     var st = window.pageYOffset || document.documentElement.scrollTop; 
     if (st > lastScrollTop){
        $(".menu").css("top" , "-100px");
     } else {
        $(".menu").css("top" , "0px"); 
     }
     lastScrollTop = st <= 0 ? 0 : st; 
  }, false);
  

  let po = document.getElementById('ph1');
    window.addEventListener('scroll', function(){
    let value = window.scrollY;
    po.style.marginTop = value * -0.18 + 'px';
    
    })    