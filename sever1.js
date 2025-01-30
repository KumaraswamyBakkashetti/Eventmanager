const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/eventManagement", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

// Event Schema
const eventSchema = new mongoose.Schema({
    eventName: String,
    organizerName: String,
    eventDate: Date,
    startTime: String,
    endTime: String,
    eventLocation: String,
    description: String,
    contactEmail: String,
    contactPhone: String,
    attendees: Number,
    eventType: String,
});
const Event = mongoose.model("Event", eventSchema);

// Routes
app.get("/", (req, res) => {
    res.send("Event Management Backend is Running");
});

// Add Event
app.post("/api/events", async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).send({ message: "Event created successfully", event });
    } catch (error) {
        res.status(400).send({ error: "Failed to create event" });
    }
});

// Fetch Events
app.get("/api/events", async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).send(events);
    } catch (error) {
        res.status(500).send({ error: "Failed to fetch events" });
    }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
