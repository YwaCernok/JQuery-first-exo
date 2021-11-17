/* Au passage de la souris, agrandir une image de votre choix.
*/
$ (function (){

    $( '#image' ).hover (function() {
       $ ( '#image' ).height(300);
       $ ( '#image' ).width(200);
    });

});