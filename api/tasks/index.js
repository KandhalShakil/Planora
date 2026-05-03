import connectDB from '../config/db.js';
import Task from '../models/Task.js';
import { protect } from '../utils/auth.js';

const handler = async (req, res) => {
    await connectDB();

    if (req.method === 'GET') {
        try {
            const { search, priority, completed } = req.query;
            const query = { user: req.user._id, isDeleted: false };

            if (search) query.title = { $regex: search, $options: 'i' };
            if (priority && priority !== 'all') query.priority = priority;
            if (completed && completed !== 'all') query.completed = completed === 'true';

            const tasks = await Task.find(query).sort({ createdAt: -1 });
            return res.status(200).json({ success: true, data: tasks });
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }

    if (req.method === 'POST') {
        try {
            const task = await Task.create({ ...req.body, user: req.user._id });
            return res.status(201).json({ success: true, data: task });
        } catch (error) {
            return res.status(400).json({ success: false, message: error.message });
        }
    }

    return res.status(405).json({ success: false, message: 'Method not allowed' });
};

export default protect(handler);
