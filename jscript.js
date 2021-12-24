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
    let ew = document.getElementById('q');
    window.addEventListener('scroll', function(){
    let value = window.scrollY;
    ew.style.marginLeft = value * -0.18 + 'px';
    
    })    
    let qw = document.getElementById('qw');
    window.addEventListener('scroll', function(){
    let value = window.scrollY;
    qw.style.marginRight = value * -0.2 + 'px';
    
    })    
    let ed = document.getElementById('ws');
    window.addEventListener('scroll', function(){
    let value = window.scrollY;
    ed.style.marginLeft = value * -0.18 + 'px';
    
    })    


    document.getElementById("eo").style.opacity = '0';
    $("#eo").animate({opacity:'1'}, 3000);

    document.getElementById("er").style.opacity = '0';
    $("#er").animate({opacity:'1'}, 3000);

    document.getElementById("tr").style.opacity = '0';
    $("#tr").animate({opacity:'1'}, 2000);

    document.getElementById("ue").style.opacity = '0';
    $("#ue").animate({opacity:'1'}, 2000);