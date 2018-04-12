'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _knex2.default)({
    client: 'mysql2',
    connection: require('../../knexfile.js')[process.env.NODE_ENV || 'development'].connection
});