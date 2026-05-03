import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import connectDB from '../config/db.js';

export const protect = (handler) => async (req, res) => {
    try {
        const authHeader = req.headers.authorization || '';
        const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';
        if (!token) return res.status(401).json({ success: false, message: 'Not authorized to access this route' });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        await connectDB();
        req.user = await User.findById(decoded.id);
        if (!req.user) return res.status(401).json({ success: false, message: 'User no longer exists' });

        return handler(req, res);
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Not authorized to access this route' });
    }
};
