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

app.get('/api/options', asyncMiddleware(APIController.GetOptions))
app.get('/api/questions', asyncMiddleware(APIController.GetQuestions))
app.get('/api/candidates', asyncMiddleware(APIController.GetCandidates))
app.get('/api/parties', asyncMiddleware(APIController.GetParties))
app.post('/api/results', asyncMiddleware(APIController.GetResults))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../front/dist/index.html'))
})

//app.get('/api/startAuth', asyncMiddleware(APIController.StartAuth))
//app.get('/api/authCallback', asyncMiddleware(APIController.AuthCallback))
//app.get('/api/getStudentGroups', asyncMiddleware(APIController.GetStudentGroups))

app.listen(5001, () => {
    console.log('Server has been started!')
})
