$(document).ready(function(){
    $('.location-list > li > a').click(function(event){
        var tabItem = $(this).attr('data-tab');
        var tabItemValue = $(this).text();

        $('.location-list > li > a').removeClass('active');
        $(this).addClass('active');
        $('.sidebar-tab-list > li').removeClass('active');
        $('.sidebar-tab-list > li.'+tabItem).addClass('active');
        $('.select-location-bar').removeClass('opened');
        $('.location-tab-list-box').slideUp(400);
        $('#selected-location').val(tabItemValue);
        event.preventDefault();
    });  

    $('.select-location-bar').click(function(){
        if($(this).hasClass('opened')){
            $(this).removeClass('opened');
            $('.location-tab-list-box').slideUp(400);
        }else{
            $(this).addClass('opened');
            $('.location-tab-list-box').slideDown(400);
        }
    });
});