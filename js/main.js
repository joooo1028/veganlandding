// main.js
$(document).ready(function(){
 // 화면 맨위로 이동
 $("body,html").stop().animate({"scrollTop":0},1500,"swing");

var start = setTimeout(function(){
    $("#content1 > section").addClass("on");
},500);

$(window).scroll(function(){
    var scroll = $(this).scrollTop();//현재 scroll위치값
    var ht = $(window).height();
    //content1
    if(scroll >= 0*ht && scroll < 1*ht ){
        //내용물 움직임 시작
        $("#content1 > section").addClass("on");
    }else{
        //움직임 취소
        $("#content1 > section").removeClass("on");
    }

    //content2
    if(scroll >= 0.5*ht && scroll < 2*ht ){
        //내용물 움직임 시작
        $("#content2 > section").addClass("on");
    }else{
        //움직임 취소
        $("#content2 > section").removeClass("on");
    }

    //content3
    if(scroll >= 1.5*ht && scroll < 3*ht ){
        //내용물 움직임 시작
        $("#content3 > section").addClass("on");
    }else{
        //움직임 취소
        $("#content3 > section").removeClass("on");
    }

    //content4
    if(scroll >= 2.5*ht && scroll < 4*ht ){
        //내용물 움직임 시작
        $("#content4 > section").addClass("on");
    }else{
        //움직임 취소
        $("#content4 > section").removeClass("on");
    }

    //content5
    if(scroll >= 3.5*ht && scroll < 5*ht ){
        //내용물 움직임 시작
        $("#content5 > section").addClass("on");
    }else{
        //움직임 취소
        $("#content5 > section").removeClass("on");
    }

    //content6
    if(scroll >= 4.5*ht && scroll < 6*ht ){
        //내용물 움직임 시작
        $("#content6 > section").addClass("on");
    }else{
        //움직임 취소
        $("#content6 > section").removeClass("on");
    }

    //content7
    if(scroll >= 5.5*ht && scroll < 7*ht ){
        //내용물 움직임 시작
        $("#content7 > section").addClass("on");
    }else{
        //움직임 취소
        $("#content7 > section").removeClass("on");
    }

    //content8
    if(scroll >= 6.5*ht && scroll < 9*ht ){
        //내용물 움직임 시작
        $("#content8 > section").addClass("on");
    }else{
        //움직임 취소
        $("#content8 > section").removeClass("on");
    }
        
    })//scroll

});