'use strict';

const { json } = require('body-parser');
const express = require('express');
const Flowers = require('../models/flowers');
const flower = new Flowers();

const router = express.Router();

//RESTful routes
router.get('/flower', getFlower);
router.get('/flower/:id', getOneFlower);
router.post('/flower', createFlower);
router.put('/flower/:id', updateFlower);
router.delete('/flower/:id', deleteFlower);


function getFlower(req, res) {
  const allFlowers = flower.get();
  res.status(200).json(allFlowers);
}

function getOneFlower(req, res) {
  const id = req.params.id;
  const oneflower = flower.get(id);
  res.status(200).json(oneflower);
}

function createFlower(req, res) {
  const obj = req.body;
  const newflower = flower.create(obj);
  res.status(200).json(newflower);
}

function updateFlower(req, res) {
  const obj = req.params.id;
  flower.update(req.params.id, req.body);
  res.status(200).json(obj);
}

function deleteFlower(req, res) {
  flower.delete(req.params.id);
  res.status(200).json('deleting flower');
}

module.exports = router;