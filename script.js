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
});

const home = () => {
  document.getElementById("main").innerHTML = document.getElementById("home_page").innerHTML;
}


