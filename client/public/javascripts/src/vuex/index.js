$(document).ready(function () {
    // Vue.config.debug = false;
    $.getJSON('/lawers', function (data) {
        var lawerContainer = new Vue({
            el: '#lawerContainer',
            data: {
                lawers: data.data
            }
        });
    });

    $.getJSON('/legalType', function (data) {
        var legalType = new Vue({
            el: '#legalType',
            data: {
                legalType: data.data
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


