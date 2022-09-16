# Back-end

// localhost: 3333
// www.minhaapi.com/ads

// HTTP methods / API RESTful / HTTP Codes
// GET, POST, PUT, PATCH, DELETE

```ts
import express, { request, response } from 'express'

const app = express()

app.get('/games', (request, response) => {
  return response.json([]);
});

app.post('/ads', (request, response) => {
  return response.status(201).json([]);
});


app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: 'Anúncio 1' },
    { id: 2, name: 'Anúncio 2' },
    { id: 3, name: 'Anúncio 3' },
    { id: 4, name: 'Anúncio 4' },
    { id: 5, name: 'Anúncio 5' },
  ]

  )
})

app.listen(3333)
```

## Entidades

### Game

id
title
bannerUrl

CDN (Content Delivery Network, ex: amazon S3) => fornece uma URL da imagem

### Ad-

id
gameId
yearsPlaying
Discord
weekDays
hourStart
hourEnd (1:30 h -> 90 (ou 5400 seg.), R$ 79,99 -> 7999)
(cuidado com datas: fusos, formatos;
pontos flutuantes)
useVoiceChannel
createAt

## Casos de uso-

-Listagem de games com contagem de anúncios
-Criação de novo anúncio
-Listagem de anúncio por game
-Buscar discord pelo ID do anúncio