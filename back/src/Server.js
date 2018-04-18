import path from 'path'
import express from 'express'
import * as APIController from './controllers/API.Controller.js'

const app = express()

const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
}

app.use(require('body-parser').json())

// Static
app.use(express.static(path.join(__dirname, '../../front/dist')))

// GET API
app.get('/api/options', asyncMiddleware(APIController.GetOptions))
app.get('/api/questions', asyncMiddleware(APIController.GetQuestions))
app.get('/api/candidates', asyncMiddleware(APIController.GetCandidates))
app.get('/api/parties', asyncMiddleware(APIController.GetParties))

// POST API
app.post('/api/results', asyncMiddleware(APIController.GetResults))
app.post('/api/login', asyncMiddleware(APIController.Login))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../front/dist/index.html'))
})

app.listen(5001, () => {
    console.log('Server has been started!')
})
