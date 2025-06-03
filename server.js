const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const user = {
  username: "admin",
  password: "123456"
};

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    return res.json({ success: true });
  }
  res.status(401).json({ success: false, message: "Invalid credentials" });
});

app.get('/api/org', (req, res) => {
  res.json({
    name: "Tech Solutions Ltd.",
    description: "Empowering businesses through digital transformation.",
    location: "Bengaluru, India",
    email: "contact@techsolutions.com"
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
