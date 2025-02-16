const User = require("./../../models/userModel");
const jwt = require("jsonwebtoken");

// generate jwt token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

// @desc User Signup
// @route POST /api/auth/signup
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userExists = await User.findOne({ email });

        if (userExists) {
            res.status(400).json({ message: "user already exists" });
        }

        const user = await User.create({
            name,
            email,
            password,
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc User Login
// @route POST /api/auth/login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const checkPassword = await User.matchPassword(password);
        if (!user || !checkPassword) {
            res.status(400).json({ message: "Invalid email or padssword" });
        }
        if (user.isDisabled) {
            res.status(400).json({
                message: "Your account is disabled by admin",
            });
        }

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Logout
// @route GET /api/auth/logout
const logout = (req, res) => {
    res.status(200).json({ message: "User logout successfully" });
};
