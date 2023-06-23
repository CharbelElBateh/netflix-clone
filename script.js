$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 100){
            $(".netflix-navbar").css("background", "#0C0C0C")
        }else{
            $(".netflix-navbar").css("background", "transparent")
        }
    });

    $('#openSidebarButton').click(function() {
        $('.sidebar-modal').addClass('open');
        $('.sidebar-overlay').addClass('open');
    });

    $('.sidebar-overlay').click(function() {
        $('.sidebar-modal').removeClass('open');
        $('.sidebar-overlay').removeClass('open');
    });

    $('.sidebar-menu a').click(function() {
        $('.sidebar-menu a').removeClass('active');
        $(this).addClass('active');
    });

    const video = $('#videoPlayer');
    const volumeButton = $('#volumeButton');

    volumeButton.on('click', toggleMute);

    function toggleMute() {
        if (video.prop('muted')) {
        video.prop('muted', false);
        volumeButton.html('<span class="fas fa-volume-up"></span>');
        } else {
        video.prop('muted', true);
        volumeButton.html('<span class="fas fa-volume-mute"></span>');
        }
    }

});