const Prod = require("../models/product");
const Serv = require("../models/service");
const Offer = require("../models/offer");

exports.getIndex = async (req, res) => {
    try {
        const prods = await Prod.find();
        const servs = await Serv.find();
        const offers = await Offer.find();
        let products = chunkArray(prods, 4)
        res.render("main/test", {
            offers: offers,
            prods: products,
            servs: servs
        })
    } catch (error) {
        console.log(error.message);
    }
}
function chunkArray(array, chunkSize) {
    let result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}