const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const twilio = require("twilio");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Twilio client setup
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Test api
app.get("/test", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

// API endpoint: /call
app.post("/call", async (req, res) => {
  try {
    const { riderNumber, driverNumber } = req.body;

    if (!riderNumber || !driverNumber) {
      return res.status(400).json({ error: "Both riderNumber and driverNumber are required" });
    }

    // Step 1: Call driver first
    const call = await client.calls.create({
      url: "http://demo.twilio.com/docs/voice.xml", // For demo, this plays a Twilio message
      to: driverNumber,
      from: process.env.TWILIO_PHONE_NUMBER
    });

    console.log(`Call initiated: ${call.sid}`);
    res.json({ success: true, callSid: call.sid });
  } catch (error) {
    console.error("Error making call:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// 1️⃣ Endpoint: Start call to rider
app.post("/callRider", async (req, res) => {
  try {
    const { riderNumber, driverNumber } = req.body;
    if (!riderNumber || !driverNumber) {
      return res.status(400).json({ error: "Both riderNumber and driverNumber are required" });
    }

    // Initiate call to rider first
    const call = await client.calls.create({
      to: riderNumber,
      from: process.env.TWILIO_PHONE_NUMBER,
      url: `https://${process.env.SERVER_URL}/connect?driverNumber=${encodeURIComponent(driverNumber)}`
    });

    console.log("Call initiated:", call.sid);
    res.json({ success: true, callSid: call.sid });
  } catch (error) {
    console.error("Error making call:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// 2️⃣ Endpoint: Twilio calls this when rider answers
app.post("/connect", (req, res) => {
  const driverNumber = req.query.driverNumber;

  const twiml = new twilio.twiml.VoiceResponse();
  const dial = twiml.dial();
  dial.number(driverNumber);

  res.type("text/xml");
  res.send(twiml.toString());
});

module.exports = app;