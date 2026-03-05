var express = require('express');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var User = require('./models/User');

var app = express();

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/ex61db')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:4200', credentials: true }));
app.use(bodyParser.json());

// Step 2: Session object initialization
app.use(session({ secret: "Shh, its a secret!" }));

// Step 3: API to create Cookies (single data and JsonObject data)
app.get("/create-cookie", cors(), (req, res) => {
    res.cookie("username", "tranduythanh");
    res.cookie("password", "123456");
    var account = {
        "username": "tranduythanh",
        "password": "123456"
    };
    res.cookie("account", account);

    // Cookies with timeout (Step 5 addition)
    // Expires after 360000 ms from the time it is set
    res.cookie("infor_limit1", 'I am limited Cookie - way 1', { expire: 360000 + Date.now() });
    res.cookie("infor_limit2", 'I am limited Cookie - way 2', { maxAge: 360000 });

    res.send("cookies are created");
});

// Step 4 & 5: API to read Cookies (with null check from Step 6 note)
app.get("/read-cookie", cors(), (req, res) => {
    // cookie is stored in client, so we use req
    var username = req.cookies.username;
    var password = req.cookies.password;
    var account = req.cookies.account;

    var infor = "username = " + username + "<br/>";
    infor += "password = " + password + "<br/>";

    if (account != null) {
        infor += "account.username = " + account.username + "<br/>";
        infor += "account.password = " + account.password + "<br/>";
    }

    res.send(infor);
});

// Step 6: API to clear a Cookie
app.get("/clear-cookie", cors(), (req, res) => {
    res.clearCookie("account");
    res.send("[account] Cookie is removed");
});

// ── Session ──────────────────────────────────────────────────────────────────

// Step 3: API to track page visits using Session
app.get("/contact", cors(), (req, res) => {
    if (req.session.visited != null) {
        req.session.visited++;
        res.send("You visited this page " + req.session.visited + " times");
    } else {
        req.session.visited = 1;
        res.send("Welcome to this page for the first time!");
    }
});

// ── Auth ──────────────────────────────────────────────────────────────────────

// POST /auth/login  – validate credentials and save a cookie on success
app.post('/auth/login', cors({ origin: 'http://localhost:4200', credentials: true }), async (req, res) => {
    try {
        var { username, password } = req.body;
        var user = await User.findOne({ username: username, password: password });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        // Save logged-in user info as a cookie (accessible by JavaScript)
        res.cookie('loggedUser', JSON.stringify({ username: user.username, fullname: user.fullname }));
        res.json({ message: 'Login successful', username: user.username, fullname: user.fullname });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// GET /seed-users – insert sample users for testing (run once)
app.get('/seed-users', async (req, res) => {
    try {
        await User.deleteMany({});
        await User.insertMany([
            { username: 'tranduythanh', password: '123456', fullname: 'Tran Duy Thanh', email: 'thanh@example.com' },
            { username: 'admin',        password: 'admin123', fullname: 'Administrator',   email: 'admin@example.com' },
            { username: 'student1',     password: 'pass1',    fullname: 'Student One',      email: 'student1@example.com' }
        ]);
        res.send('Sample users inserted successfully');
    } catch (err) {
        res.status(500).json({ message: 'Seed error', error: err.message });
    }
});

// ─────────────────────────────────────────────────────────────────────────────

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
