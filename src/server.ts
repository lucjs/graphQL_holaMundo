import express from 'express';
import compression from "compression";
import cors from "cors";
const app_express = express();
const PORT = 8000;

app_express.use('*', cors());
app_express.use(compression());

app_express.use('/', (re, res) => {
    res.send('API corriendo...');
});

app_express.listen({ port: PORT }, () => {
    console.log("Server on port 8000 -> url http://localhost:8000");
});