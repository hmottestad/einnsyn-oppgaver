window.setTimeout(function(){
    $('.h1').filter('[id]').each(function () {
        $(this).html('<a href="#'+$(this).attr('id')+'">' + $(this).text() + '</a>');
    });

}, 100)

