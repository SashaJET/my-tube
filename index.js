// const express = require('express');
import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on localhost:${PORT}`;
const handleProfile = (req, res) => res.send('This is profile');
 


app.get('/', function (req, res) {
    res.send('hello');
});

app.get('/profile', handleProfile)
 
 
 app.listen(PORT, handleListening);