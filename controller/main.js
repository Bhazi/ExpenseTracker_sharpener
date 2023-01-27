const Expense = require("../models/expenseTracker");
const path = require("path");

exports.getForm = (req, res) => {
  Expense.findAll()
    .then((data) => {
      res.render("mainPage", {
        values: data,
        pageTitle: "Expense Tracker",
        editing: false,
        path: "/",
      });
    })
    .catch((err) => console.log(err));
};

exports.postForm = (req, res, next) => {
  const amount = req.body.amount;
  const description = req.body.desc;
  const category = req.body.category;
  console.log(req.body);
  Expense.create({
    expense: amount,
    description: description,
    category: category,
  })
    .then((data) => console.log())
    .catch((err) => console.log(err));
  res.redirect("/");
};

exports.postDeleteElement = (req, res, next) => {
  const elementId = req.body.id;
  Expense.destroy({ where: { id: elementId } })
    .then((result) => {
      console.log("deleted successfully");
    })
    .catch((err) => console.log(err));
  res.redirect("/");
};

exports.postEditElement = (req, res, next) => {
  const elementId = req.body.id;
  const amount = req.body.expense;
  const description = req.body.description;
  const category = req.body.category;

  Expense.destroy({ where: { id: elementId } })
    .then((result) => {
      console.log("deleted successfully");
    })
    .catch((err) => console.log(err));
  Expense.findAll()
    .then((data) => {
      res.render("editPage", {
        pageTitle: "Expense Tracker",
        valamount: amount,
        valdesc: description,
        valcategory: category,
        values: data,
        path: "/",
      });
    })
    .catch((err) => console.log(err));
};
