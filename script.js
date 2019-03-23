$( document ).ready(function() {
    home();

    $("#home").click(function(){
      $("#main").fadeIn(1500);
      document.getElementById("main").innerHTML = document.getElementById("home_page").innerHTML;
    });

    $("#about_me").click(function(){
      $("#main").fadeIn(1500);
      document.getElementById("main").innerHTML = document.getElementById("about_me_page").innerHTML;
    });

    $("#skills").click(function(){
      $("#main").fadeIn(1500);
      document.getElementById("main").innerHTML = document.getElementById("project_page").innerHTML;
    });

    $("#contact").click(function(){
      $("#main").fadeIn(1500);
      document.getElementById("main").innerHTML = document.getElementById("contact_page").innerHTML;
    });
});

const home = () => {
  document.getElementById("main").innerHTML = document.getElementById("home_page").innerHTML;
}


