/* 
Au passage de la souris sur un bouton de couleur, colorer le texte. Le texte doit redevenir noir quand la souris quitte le bouton
*/

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