const express = require("express");

const db = require("./connection.js");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve fruits" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("cars")
    .where({ id })
    .first()
    .then(car => {
      res.json(car);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve fruit" });
    });
});

router.post("/", (req, res) => {
  const carsData = req.body;
  db("cars")
    .insert(carsData)
    .then(ids => {
      db("cars")
        .where({ id: ids[0] })
        .then(newcar => {
          res.status(201).json(newcar);
        });
    })
    .catch(err => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store data" });
    });
});

// router.delete("/:id", (req, res) => {
//     const { id } = req.params;
  
//     db("cars")
//     .where('id', {id}).del()
//      // .where({ id })
//     //   .first()
//     .then((cars) => {
//         res.status(200).json(cars);
//       })
//       .catch(err => {
//         res.status(500).json({ message: "Failed to retrieve fruit" });
//       });
//   });


module.exports = router;