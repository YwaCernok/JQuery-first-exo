/* Au clic sur un bouton de couleur, modifier la couleur du texte.
*/
$ (function (){
    $('#btn1').css('background-color','blue');
    $('#btn2').css('background-color','green');


    $('#btn1').click (function(){
    $('#text').css('color','blue');
    }); 
    $('#btn2').click (function(){
    $('#text').css('color', 'green');
    }); 
    
    });