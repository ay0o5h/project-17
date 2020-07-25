$(document).ready(function(){
    // start form 
    $(' #inputEmail3').blur(function(){
        if($(' #inputEmail3').val() == '' ){
            $(this).prev('span').fadeIn();
            $(this).addClass('err');
          }
    })
    $(' #inputEmail4').blur(function(){
        if($(' #inputEmail4').val() == '' ){
            $(this).prev('span').fadeIn();
            $(this).addClass('err');
          }
    })
    $(' #inputEmail5').blur(function(){
        if($(' #inputEmail5').val() == '' ){
            $(this).prev('span').fadeIn();
            $(this).addClass('err');
          }
    })
    $(' #inputEmail3').keydown(function(){
        $(this).prev('span').fadeOut();
        $(this).removeClass('err');
    })   
    $(' #inputEmail4').keydown(function(){      
        $(this).prev('span').fadeOut();
        $(this).removeClass('err');
    })
    $(' #inputEmail5').keydown(function(){
            $(this).prev('span').fadeOut();
            $(this).removeClass('err'); 
    })
    //end form
    // start toggle
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
      });
      $(".sidebar a").on('click' , function(){
        $(this).addClass("active").siblings().removeClass("active")
    })
    // end toggle
    // start up bottom
    $(window).scroll(function(){
        if($(this).scrollTop() >= 1778) {
            $(".fa-arrow-up").show()
        }
        else {
            $(".fa-arrow-up").hide()
        }
    })
    // end up bottom
    // start toggle button
   $(window).resize(function(){
        if($(this).innerWidth() < 768) {
          $(".fa-sliders").show();
      }else {
        $(".fa-sliders").hide();
      }
   })
   if($(this).innerWidth() < 768) {
    $(".fa-sliders").show();
}else {
  $(".fa-sliders").hide();
}
    //  end toggle button
    // start switch class sidebar
    $(window).scroll(function(){
        $(".b").each(function(){
           if($(window).scrollTop() > $(this).offset().top) {
               var idb=$(this).attr('id');
               $('.list-group li  a').removeClass("active");
               $('.list-group li  a[data-scroll="'+ idb +'"]').addClass("active");
           }
        })
    })
    // end switch class sidebar
})
// up utton
function up(){
    window.scrollTo(0,0);

}
// start form placeholder
var fname=document.getElementById('inputEmail3'),
    phone=document.getElementById('inputEmail4'),
    email=document.getElementById('inputEmail5');
    fname.onfocus=function(){
        fname.placeholder=''
    }
    fname.onblur=function(){
        fname.placeholder='Name:'
    }
    phone.onfocus=function(){
        phone.placeholder=''
    }
    phone.onblur=function(){
        phone.placeholder='Phone:'
    }
    email.onfocus=function(){
        email.placeholder=''
    }
    email.onblur=function(){
        email.placeholder='Email:';
    }
    // end form placeholder
    // start subscribe
    var sub=document.getElementById('subscribe');
    sub.onfocus=function(){
        sub.placeholder=''
    }
    sub.onblur=function(){
        sub.placeholder='email'
    }
    // end subscribe
    // start contact
    var cname=document.getElementById('inputEmail6'),
    cemail=document.getElementById('inputEmail7'),
    cmsg=document.getElementById('inputEmail8');
    cname.onfocus=function(){
        cname.placeholder=''
    }
    cname.onblur=function(){
       cname.placeholder='Name'
    }
    cmsg.onfocus=function(){
        cmsg.placeholder=''
    }
    cmsg.onblur=function(){
        cmsg.placeholder='Message'
    }
    cemail.onfocus=function(){
        cemail.placeholder=''
    }
    cemail.onblur=function(){
        cemail.placeholder='Email';
    }
    // end contact
    //   start faqs
      var app2=new Vue({
        el: ".app2",
        data: {
            show1 :false ,
            show2 :false ,
            show3 :false ,
            show4 :false ,   
        }
      })
    //   end faqs