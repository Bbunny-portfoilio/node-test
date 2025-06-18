
$(document).ready(function () {
    $("header").load("../assets/_include/header.html");  //헤더 인클루드
    $("footer").load("../assets/_include/footer.html");  //푸터부분 인클루드

    var popUp = $('.pop-box');
    var popWrap = $('.pop-wrap');

    const urlParams = new URL(location.href).searchParams;
    const pageId = urlParams.get('pageId');
    const dirId = urlParams.get('dirId');
    const titData = urlParams.get('titData');
    const subData = urlParams.get('subData');

    if(titData == null){$('html > head > title').text('타이틀');}
    else{$('html > head > title').text(titData);}

    if(dirId == null){
        if(subData == null){
        $('.main-box').load('/project/admin/user/'+pageId+'.html');}
        else{$('.main-box').load('/project/admin/user/'+pageId+subData+'.html');}
    }else {
        if(subData == null){
            $('.main-box').load('/project/admin/user/'+dirId+'/'+pageId+'.html');
        }else{$('.main-box').load('/project/admin/user/'+dirId+'/'+pageId+subData+'.html')}
    }

        $(document).mouseup(function (e) {
        if ($('.pop-box').has(e.target).length === 0) {
            $('.pop-wrap').stop().fadeOut(300);
        }
        $('.pop-wrap .close-btn').click(function(){
            $('.pop-wrap').stop().fadeOut(300);
        });
    });

}
);

function callPopExampleFULL() {
    $('.pop-area').load("/project/admin/user/popup/examplePop.html", function(){
        $('.pop-wrap').addClass('pop-full');
        $('.pop-wrap').fadeOut(0);
        $('.pop-wrap').stop().fadeIn(300);
    });
}
function callPopExampleXL() {
    $('.pop-area').load("/project/admin/user/popup/examplePop.html", function(){
        $('.pop-wrap').addClass('pop-xl');
        $('.pop-wrap').fadeOut(0);
        $('.pop-wrap').stop().fadeIn(300);
    });
}
function callPopExampleLG() {
    $('.pop-area').load("/project/admin/user/popup/examplePop.html", function(){
        $('.pop-wrap').addClass('pop-lg');
        $('.pop-wrap').fadeOut(0);
        $('.pop-wrap').stop().fadeIn(300);
    });
}
function callPopExampleMD() {
    $('.pop-area').load("/project/admin/user/popup/examplePop.html", function(){
        $('.pop-wrap').addClass('pop-md');
        $('.pop-wrap').fadeOut(0);
        $('.pop-wrap').stop().fadeIn(300);
    });
}
function callPopExampleSM() {
    $('.pop-area').load("/project/admin/user/popup/examplePop.html", function(){
        $('.pop-wrap').addClass('pop-sm');
        $('.pop-wrap').fadeOut(0);
        $('.pop-wrap').stop().fadeIn(300);
    });
}
function callPopExampleXS() {
    $('.pop-area').load("/project/admin/user/popup/examplePop.html", function(){
        $('.pop-wrap').addClass('pop-xs');
        $('.pop-wrap').fadeOut(0);
        $('.pop-wrap').stop().fadeIn(300);
    });
}

function callAlertExample() {
    swal("알림창 샘플입니다.\n알림창 샘플입니다.",
        {
            icon: "success",
            button: "확인",
        });
}
