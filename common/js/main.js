$(document).ready(function () {
 var str, ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0){
        $('.phone').each(function () {
          str = $(this).text();
          $(this).replaceWith('<p class="phone"><img src="common/img/icon_phone.png" height="14" width="20" alt="" class="icon"><a  href="tel:' + str.replace(/-/g, '') + '">' + str + '</a></p>');
      });       
   }


  });
