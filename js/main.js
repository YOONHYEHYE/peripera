$(function(){
    
//-----------------------------------------------------
//헤더 ---------------------------------------------
$('.bars').on('click', function(){
    $('nav').toggleClass('on');
    $(this).toggleClass('on');
});     
//풀페이지 ---------------------------------------------
$('#main').fullpage({
    anchors:['c01', 'c02', 'c03', 'c04', 'c05', 'footer'],
    //navigation: true,
    afterLoad: function(origin, destination, direction){
        let txt = $('.navbar>li').eq(destination.index).find('a').text();
        $('.section').eq(destination.index).addClass("on").siblings().removeClass('on');
        $('.navbar>li').eq(destination.index).addClass("on").siblings().removeClass('on');
        console.log(txt);
    },
});

//헤더 반응형 메뉴 ---------------------------------------

$('nav>ul>li:nth-child(2)>a').on('click', function(){
    if($(window).width() < 769) {
        $(this).next().slideToggle();
    }
});
$('nav>ul>li:nth-child(3)>a').on('click', function(){
    if($(window).width() < 769) {
        $(this).next().slideToggle();
    }
});



//메인비주얼---------------------------------------------
$('.img_slider').slick({
    arrows:true,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:false,
    pauseOnFocus:false,
    fade:true,
    nextArrow:'<div class="next"><i class="bi bi-arrow-right"></i></div>',
    prevArrow:'<div class="prev"><i class="bi bi-arrow-left"></i></div>',  
});

$('.img_slider').on('init reInit afterChange', function(e,s,c){
    console.log(c,s.c);
    var i= (c?c:0);
    $('.snum').text(i+1 + "/" + s.slideCount)
});

//뉴아이템/팝업-----------------------------------------------

//eye
$('.newtem .right_img .ich01').on('click', function(){
    $('.itm_pop01').show();
    $('.itm_pop01').addClass('on');
    if($('.newtem .right_img .ich01').hasClass('on')) {
        $.fn.fullpage.setAllowScrolling(false);
    }else{
        $.fn.fullpage.setAllowScrolling(true);
    }   
});

$('.itm_pop01 .pop i').on('click', function(){
    $('.itm_pop01').hide();
    $.fn.fullpage.setAllowScrolling(true);
    $('.newtem .right_img .ich01').removeClass('on');
});

//Lip
$('.newtem .right_img .ich02').on('click', function(){
    $('.itm_pop02').show();
    $('.itm_pop02').addClass('on');
    if($('.newtem .right_img .ich02').hasClass('on')) {
        $.fn.fullpage.setAllowScrolling(false);
    }else{
        $.fn.fullpage.setAllowScrolling(true);
    }   
});

$('.itm_pop02 .pop i').on('click', function(){
    $('.itm_pop02').hide();
    $.fn.fullpage.setAllowScrolling(true);
    $('.newtem .right_img .ich02').removeClass('on');
});

//face
$('.newtem .right_img .ich03').on('click', function(){
    $('.itm_pop03').show();
    $('.itm_pop03').addClass('on');
    if($('.newtem .right_img .ich03').hasClass('on')) {
        $.fn.fullpage.setAllowScrolling(false);
    }else{
        $.fn.fullpage.setAllowScrolling(true);
    }   
});

$('.itm_pop03 .pop i').on('click', function(){
    $('.itm_pop03').hide();
    $.fn.fullpage.setAllowScrolling(true);
    $('.newtem .right_img .ich03').removeClass('on');
});


//무드컬렉션/이중 슬라이드---------------------------------------------
var mS=$('.con_slide').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:4000,
    pauseOnHover:false,
    pauseOnFocus:false,
});

$('.con_slide figure').eq(0).addClass('animation_active');
$('.con03 .sbar').addClass('animation_active');
mS.on('beforeChange', function(e,s,c,n){
    $('.con03 .sbar').removeClass('animation_active');
});


mS.on('afterChange', function(e,s,c){
    $('.con_slide figure').eq(c).addClass('animation_active')
    .siblings().removeClass('animation_active');
    $('.con03 .sbar').addClass('animation_active');
});

$('.btn .xi-backward').on('click', function(){
    $('.con_slide').slick('slickPrev');
    $('.val_slider').slick('slickPrev');
});

$('.btn .xi-forward').on('click', function(){
    $('.con_slide').slick('slickNext');
    $('.val_slider').slick('slickNext');
});

$('.btn .xi-pause-circle-o').on('click', function(){
    $('.con_slide').slick('slickPause');
    $('.val_slider').slick('slickPause');
});

$('.val_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:4000,
    pauseOnHover:false,
    pauseOnFocus:false,
    vertical:true,
});

//브랜드스토리 /동영상--------------------------------------------

$(".v_02").YTPlayer({
    videoURL:'https://youtu.be/8ofaWQF7hgw',
    containment:'self',
    autoPlay:true,
    showControls:false,
    startAt:0,
    mute:true,
});

$('.txt_left .xi-pause').on('click', function(){
    $('.v_02').YTPPause();
});
$('.txt_left .xi-play').on('click', function(){
    $('.v_02').YTPPlay();
});
$('.txt_left .xi-tv').on('click', function(){
    $('.v_02').YTPFullscreen();
});

AOS.init();
//-----------------------------------------------------
})