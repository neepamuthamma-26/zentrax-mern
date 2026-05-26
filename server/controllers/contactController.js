const { Contact } = require("../models/index");

const saveContact = async (req, res) => {
  const { name, email, phone, service, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Name, email and message are required." });
  }
  try {
    const contact = await Contact.create({ name, email, phone, service, message });
    res.status(201).json({ success: true, message: "Message sent successfully", id: contact._id });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getContacts = async (req, res) => {
  try {
    const data = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { saveContact, getContacts };
