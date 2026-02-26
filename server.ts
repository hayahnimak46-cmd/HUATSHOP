import express from "express";
import { createServer as createViteServer } from "vite";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const JWT_SECRET = process.env.JWT_SECRET || "huat-shop-secret-key-2026";

// In-memory user store (for demo purposes)
// In a real production app, use a database like MongoDB or PostgreSQL
const users: any[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(cookieParser());
  app.use(cors({
    origin: true,
    credentials: true
  }));

  // --- API ROUTES ---

  // Register
  app.post("/api/auth/register", async (req, res) => {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({ message: "Semua field harus diisi" });
      }

      const userExists = users.find(u => u.email === email);
      if (userExists) {
        return res.status(400).json({ message: "Email sudah terdaftar" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password: hashedPassword
      };

      users.push(newUser);

      const token = jwt.sign({ id: newUser.id, name: newUser.name, email: newUser.email }, JWT_SECRET, { expiresIn: "7d" });

      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      });

      res.status(201).json({ 
        message: "Registrasi berhasil",
        user: { id: newUser.id, name: newUser.name, email: newUser.email }
      });
    } catch (error) {
      console.error("Register error:", error);
      res.status(500).json({ message: "Terjadi kesalahan server" });
    }
  });

  // Login
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: "Email dan password harus diisi" });
      }

      const user = users.find(u => u.email === email);
      if (!user) {
        return res.status(400).json({ message: "Email atau password salah" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Email atau password salah" });
      }

      const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, JWT_SECRET, { expiresIn: "7d" });

      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      });

      res.json({ 
        message: "Login berhasil",
        user: { id: user.id, name: user.name, email: user.email }
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Terjadi kesalahan server" });
    }
  });

  // Get Current User
  app.get("/api/auth/me", (req, res) => {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Tidak terautentikasi" });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as any;
      res.json({ user: { id: decoded.id, name: decoded.name, email: decoded.email } });
    } catch (error) {
      res.status(401).json({ message: "Token tidak valid" });
    }
  });

  // Logout
  app.post("/api/auth/logout", (req, res) => {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none"
    });
    res.json({ message: "Logout berhasil" });
  });

  // --- VITE MIDDLEWARE ---
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
