
$(function(){
  $('.like').click(function(){
    $(this).parent().find('.like').toggle();
    if ($(this).parent().find('.like-red').is(':visible')){
      $(this).parent().parent().find('.thisLiker').html($('.username').html() + ', ');
    } else {
      $(this).parent().parent().find('.thisLiker').html('');
    }
  });

  $('.commentCreatorInput').keyup(function (e) {
    if (e.keyCode == 13) {
        $(this).parent().parent().parent().find('.comments').append('<span class="user">' + $('.username').html() + '</span> ' + $('.commentCreatorInput').val() + '<br/>');
        $(this).val('')
    }
  });
});