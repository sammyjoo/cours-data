const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const App = express();

App.listen(PORT, () => console.log('server running on PORT ${PORT}'));
