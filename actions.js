$(function(){

  $('.like').on('click', function(){
    var thisFoto = $(this).parents('article');
    thisFoto.find('.like').toggle();
    if ($(thisFoto).find('.like-red').is(':visible')){
      thisFoto.find('.thisLiker').html($('.username').html() + ', ');
    } else {
      thisFoto.find('.thisLiker').html('');
    }
  });

  $('.commentCreatorInput').on('keyup', function (e) {
    var thisFoto = $(this).parents('article');
    if (e.keyCode == 13) { //enter key pushed, add comment above.
      thisFoto.find('.comments').append(
        '<span class="user">' +
          $('.username').html() +
        '</span> ' +
        $('.commentCreatorInput').val() +
        '<br/>'
      );
      $(this).val('')
    }
  });

  $('video').on('click', function(){
    if(this.paused){
      this.play();
    } else {
      this.pause()
    }
  });

});
