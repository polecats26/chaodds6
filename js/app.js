$(document).foundation();

$(document).ready( function() {
    
    var eyebrow_notification = $('div.notification');
    if (eyebrow_notification.html() != "") eyebrow_notification.slideDown("medium");
})
