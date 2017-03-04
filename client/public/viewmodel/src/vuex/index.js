$(document).ready(function () {
    // Vue.config.debug = false;
    $.getJSON('/condition/lawyers', function (data) {
        var lawyerContainer = new Vue({
            el: '#lawyerContainer',
            data: {
                lawyers: data.data
            }
        });
    });

    $.getJSON('/business', function (data) {
        var business = new Vue({
            el: '#business',
            data: {
                business: data.data
            }
        });
    });

});


