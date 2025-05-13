const SliderImage = require("../models/slide");

exports.add = async(req, res) => {
    try {
        const img = req.file.path;
        const text = req.body.altText;
        const newSlide = new SliderImage({
            imageUrl: img,
            altText: text
        })
        await newSlide.save()
        res.redirect("/admin/slide")
    } catch (error) {
        console.log(error.message);
    }
}
exports.edit = async(req, res) => {
    try {
        const image = await SliderImage.findById(req.params.id);
        image.altText = req.body.altText;
        if (req.file) image.imageUrl = req.file.path;
        await image.save();
        res.redirect("/admin/slide")
    } catch (error) {
        console.log(error.message);
    }
}
exports.remove = async(req, res) => {
    try {
        await SliderImage.findByIdAndDelete(req.params.id);
        res.redirect('/admin/slide');
    } catch (error) {
        console.log(error.message);
    }
}