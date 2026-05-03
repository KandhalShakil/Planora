import connectDB from '../config/db.js';
import Task from '../models/Task.js';
import { protect } from '../utils/auth.js';

const handler = async (req, res) => {
    await connectDB();
    const { id } = req.query;

    if (req.method === 'GET') {
        try {
            const task = await Task.findOne({ _id: id, user: req.user._id, isDeleted: false });
            if (!task) return res.status(404).json({ success: false, message: 'Task not found' });
            return res.status(200).json({ success: true, data: task });
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }

    if (req.method === 'PUT') {
        try {
            const task = await Task.findOne({ _id: id, user: req.user._id, isDeleted: false });
            if (!task) return res.status(404).json({ success: false, message: 'Task not found' });

            task.set(req.body);
            await task.save();
            return res.status(200).json({ success: true, data: task });
        } catch (error) {
            return res.status(400).json({ success: false, message: error.message });
        }
    }

    if (req.method === 'DELETE') {
        try {
            const task = await Task.findOne({ _id: id, user: req.user._id, isDeleted: false });
            if (!task) return res.status(404).json({ success: false, message: 'Task not found' });

            task.isDeleted = true;
            await task.save();
            return res.status(200).json({ success: true, message: 'Task removed' });
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }

    return res.status(405).json({ success: false, message: 'Method not allowed' });
};

export default protect(handler);
