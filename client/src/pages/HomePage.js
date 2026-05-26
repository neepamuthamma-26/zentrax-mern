import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#f7f1e8", fontFamily: "Outfit, sans-serif" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem 2rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img src={logo} alt="Zentrax Logo" style={{ width: 48, height: 48, objectFit: "contain" }} />
          <div>
            <div style={{ fontSize: "0.9rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#c9a84c" }}>ZENTRAX</div>
            <div style={{ fontSize: "0.8rem", color: "#aaa" }}>Construction Portal</div>
          </div>
        </div>
        <nav style={{ display: "flex", gap: "0.75rem" }}>
          <Link to="/login" style={{ padding: "0.75rem 1.3rem", borderRadius: 9999, background: "rgba(201,168,76,0.12)", color: "#f7f1e8", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem" }}>
            Login
          </Link>
          <Link to="/signup" style={{ padding: "0.75rem 1.3rem", borderRadius: 9999, background: "#c9a84c", color: "#0a0a0a", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem" }}>
            Signup
          </Link>
        </nav>
      </header>

      <main style={{ display: "grid", placeItems: "center", minHeight: "calc(100vh - 90px)", padding: "2rem" }}>
        <div style={{ maxWidth: 900, width: "100%", textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: "0.8rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#c9a84c" }}>
            Welcome to Zentrax
          </p>
          <h1 style={{ margin: "1rem 0", fontSize: "clamp(2.75rem, 4vw, 4.75rem)", lineHeight: 1.02, letterSpacing: "-0.04em" }}>
            Your construction project portal starts here.
          </h1>
          <p style={{ maxWidth: 680, margin: "1rem auto 2.5rem", color: "#d7d0c4", lineHeight: 1.9, fontSize: "1rem" }}>
            Access real-time updates, assign teams, and manage progress with a single login. New here? Create your account and take the first step toward better construction management.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link to="/login" style={{ minWidth: 150, padding: "1rem 1.8rem", borderRadius: 9999, background: "#c9a84c", color: "#0a0a0a", fontWeight: 700, textDecoration: "none" }}>
              Login
            </Link>
            <Link to="/signup" style={{ minWidth: 150, padding: "1rem 1.8rem", borderRadius: 9999, background: "transparent", border: "1px solid rgba(255,255,255,0.16)", color: "#f7f1e8", fontWeight: 700, textDecoration: "none" }}>
              Signup
            </Link>
          </div>

          <div style={{ marginTop: "3rem", color: "#aaa", fontSize: "0.95rem" }}>
            <p>Want to view the full website first?</p>
            <Link to="/landing" style={{ color: "#c9a84c", textDecoration: "underline" }}>
              Explore the full landing page</Link>
            .
          </div>
        </div>
      </main>
    </div>
  );
}
