(function(){
    var value;
    var inputName=$('<input>').attr('type','text').attr('placeholder','Enter name').appendTo($('#enter-name'));
    var btn=$('<button>').text('Submit').appendTo($('#enter-name'));

    btn.on('click',takingUserName);

    function takingUserName(){
        value=inputName.val();
        localStorage.setItem('userName',value);
    }
    if(!localStorage['localStorage']){
        localStorage.setItem('localStorage',0);
    }
    if(!sessionStorage['visits']){
        sessionStorage.setItem('visits', 0);
    }

    localStorage['localStorage']++;
    sessionStorage['visits']++;

    if(!localStorage.getItem('userName')){
        $('#enter-name').show();
    }
    else{
        $('#enter-name').hide();
        $('#user').text('Hi '+localStorage.getItem('userName')+' localStorage: '+localStorage.getItem('localStorage')+' sessionStorage: '+sessionStorage.getItem('visits'))

    }


//    localStorage.removeItem('userName')

}())





