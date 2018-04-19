import path from 'path'
import express from 'express'

import jwt from 'express-jwt'

import {
    GetOptions,
    GetQuestions,
    GetCandidates,
    GetParties,
    GetResults,
    Login,
    GetAnswer,
    GetAnswers,
    SetAnswer,
} from './controllers/API.Controller.js'

const app = express()

app.use(require('body-parser').json())

// Authorization middlewares
const JWT_SECRET = 'VAALIKONE_NOT_FOR_PRODUCTION'

const adminMiddleware = jwt({
    secret                  : JWT_SECRET,
    aud                     : 'admin',
})

const candidateMiddleware = jwt({
    secret                  : JWT_SECRET,
    aud                     : 'candidate',
})

// GET API
app.get('/api/options', GetOptions)
app.get('/api/questions', GetQuestions)
app.get('/api/question/:question/answers', GetAnswers)
app.get('/api/candidates', GetCandidates)
app.get('/api/parties', GetParties)

// POST API
app.post('/api/results', GetResults)
app.post('/api/login', Login)

// Authorized endpoints
app.get('/api/answer/:questionId', candidateMiddleware, GetAnswer)
app.post('/api/answer/:questionId', candidateMiddleware, SetAnswer)


// Static
app.use(express.static(path.join(__dirname, '../../front/dist')))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../front/dist/index.html'))
})

// Start Express server!
app.listen(5001, () => {
    console.log('Server has been started!')
})
