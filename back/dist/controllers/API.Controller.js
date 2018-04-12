'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GetResults = exports.GetParties = exports.GetCandidates = undefined;

let GetCandidates = exports.GetCandidates = (() => {
    var _ref = _asyncToGenerator(function* (req, res, next) {
        const query = yield _db2.default.select('id', 'firstname', 'lastname', 'party', 'description').from('candidates');

        res.json(query);
    });

    return function GetCandidates(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
})();

let GetParties = exports.GetParties = (() => {
    var _ref2 = _asyncToGenerator(function* (req, res, next) {
        const query = yield _db2.default.select('*').from('parties');

        res.json(query);
    });

    return function GetParties(_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
    };
})();

let GetResults = exports.GetResults = (() => {
    var _ref3 = _asyncToGenerator(function* (req, res, next) {

        const responses = yield Candidate.scoreCandidates(JSON.parse(req.query.payload));
        res.json(responses);

        //const candidates: number[] = Candidate.getAll()
        //const responses: {[number]: Object[]} = Candidate.getAllResponses()

        // Must return an object with questionId as a key
        // Each property has array in in, describing all responses to specific question

        // Finding best candidate
    });

    return function GetResults(_x7, _x8, _x9) {
        return _ref3.apply(this, arguments);
    };
})();

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _Candidate = require('../Candidate');

var Candidate = _interopRequireWildcard(_Candidate);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }