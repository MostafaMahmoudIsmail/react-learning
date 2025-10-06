import React from "react";
import "./index.css";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "600px", margin: "auto" }}>
      {/*npm run dev  */}
      <section style={{ borderBottom: "2px solid #eee", marginBottom: "20px" }}>
        <h1 style={{ color: "#2c3e50" }}>Mostafa Mahmoud Ismail</h1>
        <h2 style={{ color: "#7f8c8d" }}>Frontend Developer</h2>
        <p>Email: <a href="mailto:ahmed@example.com">mostafa@gmail.com</a></p>
        <p>Phone: +20 123 456 7890</p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h3 style={{ color: "#2980b9" }}>Experience</h3>
        <ul>
          <li>Software Tester at target (2024–Present)</li>
          <li>Frontend Intern at ITI – React & TypeScript</li>
        </ul>
      </section>

      <section>
        <h3 style={{ color: "#27ae60" }}>Skills</h3>
        <ul>
          <li>React, TypeScript, JavaScript (ES6+)</li>
          <li>HTML5, CSS3, Tailwind, Bootstrap</li>
          <li>Git, GitHub, VS Code, Parcel, Vite</li>
          <li>Manual & Automation Testing (Selenium, Postman)</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
