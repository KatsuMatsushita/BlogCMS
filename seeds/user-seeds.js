const { User } = require("../models");

const userData = [
  {
    username: "theRibbon",
    email: "mobius1@isaf.mil",
    password: "battlefieldreaper",
  },
  {
    username: "DemonLord",
    email: "lucrewarrior@ustio.gov",
    password: "knightsoldiermerc",
  },
  {
    username: "One-Winged Pixy",
    email: "no.borders@uofd.edu",
    password: "worldwithnoboundaries",
  },
  {
    username: "Edge",
    email: "Kei.Nagase@OFAF.mil",
    password: "bluedove",
  },
  {
    username: "Blaze",
    email: "wardog@OFAF.mil",
    password: "ghostofrazgriz",
  },
  {
    username: "Southern Cross",
    email: "gryphus.one@fraaf.mil",
    password: "nemesisx",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
