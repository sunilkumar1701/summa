    
    $(".step").click( function() {
        $(this).addClass("active").prevAll().addClass("active");
        $(this).nextAll().removeClass("active");
    });
    
    $(".step01").click( function() {
        $("#line-progress").css("width", "1%");
        $(".discovery").addClass("active").siblings().removeClass("active");
    });
    
    $(".step02").click( function() {
        $("#line-progress").css("width", "19%");
        $(".strategy").addClass("active").siblings().removeClass("active");
    });
    
    $(".step03").click( function() {
        $("#line-progress").css("width", "38%");
        $(".creative").addClass("active").siblings().removeClass("active");
    });
    
    $(".step04").click( function() {
        $("#line-progress").css("width", "58%");
        $(".production").addClass("active").siblings().removeClass("active");
    });
    
    $(".step05").click( function() {
        $("#line-progress").css("width", "78%");
        $(".analysis").addClass("active").siblings().removeClass("active");
    });
    $(".step06").click( function() {
        $("#line-progress").css("width", "100%");
        $(".rajesh").addClass("active").siblings().removeClass("active");
    });