import { useState } from "react";
import "./App.css";

export default function App() {
  const [password, setPassword] = useState("Click the button to generate password");
  const [bgColor, setBgColor] = useState("purple");

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

  const generatePassword = () => {
    let newPassword = '';
    const length = 12; // You can make this dynamic with input later

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }

    setPassword(newPassword);

    // Set background color (you can randomize if you want)
    setBgColor('linear-gradient(135deg,rgb(92, 9, 48),rgb(15, 150, 136))');
  };

  return (
    <div className="password-container" style={{ background: bgColor }}>
      <div className="password-card">
        <h1 className="password-text">"{password}"</h1>
        <button
          className="inspire-button"
          onClick={generatePassword}
        >
          Hit Me ✨
        </button>
      </div>
      <p className="footer-text">
        Click the button for more wisdom!
      </p>
    </div>
  );
}
