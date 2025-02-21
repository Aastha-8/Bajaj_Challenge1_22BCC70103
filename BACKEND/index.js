const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const USER_ID = "Aastha_08082004";  // Replace with your actual details
const EMAIL = "22BCC70103@cuchd.in"; // Replace with your college email
const ROLL_NUMBER = "22BCC70103"; // Replace with your actual roll number

// POST /bfhl - Processes input data
app.post("/bfhl", (req, res) => {
    try {
        const { data } = req.body;
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Invalid input" });
        }

        // Separate numbers and alphabets
        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
        const highest_alphabet = alphabets.length ? [alphabets.sort().pop()] : [];

        res.json({
            is_success: true,
            user_id: USER_ID,
            email: EMAIL,
            roll_number: ROLL_NUMBER,
            numbers,
            alphabets,
            highest_alphabet
        });
    } catch (error) {
        res.status(500).json({ is_success: false, message: "Server error" });
    }
});

// GET /bfhl - Returns hardcoded response
app.get("/bfhl", (req, res) => {
    res.json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));