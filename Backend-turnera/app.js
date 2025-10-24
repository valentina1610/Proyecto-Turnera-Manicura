const express = require('express');
const cors = require('cors');
const fs = require('fs'); // Para leer y escribir archivos

const app = express();

app.use(cors());
app.use(express.json());

// Leer turnos desde archivo JSON si existe
let turnos = [];
const archivo = 'turnos.json';
if (fs.existsSync(archivo)) {
  turnos = JSON.parse(fs.readFileSync(archivo, 'utf-8'));
}

// -------------------- RUTAS --------------------

// GET todos los turnos
app.get('/turnos', (req, res) => {
  res.json(turnos);
});

// POST un turno nuevo
app.post('/turnos', (req, res) => {
  const nuevoTurno = req.body;
  nuevoTurno.id = turnos.length > 0 ? turnos[turnos.length - 1].id + 1 : 1;

  turnos.push(nuevoTurno);

  // Guardar en archivo JSON
  fs.writeFileSync(archivo, JSON.stringify(turnos, null, 2));

  res.json({ mensaje: "Turno agregado correctamente ✅", turno: nuevoTurno });
});

// Servidor
app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000 ✅'));
