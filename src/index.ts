import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.get('/', (req, res) => {
  res.send('¡Hola, mundo! Servidor funcionando correctamente.');
});



app.listen(3000, () => {
  console.log('Servidor levantado gracias a Diego en el puerto 3000');
});
