const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 10000;

// هذا السطر يخبر السيرفر بأن يفتح ملفك الاحترافي كصفحة رئيسية
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'TAXI-TUNISIA-PRO.html'));
});

app.listen(port, () => {
    console.log('سيرفر تاكسي تونس يعمل بنجاح!');
});
