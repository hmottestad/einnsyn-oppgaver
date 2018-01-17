window.setTimeout(function(){
    $('.h1').filter('[id]').each(function () {
        $(this).html('<a href="#'+$(this).attr('id')+'">' + $(this).text().replace(" ", "_").replace("ø", "o") + '</a>');
    });

}, 100)

