
$(function(){
  $('.like').click(function(){
    $(this).parent().find('.like').toggle();
    if ($(this).parent().find('.like-red').is(':visible')){
      $(this).parent().parent().find('.thisLiker').html($('.username').html() + ', ');
    } else {
      $(this).parent().parent().find('.thisLiker').html('');
    }
  });
});