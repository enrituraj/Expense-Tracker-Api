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
            return res.status(400).json({ message: "user already exists" });
        }

        const user = await User.create({
            name,
            email,
            password,
        });

        if (user) {
            return res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            return res.status(400).json({ message: "Invalid user data" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// @desc User Login
// @route POST /api/auth/login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);
        const user = await User.findOne({ email });
        console.log(user);
        const checkPassword = await user.matchPassword(password);

        console.log(checkPassword);

        if (!user || !checkPassword) {
            return res
                .status(400)
                .json({ message: "Invalid email or padssword" });
        }
        if (user.isDisabled) {
            return res.status(400).json({
                message: "Your account is disabled by admin",
            });
        }

        res.cookie("jwt", generateToken(user._id), {
            httpOnly: true,
            secure: true,
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// @desc Logout
// @route GET /api/auth/logout
const logout = (req, res) => {
    res.cookie("jwt", "", { maxAge: 1 });
    return res.status(200).json({ message: "User logout successfully" });
};

module.exports = { signup, login, logout };
