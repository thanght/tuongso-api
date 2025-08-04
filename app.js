const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const tuongRoutes = require('./routes/tuong');
const photoRoutes = require('./routes/photo');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // public ảnh đã upload

app.use('/api/auth', authRoutes);
app.use('/api/tuong', tuongRoutes);
app.use('/api/tuong', photoRoutes); // upload ảnh

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
