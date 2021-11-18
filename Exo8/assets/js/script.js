/* Afficher ou masquer le paragraphe text au clic des boutons.
*/
$ (function (){

$('#btn1').click (function(){
$('#text').css('display', 'block');
}); 
$('#btn2').click (function(){
$('#text').css('display', 'none');
}); 

});

/* 
or
.css ('visibility','visible')
visibility hidden
!!! like the the button will not move !!!

or

.show()
.hide

or 

toggle()
*/