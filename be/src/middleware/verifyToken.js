import jwt from 'jsonwebtoken'

const checkToken = (req, res, next) => {
    const token = req.headers.authorization;
    const ACCESS_KEY = process.env.ACCESS_KEY;
    if (!token) {
        return res.status(401).json({ error: "Missing token" });
    }

    try {
        const decoded = jwt.verify(token, ACCESS_KEY);

        req.user = decoded;

    } catch (error) {
        return res.status(401).json({ error: "Invalid token" });
    }
};
