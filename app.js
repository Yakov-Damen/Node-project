import express from 'express';
import morgan from'morgan';
import router from './routes/routes.js';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use('/api', router);

app.listen(3000, () => console.log('Server running on port 3000'));