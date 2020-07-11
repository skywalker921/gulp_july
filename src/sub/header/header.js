$(document).ready(function(){



    let doneClose = true;


    //skip_navi
    $('#skip_navi a').on('focusin', function(){
        $(this).addClass('on');
    })

    $('#skip_navi a').on('focusout', function(){
        $(this).removeClass('on');
    })




    //header

    $('#sub_header').on('mouseenter', openSub)

    $('#sub_header').on('mouseleave', closeSub)

    
    $('#gnb>li').on('mouseenter', function(){
        $(this).children('a').addClass('on');
    });

    $('#gnb>li').on('mouseleave', function(){
        $(this).children('a').removeClass('on');
    });

    $('#gnb>li>a').on('focusin', function(){
        $('#gnb>li>ul').stop().slideDown();
        $('.bgGnb').stop().slideDown();
    });

    $('#gnb li').last('a').last().on('focusout', function(){
        $('#gnb').find('ul').stop().slideUp();
        $('.bgGnb').stop().slideUp();
    })




    function openSub(){
        $('#gnb').find('ul').stop(true, true).slideDown();
        $('.bgGnb').stop(true, true).slideDown();

        if(doneClose){
            doneClose = false;
            $('#gnb>li>ul').stop(true, true).slideDown();
            $('.bgGnb').stop(true, true).slideDown();
        }
    }

    function closeSub(){
        $('#gnb').find('ul').stop().slideUp();
        $('.bgGnb').stop().slideUp();
    }
});