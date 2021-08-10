const Store = require("../models/store");

const registerStore = async (req, res) => {
  if (!req.body.name || !req.body.direction || !req.body.city)
    return res.status(401).send("Incomplete data, transaction rejected");

  const existingStore = await Store.findOne({ name: req.body.name });
  if (existingStore)
    return res.status(401).send("Store already exist, transaction rejected");

  const store = new Store({
    name: req.body.name,
    direction: req.body.direction,
    city: req.body.city,
  });

  const result = await store.save();
  if (!result)
    return res.status(401).send("Failed to register, transaction rejected");
  return res.status(200).send({ store });
};

const listStore = async (req, res) => {
  const store = await Store.find();
  if (!store) return res.status(401).send("No Store");
  return res.status(200).send({ store });
};

module.exports = { registerStore, listStore };
