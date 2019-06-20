const express = require('express');
const app = express();
app.get('/', (req, res) => {
    const a = 12
    res.send(`Express ${a}`);
});
app.listen("8888", ()=> {
    console.log("server is runing at port:8888");
})