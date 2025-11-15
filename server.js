const express = require('express');
const app = express();
const port = 3000; // Sitenizin çalışacağı port

// Ana sayfa (/) için bir istek geldiğinde ne olacağını belirler
app.get('/', (req, res) => {
  // Şimdilik sadece bir metin gönderelim
  res.send('Merhaba Dünya! Bu benim Node.js sunucum.');

  // NOT: Bir HTML dosyası göndermek isterseniz:
  // res.sendFile(__dirname + '/index.html');
});

// Sunucuyu başlatır ve dinlemeye başlar
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışmaya başladı`);
});