(function(){
    $('.boom').hide();
    if((!localStorage['firstQuestion'])&&(!localStorage['firstQuestion'])&&(!localStorage['firstQuestion'])){
        $('#timer').pietimer({
                seconds: 200,
                color: 'rgba(0, 0, 0, 0.8)',
                height: 100,
                width: 100
            },
            function(){
                $('.boom').show('slow');
                $('#first-btn').hide('slow');
                $('#second-btn').hide('slow');
                $('#third-btn').hide('slow');

            });

        $('#timer').pietimer('start');
    }
    else{
        $('#time').hide();
        $('<div>').text('Ти си решил теста!').appendTo(document.body);
    }


    localStorage.setItem('firstAnswer','1886');
    localStorage.setItem('secondAnswer','13');
    localStorage.setItem('thirdAnswer','11');

    var firstBtn=$('#first-btn');
    var secondBtn=$('#second-btn');
    var thirdBtn=$('#third-btn');

    firstBtn.click(function(){
        var value = $("input:radio[name=arsenal]:checked").val();
        if(value){
            localStorage.setItem('firstQuestion',value)
        }
    })

    secondBtn.click(function(){
        var value = $("input:radio[name=champion]:checked").val();
        if(value){
            localStorage.setItem('secondQuestion',value)
        }
    })

    thirdBtn.click(function(){
        var value = $("input:radio[name=cup]:checked").val();
        if(value){
            localStorage.setItem('thirdQuestion',value)
        }
    })

    if(localStorage['firstQuestion']){
        $('#first-container').hide();
        if(localStorage['firstQuestion']===localStorage['firstAnswer']){
            $('<div>').text('Браво. Вашия отговор е верен: '+localStorage.getItem('firstQuestion')).appendTo($('#first-question'))
        }
        else{
            $('<div>').text('Вашия отговор е грешен: '+localStorage.getItem('firstQuestion')+' Верния отговор е: '+localStorage.getItem('firstAnswer'))
                .appendTo($('#first-question'))
        }
    }

    if(localStorage['secondQuestion']){
        $('#second-container').hide();
        if(localStorage['secondQuestion']===localStorage['secondAnswer']){
            $('<div>').text('Браво. Вашия отговор е верен: '+localStorage.getItem('secondQuestion')).appendTo($('#second-question'))
        }
        else{
            $('<div>').text('Вашия отговор е грешен: '+localStorage.getItem('secondQuestion')+' Верния отговор е: '+localStorage.getItem('secondAnswer'))
                .appendTo($('#second-question'))
        }
    }

    if(localStorage['thirdQuestion']){
        $('#third-container').hide();
        if(localStorage['thirdQuestion']===localStorage['thirdAnswer']){
            $('<div>').text('Браво. Вашия отговор е верен: '+localStorage.getItem('thirdQuestion')).appendTo($('#third-question'))
        }
        else{
            $('<div>').text('Вашия отговор е грешен: '+localStorage.getItem('thirdQuestion')+' Верния отговор е: '+localStorage.getItem('thirdAnswer'))
                .appendTo($('#third-question'))
        }
    }
//    localStorage.removeItem('firstQuestion')
//    localStorage.removeItem('secondQuestion')
//    localStorage.removeItem('thirdQuestion')
}())

