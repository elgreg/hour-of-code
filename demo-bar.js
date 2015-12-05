$(function(){
  var els = {};
  $("#demo-bar li").click(function(){
    var thingId = this.id;
    $(this).toggleClass('deactivate');
    if(typeof els[thingId] === 'undefined'){
      els[thingId] = [];
    }
    if($(this).hasClass('deactivate')){
      // Loop over things with this id and add them to an array
      // in els[thingId]
      $('.' + thingId).each(function(){
        comment = document.createComment(this.outerHTML);
        els[thingId].push(comment);
        $(this).replaceWith(comment);
      });
      if(thingId === 'rmJs'){
        // hack-ish - have to turn off events for commented out actions.js
        var actionEventNodes = ['.like', '.commentCreatorInput', 'video'];
        actionEventNodes.forEach(function(selector){
          $(selector).off();
        });
      }
    } else {
      els[thingId].forEach(function(comment){
        $(comment).replaceWith(comment.nodeValue);
      });
    }
  });
});
