$( document ).ready(function() {
    home();

    $("#home").click(function(){
      fade("home_page");
    });

    $("#about_me").click(function(){
      fade("about_me_page");
    });

    $("#skills").click(function(){
      fade("project_page");
    });

    $(".contact").click(function(){
      fade("contact_page");
    });

    const fade = (elementId) => {
      $("#main").fadeOut("fast", function() {
        $("#main").html($("#"+elementId).html());
        $("#main").fadeIn("slow");
      });
    }


    $('#sidebar').bind('mouseover', function() {
      $('div.icon_text').fadeIn();
    });

    $('#sidebar').bind('mouseleave', function() {
      $('div.icon_text').fadeOut("slow");
    });


});

const home = () => {
  document.getElementById("main").innerHTML = document.getElementById("home_page").innerHTML;
}


// $('div.animalcontent').hide();
// $('div').hide();
// $('p.animal').bind('mouseover', function() {
//     $('div.animalcontent').fadeOut();
//     $('#'+$(this).attr('id')+'content').fadeIn();
// });
