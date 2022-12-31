var { Router } = require("express");
const { readdirSync } = require("fs");
var router = Router();

const groceryList = [
  {
    item: "Pizza",
    quantity: 5,
  },
  {
    item: "Burger",
    quantity: 5,
  },
  {
    item: "Garlic Bread",
    quantity: 10,
  },
  {
    item: "Dounut",
    quantity: 2,
  },
  {
    item: "Cold Drink",
    quantity: 5,
  },
];

router.get("/list", (req, res) => {
  res.send(groceryList);
});

router.post("/item", (req, res) => {
  groceryList.push(req.body);
  res.send(201);
});

module.exports = router;
