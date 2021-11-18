$ (function(){


/*Demander à l'aide d'un formulaire les 5 dernières notes d'un élève. Calculer sa moyenne et déterminer son appréciation.
*/

    $('#btn').click(function(){

        var somme = 
            (
            (parseInt($('#note1').val()) + parseInt($('#note2').val()) + parseInt($('#note3').val()) + parseInt($('#note4').val()) + parseInt($('#note5').val())
            )
            /5);
            //Si la moyenne de l'élève est supérieure ou égale à 0 et inférieure à 10
            if (somme >= 0 && somme < 10){
                alert("En dessous de la moyenne");
            } else if (somme >= 10 && somme < 13){
                alert(somme + "Moyen");
            } else if (somme >= 13 && somme < 16){
                alert(somme + "Bien"); 
            } else if (somme >= 16 && somme < 20){
                alert(somme + "Très bien");     
            } else if (somme = 20){
                alert(somme + "Excellent");   

            }
    });
});

/* Si la moyenne de l'élève est supérieure ou égale à 0 et inférieure à 10, il aura comme appréciation : "En dessous de la moyenne".

function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}

ou

const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;

average([99, 45, 26, 7, 11, 122, 22]);
*/








