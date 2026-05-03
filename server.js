import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Import API Handlers
import loginHandler from './api/auth/login.js';
import registerHandler from './api/auth/register.js';
import tasksHandler from './api/tasks/index.js';
import taskByIdHandler from './api/tasks/[id].js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

const handle = (handler) => async (req, res) => {
	try {
		await handler(req, res);
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};

const serveIndex = (_, res) => res.sendFile(path.join(__dirname, 'frontend', 'index.html'));

app.post('/api/auth/login', handle(loginHandler));
app.post('/api/auth/register', handle(registerHandler));
app.get('/api/tasks', handle(tasksHandler));
app.post('/api/tasks', handle(tasksHandler));
app.all('/api/tasks/:id', (req, res) => {
	req.query.id = req.params.id;
	return handle(taskByIdHandler)(req, res);
});
app.get('*', serveIndex);

app.listen(PORT, () => console.log(`\n🚀 Planora Local Server Running!\n📡 URL: http://localhost:${PORT}\n📁 Mode: Standard Node.js (Non-Vercel)\n`));
