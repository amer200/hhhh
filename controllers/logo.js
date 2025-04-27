const Logo = require("../models/logo");


exports.add = async(req, res) => {
    try {
        const img = req.file;
        const logo = await Logo.findOne();
        if (!logo) {
            const newLogo = new Logo({
                img: img.path
            })
            await newLogo.save()
        } else {
            logo.img = img.path
            await logo.save();
        }
        res.redirect("/admin/logo")
    } catch (error) {
        console.log(error.message);
    }
}
exports.getLogo = async(req, res) => {
    try {
        const logo = await Logo.findOne();
        res.render("main/test", {
            logo: logo
        })
    } catch (error) {
        console.log(error.message);
    }
}