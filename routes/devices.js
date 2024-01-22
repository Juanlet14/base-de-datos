const express = require("express");
const app = express();
const Phone = require("../models/device");


app.get("/:number", (req, res) => {
    // Validación
    Phone.find({ number: req.params.number })
        .then(phones => {
            
          res.status(200).json({
                message: "OK",
                phones
            });
        })
        .catch(err => {
            
          res.status(500).json({
                message: "Error en la base de datos",
                error: err.message
            });
        });
});



app.post("/", (req, res) => {
    
    const phoneData = req.body;

    const newPhone = new Phone(phoneData);

    newPhone.save()
        .then(phoneSaved => {
            res.status(200).json({
                message: "ok",
                phone: phoneSaved
            });
        })
        .catch(err => {
            res.status(500).json({
                message: "Error en la base de datos",
                error: err.message
            });
        });
});

/*
app.put('/', (req, res) => {
    // Validación
    Phone.findOneAndUpdate({surname: req.body.number}, req.body, {new: true})
      .then(phoneUpdated => {
        res.status(200).json({
          message: 'ok',
          phone: phoneUpdated
        });
      })
      .catch(err => {
        res.status(500).json({
          message: 'Database error',
          error: err
        });
      });
  });

  app.delete('/:number', (req, res) => {
    // Validación
    Phone.deleteOne({number: req.params.number})
      .then(infoDeleted => {
        res.status(200).json({
          message: 'ok',
          info: infoDeleted
        });
      })
      .catch(err => {
        res.status(500).json({
          message: 'Database error',
          error: err
        });
      });
  });
*/
  module.exports = app;