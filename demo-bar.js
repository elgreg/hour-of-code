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
    } else {
      console.log(els);
      els[thingId].forEach(function(comment){
        $(comment).replaceWith(comment.nodeValue);
      });
    }
  });
});
