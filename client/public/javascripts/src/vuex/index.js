$(document).ready(function () {
    // $.getJSON('/lawers', function (data) {
    //     console.log(data);
    //     $.each(data.data, function (index, value) {
    //         var lawhtml = "<div class='col-md-4'>" +
    //             "<div class='team-box text-center to-animate-2'>" +
    //             "<div class='user'>" +
    //             "<img class='img-reponsive' src='" + value.avatar + "' alt='" + value.lawerName + "'></div>" +
    //             "<h3>" + value.lawerName + "</h3><span class='position'>" + value.position + "</span><p>" + value.description + "</p><ul class='social-media'>" +
    //             "<li><a href='#' class='wechat'><i class='icon-wechat'></i>" + value.wechatId +
    //             "</a></li></ul></div></div>";
    //
    //         // $("#lawerContainer").append(lawhtml);
    //     });
    // });
    // Vue.config.debug = false;
    $.getJSON('/lawers', function (data) {
        var lawerContainer = new Vue({
            el: '#lawerContainer',
            data: {
                lawers: data.data
            }
        });
    });

});


