$( document ).ready(function() {
    const fade = (elementId) => {
      $("#main").fadeOut("fast", function() {
        $("#main").html($("#"+elementId).html());
        $("#main").fadeIn("slow");
      });
    }

    fade("home_page");

    $("#home").click(function(){
      fade("home_page");
    });

    $("#about_me").click(function(){
      fade("about_me_page");
    });

    $("#skills").click(function(){
      fade("project_page");
    });

    $("#contact").click(function(){
      fade("contact_page");
    });

    $('#sidebar').bind('mouseover', function() {
      $('div.icon_text').fadeIn();
    });

    $('#sidebar').bind('mouseleave', function() {
      $('div.icon_text').fadeOut("slow");
    });

    // needed for dynamically created tags
    $(document).on('click', '#contact_btn', function () {
      fade("contact_page");
    });
});


