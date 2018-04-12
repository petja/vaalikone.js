'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _APIController = require('./controllers/API.Controller.js');

var APIController = _interopRequireWildcard(_APIController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// Static
app.use(_express2.default.static(_path2.default.join(__dirname, '../../front/dist')));

app.get('/api/candidates', asyncMiddleware(APIController.GetCandidates));
app.get('/api/parties', asyncMiddleware(APIController.GetParties));
app.get('/api/results', asyncMiddleware(APIController.GetResults));

//app.get('/api/startAuth', asyncMiddleware(APIController.StartAuth))
//app.get('/api/authCallback', asyncMiddleware(APIController.AuthCallback))
//app.get('/api/getStudentGroups', asyncMiddleware(APIController.GetStudentGroups))

app.listen(5001, () => {
    console.log('Server has been started!');
});