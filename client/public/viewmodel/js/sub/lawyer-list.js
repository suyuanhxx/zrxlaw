/**
 * Created by yichenw7 on 2017/3/2.
 */
$(function () {
    //
    // lawyerlist-waterfall
    //


    lawyerlist.waterfallset();

});
var lawyerlist = {
    waterfallset: function () {


        $('#container-wrapper').waterfall({
            itemCls: 'item',
            colWidth: 222,
            gutterWidth: 15,
            gutterHeight: 15,
            checkImagesLoaded: false,
            path: function (page) {
                return '/lawyers/' + page + '/10';
            },
            callbacks: {
                /*
                 * 处理ajax返回数方法
                 * @param {String} data
                 */
                renderData: function (data) {
                    var template = $('#waterfall-tpl').html();

                    return Mustache.to_html(template, data).replace(/^\s*/mg, '')
                }
            }
        });

    }


};