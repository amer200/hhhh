const Google = require("../models/google");

exports.editTag = async(req, res) => {
    try {
        const google = await Google.findOne();
        const tag = req.body.tag;
        google.tag = tag;
        await google.save();
        res.redirect("/admin/google");
    } catch (error) {
        console.log(error.message);
    }
}
exports.addNewAdd = async(req, res) => {
    try {
        const code = req.body.add;
        const google = await Google.findOne();
        let add = { code: code };
        google.adds.push(add);
        await google.save();
        res.redirect("/admin/google");
    } catch (error) {
        console.log(error.message);
    }
}