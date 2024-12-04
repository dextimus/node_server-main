"use strict";

const { compareSync } = require ("bcrypt");
const { findOne } = require ("../models/user");

async function authenticateUser(email, password) {
  try {
    const user = await findOne({ email: email });
    if (!user) {
      return "Vartotojas nerastas";
    }

    if (compareSync(password, user.password)) {
      return "Sekmingai prisijungete";
    } else {
      return "Neteisingas slaptazodis";
    }
  } catch (error) {
    console.error("Autentifikavimo klaida:", error);
    return "Įvyko klaida atliekant autentifikaciją";
  }
}

module.exports = {
  authenticateUser,
};
