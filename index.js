const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 4200

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (request, response) => {
    response.render('home')
})

app.get('/extracurriculares', (request, response) => {
    response.render('extracurriculares')
})

app.listen(port, (err) => {
    if (err) {
        console.log('Não foi possível iniciar o servidor do Curriculum.')
    } else {
        console.log('Servidor do Curriculum rodando ...')
    }
})
