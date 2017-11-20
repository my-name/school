$(function(){
    $('.slideTxtBox .hd ul ').on('mouseover',function(){
        $('.slideTxtBox .bd').css('display','block');
    }).on('mouseout',function(){
        $('.slideTxtBox .bd').css('display','none');
    })
})