$(document).ready(function(){

    $(".tab").click(function(){
        $(".tab").removeClass('active');
        $(this).addClass('active');
    })
    $('#tab1').click(function(){
        $(".tabContent").hide();
        $("#tab1Content").show();
        $(".progressbar").css('width', '25%');
    })
    $('#tab2').click(function(){
        $(".tabContent").hide();
        $("#tab2Content").show();
        $(".progressbar").css('width', '50%');
    })
    $('#tab3').click(function(){
        $(".tabContent").hide();
        $("#tab3Content").show();
        $(".progressbar").css('width', '75%');
    })
    $('#tab4').click(function(){
        $(".tabContent").hide();
        $("#tab4Content").show();
        $(".progressbar").css('width', '110%');
    })


    $(".toggleNav").click(function(){
        $("#hiddenNav").toggleClass("navOpen");
    })

    $(".fa-sun").click(function(){
        $(".viewIcon").toggleClass('hidden');
        $("body").toggleClass("day night");
    });

    $(".fa-moon").click(function(){
        $(".viewIcon").toggleClass('hidden');
        $("body").toggleClass("day night");
    });




});
