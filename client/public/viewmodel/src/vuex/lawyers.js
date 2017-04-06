/**
 * Created by huangxiaoxu on 19/03/2017.
 */
Vue.config.debug = true;
var index = 1;
var app = new Vue({
    el: '#app',
    components: {
        'waterfall': Waterfall.waterfall,
        'waterfall-slot': Waterfall.waterfallSlot
    },
    data: {
        line: 'h',
        items: getLawyers(1, 10),
        isBusy: false
    },
    methods: {
        addItems: function (index) {
            if (!this.isBusy && this.items.length < 500) {
                this.isBusy = true;
                this.items.push.apply(this.items, getLawyers(index, 10))
            }
        },
        shuffle: function () {
            this.items.sort(function () {
                return Math.random() - 0.5
            })
        },
        reflowed: function () {
            this.isBusy = false
        }
    }
});

// document.body.addEventListener('click', function () {
//     app.shuffle();
//     // app.$refs.waterfall.$emit('reflow') // manually trigger reflow action
// }, false);
//
// window.addEventListener('scroll', function () {
//     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
//     if (scrollTop + window.innerHeight >= document.body.clientHeight) {
//         app.addItems()
//     }
// });

function getLawyers(page, size) {
    var items;
    $.ajax({
        type: 'GET',
        url: '/lawyers/' + page + '/' + size,
        dataType: 'json',
        async: false,
        success: function (data) {
            items = data.data;
        }
    });
    return items;
};

function loadMore() {
    index += 1;
    app.addItems(index);
}


