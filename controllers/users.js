/* GET users listing. */
/**
 * var data = {
                title:"title",
                message:"message"
            };
 */
exports.users = function (req, res) {
    var obj = req.body;
    console.log('body: ' + JSON.stringify(req.body));
    res.send(obj.title);
};