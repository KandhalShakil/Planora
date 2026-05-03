import mongoose from 'mongoose';

const cached = global.mongoose || (global.mongoose = { conn: null, promise: null });

async function connectDB() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGO_URI, { bufferCommands: false }).then((mongoose) => {
            console.log('MongoDB Connected');
            return mongoose;
        });
    }
    
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default connectDB;
