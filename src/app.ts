// const express = require("express");
import { Request, Response } from "express";
import express = require("express");
import Routes from "./routes";

const app = express();
app.use(express.json());

app.use(Routes);

export default app;