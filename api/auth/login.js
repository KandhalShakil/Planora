import connectDB from '../config/db.js';
import User from '../models/User.js';
import { generateToken } from '../utils/token.js';

export default async function handler(req, res) {
    await connectDB();

    if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Method not allowed' });

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select('+password');
        if (!user || !(await user.comparePassword(password))) return res.status(401).json({ success: false, message: 'Invalid email or password' });

        const payload = { id: user._id, name: user.name, email: user.email };

        res.status(200).json({
            success: true,
            token: generateToken(user._id),
            user: payload
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
