function tabToggle() {
    
    $(".login-inactive-tab").unbind("click");
    
    var inactiveTab = $(".login-inactive-tab")
       console.log(inactiveTab.text());
        if(inactiveTab.text() === "Register") {
            $("#register-form").show();
            $("#login-form").hide()
            inactiveTab.removeClass("login-inactive-tab");
            inactiveTab.prev().addClass("login-inactive-tab");
        } else {
            $("#login-form").show();
            $("#register-form").hide();
            inactiveTab.removeClass("login-inactive-tab");
            inactiveTab.next().addClass("login-inactive-tab");
        }
    $(".login-inactive-tab").click(tabToggle);
    
}

$(document).ready(function() {
   $(".login-inactive-tab").click(tabToggle);
});