$ (function (){
    $('#btn1').css('background-color','blue');
    $('#btn2').css('background-color','black');


    $('#btn1').mouseenter(function(){
    $('#text').css('color','blue');
    }); 
    $('#btn1').mouseleave (function(){
    $('#text').css('color', 'black');
    }); 
    
    });