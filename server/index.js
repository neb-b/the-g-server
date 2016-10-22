import express from 'express';

let app = express();



app.get('/', (req, res) => {
  res.send('hello world');
})


app.listen(3000, () => console.log('Runnign Server on 3000'));