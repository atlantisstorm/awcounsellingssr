import express from 'express';
import cors from 'cors';
import { renderToString } from 'react-dom/server';
import React from 'react';
import App from '../shared/app';
import { StaticRouter } from 'react-router-dom';

const app = express();
app.use(cors());
app.use(express.static('public'));
//app.get('/favicon.ico', (req, res) => res.status(204).end());
const context = {};
app.get('*', (req, res, next) => {
  const markup = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <script src="/bundle.js" defer></script>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <title>Aine Wilson Counselling | Addiction and Family Support | Maguiresbridge - Aine Wilson Counselling</title>
        <meta name='description' content='Aine Wilson Counselling | Specialising in addiction, drugs, alcohol and gambling in the Armagh, Cavan, Monaghan, Fermanagh and Tyrone area' />
        <meta name='keywords' content='addiction, family support, abuse, drugs, alcohol, sexual, physical, bereavement, anger management, self-esteem, relationships, aine wilson counselling, counsellor, family support worker, family programmes, education programmes' />
        <meta property='og:site_name' content='Aine Wilson Counselling' />
        <meta property='og:title' content='Aine Wilson Counselling | Addiction and Family Support | Maguiresbridge' />
        <meta property='og:description' content='Aine Wilson Counselling | Specialising in addiction, drugs, alcohol and gambling in the Armagh, Cavan, Monaghan, Fermanagh and Tyrone area' />
        <meta property='og:url' content='http://www.ainewilsoncounselling.com' />          
      </head>
      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});