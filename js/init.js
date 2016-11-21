$(document).ready(function($){
  if($('.product_preview_left .previews').length > 0) {
    $('.product_preview_left .previews a').hover(function(){
      var largeImage = $(this).attr('href');
      $('.selected').removeClass();
      $(this).addClass('selected');
      $('.full img').attr('src', largeImage);
      $('.full a').attr('href', largeImage);
      if($('.cloud-zoom').length > 0) {
        $('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
      }
    }); 

    $('.product_preview_left .previews').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
        enabled: true
      }
      // other options
    });

    $('.product_preview_left .full').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
        enabled: true
      },
      // other options
    });
  }
}); //closing our doc ready

//jquery raty
//http://wbotelhos.com/raty
$(document).ready(function($) {
  if($('.raty').length > 0) {
    $('.raty').each(function() {
      $(this).raty({
        starOff : 'images/icons/rating/icon_09.png',
        starHalf: 'images/icons/rating/icon_08.png',
        starOn  : 'images/icons/rating/icon_07.png',
        hints   : ['bad', 'poor', 'regular', 'good', 'gorgeous'],
        half    : true,
        halfShow: true,
        score   : parseFloat($(this).attr('score'))  
      });
    });
  }
  if($('.raty-blue').length > 0) {
    $('.raty-blue').each(function() {
      $(this).raty({
        starOff : 'images/icons/rating/icon_03.png',
        starHalf: 'images/icons/rating/icon_02.png',
        starOn  : 'images/icons/rating/icon_01.png',
        hints   : ['bad', 'poor', 'regular', 'good', 'gorgeous'],
        half    : true,
        halfShow: true,
        score   : parseFloat($(this).attr('score')) 
      });
    });
  }
  if($('.raty-red').length > 0) {
    $('.raty-red').each(function() {
      $(this).raty({
        starOff : 'images/icons/rating/icon_06.png',
        starHalf: 'images/icons/rating/icon_05.png',
        starOn  : 'images/icons/rating/icon_04.png',
        hints   : ['bad', 'poor', 'regular', 'good', 'gorgeous'],
        half    : true,
        halfShow: true,
        score   : parseFloat($(this).attr('score')) 
      });
    });
  }
  if($('.raty-readOnly').length > 0) {
    $('.raty-readOnly').each(function() {
      $(this).raty({
        starOff : 'images/icons/rating/icon_03.png',
        starHalf: 'images/icons/rating/icon_02.png',
        starOn  : 'images/icons/rating/icon_01.png',
        hints   : ['bad', 'poor', 'regular', 'good', 'gorgeous'],
        half    : true,
        halfShow: true,
        readOnly: true,
        score   : parseFloat($(this).attr('score')) 
      });
    });
  }
});

// Preview img before upload
$(document).ready(function() {  
  function readURL(input, selector) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $(selector).attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  if($('.input-suggest').length > 0) {
    $(".input-suggest").change(function(){
        readURL(this, '.img-suggest');
    });
  }
});

// Jquery bootstrap chosen
// https://github.com/alxlit/bootstrap-chosen
$(function() {
  if($('.chosen-select').length > 0) {
    $('.chosen-select').chosen();
  }
  if($('.chosen-select-deselect').length > 0) {
    $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
  }
});

// Jquery Keep The Footer At Bottom Page
$(function() {
  if($('footer.footer').length > 0) {
    if ($(document).height() > $("footer.footer").offset().top+47) {
      $("footer.footer").addClass('fixbottom');
    }

    $(window).resize(function() {
        if ($(document).height() > $("footer.footer").offset().top+47) {
            $("footer.footer").addClass('fixbottom');
        }
    });
  }
});

// counter length of element(textarea)
$(document).ready(function() {
  if($('.input-counter').length > 0) {
    $(".input-counter").on('keyup', function(event) {
      var maxlength = parseInt($(this).attr('data-limit'));
      var currentString = $(this).val();
      $selector = $(this).attr('data-counter');
      $($selector).html(maxlength - currentString.length);
    });
  }
});

// Action Follow CallBack By Ajax
$(document).ready(function(){
  if($('[action="follow"]').length > 0) {
    $('[action="follow"]').on('click', function (e){
      var $btn = $(this).button('loading');
      var status = $(this).attr('follow');
      if(status == "0") {
        var json = $(this).attr('object');
        json = JSON.parse(json);
        $(this).attr('follow', 1);
        $(this).addClass('followed');
        // if(typeof json === 'object') {
        //   var request = $.ajax({
        //     url: "", //Url
        //     method: "POST",
        //     data: {JSON.stringify(json)},
        //     dataType: "json"
        //   });
           
        //   request.done(function( msg ) {
        //     //Action Updated Follow
        //   });
           
        //   request.fail(function( jqXHR, textStatus ) {
        //     alert( "Request failed: " + textStatus );
        //   });
        // }
      }
      $(this).button('complete');
    });
  }
});

//Delete Row In Cart, Save For Later
// Action Follow CallBack By Ajax
$(document).ready(function(){
  if($('[action="delete"]').length > 0) {
    $('[action="delete"]').on('click', function (e){
      var object = $(this).attr('data');
      $(object).fadeIn();
      $(object).remove();
      return false;
    });
  }

  if($('[action="add"]').length > 0) {
    $('[action="add"]').on('click', function (e){
      var object = $(this).attr('data');
      var append = $(this).attr('data-append');
      $(object).fadeIn();
      $(object).appendTo(append);
      $(this).html('<i class="fa fa-arrow-circle-o-down"></i>');
      $(this).attr('action', 'save');
      return false;
    });
  }
});

// Action Follow CallBack By Ajax
$(document).ready(function(){
  if($('[action="show"]').length > 0) {
    $('[action="show"]').on('change', function (e){
      var val = $(this).val();  
      var object = $(this).attr('data');  
      $(object).hide();   
      if($('#' + val).length > 0){
        $('#' + val).show();
      }
      else {
        $('#' + val).hide();
      }
      console.log('#' + val);
      return false;
    });
    // $('[action="show"]').on('click', function (e){
    //   var object = $(this).attr('data');  
    //   $(object).show();   
    //   return false;
    // });
  }
});

//jquery niceScroll
//https://github.com/inuyaksa/jquery.nicescroll
$(document).ready(function() {  
  if($('.nicescroll').length > 0) {
    $(".nicescroll").niceScroll({styler:"fb",cursorcolor:"#c1c1c1", cursorwidth: '6', cursorborderradius: '10px', background: '#ffffff', spacebarenabled:false,  cursorborder: '', zindex: '1000'});
  }
});