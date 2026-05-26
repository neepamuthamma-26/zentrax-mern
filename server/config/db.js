const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log(`✅ MongoDB Connected → ${conn.connection.host}`);

    // Seed default users & demo data on first connect
    await seedDatabase();
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

async function seedDatabase() {
  const User    = require("../models/User");
  const Project = require("../models/Project");
  const Milestone = require("../models/Milestone");
  const bcrypt  = require("bcryptjs");

  const existingAdmin = await User.findOne({ email: "admin@zentrax.com" });
  if (existingAdmin) return; // Already seeded

  console.log("🌱 Seeding default users and demo data...");

  const salt = await bcrypt.genSalt(10);

  const admin = await User.create({
    name: "Admin User",
    email: "admin@zentrax.com",
    password: await bcrypt.hash("admin123", salt),
    role: "admin",
  });

  const manager = await User.create({
    name: "Ravi Kumar",
    email: "manager@zentrax.com",
    password: await bcrypt.hash("manager123", salt),
    role: "manager",
  });

  const client = await User.create({
    name: "Priya Sharma",
    email: "client@zentrax.com",
    password: await bcrypt.hash("client123", salt),
    role: "client",
  });

  const project = await Project.create({
    title: "Whitefield Villa",
    description: "4BHK luxury villa construction",
    location: "Whitefield, Bengaluru",
    clientId: client._id,
    managerId: manager._id,
    status: "ongoing",
    completion: 65,
    startDate: new Date("2025-01-15"),
  });

  await Milestone.insertMany([
    { projectId: project._id, title: "Foundation Completed", completed: true,  date: new Date("2025-02-10") },
    { projectId: project._id, title: "Plinth Beam Done",     completed: true,  date: new Date("2025-03-05") },
    { projectId: project._id, title: "Ground Floor Slab",    completed: false, date: new Date("2025-06-01") },
  ]);

  console.log("✅ Seed complete. Demo credentials:");
  console.log("   admin@zentrax.com   / admin123");
  console.log("   manager@zentrax.com / manager123");
  console.log("   client@zentrax.com  / client123");
}

module.exports = connectDB;
