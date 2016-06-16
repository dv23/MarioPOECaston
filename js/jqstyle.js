/*
@title - JQMARIO
@author - Vincent
@date - 10/06/2016
*/

//variable
//console.log("hello world !");

//function

// body
//$("#contenu").fadeOut("slow").fadeIn(5000);
$(function(){
  jQuery(document).ready(function(){
  console.log("jQuery est prêt !");
});
// function terminer animation
  terminerAnim = function(){
  alert("c'est fini");
    //$('#son')[0].play();
                        };
// function for animation
  moveFunction = function(param1){
    $("#mario").removeClass();
    $("#mario").addClass(param1);
                                 };
// deplacement du fond
     function deplaceFondMarioBros()
    {
          $('.fond').animate({
          left: '-=360'
        },
        1000,
        'linear',
        function(){
          $('.fond').css('top',0);
          deplaceFondMarioBros();
          //$('#son')[0].play();
        });
    };
//deplacement de Mario

$(document).keydown(function(touche){
        // Touche Droite
        if (touche.which == 39)
        {
          //alert ('t d');
          marioX = parseInt($('#mario').css('left'));
          if (marioX < 280){
                            $('#mario').css('left', marioX+30);
                          }
        }
         // Touche Gauche
        if (touche.which == 37)
        {
          marioX = parseInt($('#mario').css('left'));
          if (marioX > 70)
            $('#mario').css('left', marioX-30);
        }
          // Touche Haut, Saute Haut Mario
        if (touche.which == 38)
        { $('#mario').animate({top: '-=100'}, 1500, 'linear', 
          function(){
          // Abscisse sera deplacee en haut;
          var marioY = 100;
          $('#mario').css('top',marioY);
          //marioY = parseInt($('#mario').css('top'));
          //if (marioY > 70)
          //  $('#mario').css('top', marioY+30);
                  })
        }
        // Touche Bas, Saute en bas Mario
        if (touche.which == 40)
        {/*
          marioY = parseInt($('#mario').css('bottom'));
          //déplace linéairement Mario vers le haut de 100 pixels en 2500 millisecondes
            $('#mario').css('bottom', marioY+30);*/
          $('#mario').animate({top: '+=100'}, 2500, 'linear', 
          function(){
          //Abscisse Mario si affichee 1 fois
          var vrMarioX = Math.floor(Math.random()*194)+70;
          var vrMarioY = 400;
          $('#mario').css('top',vrMarioY);
          //alert("mario bas");
          //depalce suite appui touche;
                    })
        }
                                    });
//deplaceSuperMario();
//terminerAnim();
deplaceFondMarioBros();
});