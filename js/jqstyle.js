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
// deplacement
 	var ok = 1;
    function deplace()
    {
        $('#mario').animate({top: '-=600'}, 2500, 'linear', function(){
          var mario2X = Math.floor(Math.random()*194)+70;
          var mario2Y = 400;
          $('#mario').css('top',mario2Y);
          $('#mario').css('left',mario2X);
          ok = 1;
                                                                    });
    };
    //var keys = {};
$(document).keydown(function(touche){
        var appui = touche.which || touche.keyCode;
        if (appui == 39 && appui == 38) {
        /*  keys[e.which] = true;
          up='38' in keys;
          up='39' in keys;
          if (up && right){*/
           alert("touches haut et droite enfoncees");
                       /*   $(document).keyup(function (e) {
        delete keys[e.which];*/
                                         };
        // Touche Droite
        if (touche.which == 39)
        {
          //alert ('t d');
          marioX = parseInt($('#mario').css('left'));
          if (marioX < 280){
                            $('#mario').css('left', marioX+30);
                          }
        }
        if (touche.which == 37)
        {
          marioX = parseInt($('#mario').css('left'));
          if (marioX > 70)
            $('#mario').css('left', marioX-30);
        }
                                    });
//deplace();
//terminerAnim();
});