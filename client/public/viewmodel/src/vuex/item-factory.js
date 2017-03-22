var ItemFactory = (function () {

    var lastIndex = 0

    function generateRandomItems(count) {
        var items = [], i
        for (i = 0; i < count; i++) {
            items[i] = {
                'avatar': 'http://zrxlaw.oss-cn-shanghai.aliyuncs.com/zrxlaw-test/dog.jpg'
            }
        }
        return items
    }

    function getRandomColor() {
        var colors = [
            'rgba(21,174,103,.5)',
            'rgba(245,163,59,.5)',
            'rgba(255,230,135,.5)',
            'rgba(194,217,78,.5)',
            'rgba(195,123,177,.5)',
            'rgba(125,205,244,.5)'
        ]
        return colors[~~(Math.random() * colors.length)]
    }

    return {
        get: generateRandomItems
    }

})()
