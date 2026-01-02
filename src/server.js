import 'dotenv/config';
import app from './app.js';
import './database/index.js';

app.listen(3001, () => console.log('Server is Running At Port 3001'));
