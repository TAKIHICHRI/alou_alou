const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 10000;

// استدعاء ملفات الـ HTML والـ CSS
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'TAXI-TUNISIA-PRO.html'));
});

app.listen(port, () => {
    console.log('Server is running...');
});
