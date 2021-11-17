/* Afficher ou masquer le paragraphe text au clic des boutons.
*/
$ (function (){

$('#btn1').click (function(){
$('#text').show();
}); 
$('#btn2').click (function(){
$('#text').hide();
}); 

});