const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.BASE_URL);

const getEmployee = () => api.get('/employee/details')
 .set('Content-Type', 'application/json')

module.exports = {
    getEmployee,
}