"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("maps")
      .then((results) => {
        res.json(results);
    });
  });



  router.post("/", (req, res) => {
     knex('maps')
      .insert({title: req.body.mapTitle, creator_id: 2})
      .then((results)=>{
        res.json({success: true, message: 'ok' });
      })
  });


  return router;
}
