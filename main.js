import express from 'express';

// routes import
import authRoutes from './routes/auth.js'
import recordRoutes from './routes/record.js'

const app = express();
const port = 3000;

app.use(express.json()) // Middleware to parse JSON bodies

// routes
app.use('/', authRoutes)
app.use('/record', recordRoutes)

// Start the server
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})