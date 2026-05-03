import connectDB from '../config/db.js';
import User from '../models/User.js';
import { generateToken } from '../utils/token.js';

export default async function handler(req, res) {
    await connectDB();

    if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Method not allowed' });

    try {
        const { name, email, password } = req.body;
        if (await User.findOne({ email })) return res.status(400).json({ success: false, message: 'User already exists' });

        const user = await User.create({ name, email, password });
        const payload = { id: user._id, name: user.name, email: user.email };

        res.status(201).json({
            success: true,
            token: generateToken(user._id),
            user: payload
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
