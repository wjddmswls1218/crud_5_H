import Bap from "../models/Bap";

export const homeController = async (req, res) => {
  try {
    const result = await Bap.find({});

    res.resnder("screens/home");
    console.log(result);
  } catch (e) {
    console.log(e);
    res.render("screens/home", { Bap: result });
  }
};

export const createController = (req, res) => {
  res.render("screens/create");
};

export const detailController = (req, res) => {
  res.render("screens/detail");
};
