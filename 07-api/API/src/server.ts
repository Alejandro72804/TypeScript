console.log('Iniciando el servidor...');

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ message: 'Hola desde la API con Typescript!' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
    console.log(`Endpoint disponible en: http://localhost:${PORT}/api`);
});

console.log('Servidor iniciado con éxito.');