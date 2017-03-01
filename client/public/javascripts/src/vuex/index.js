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

    $.getJSON('/business', function (data) {
        var business = new Vue({
            el: '#business',
            data: {
                business: data.data
            }
        });
    });


    //
 var test =new vue({

     el:'#test',
   data:{

         message:'我是测试数据'
   }
 });

});


