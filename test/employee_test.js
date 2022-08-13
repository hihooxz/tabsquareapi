const assert = require('chai').expect;

const page = require('../page/employee_page.js');
const data = require('../data/data_employee.json');

const testCase = {
"describe":"As a User , I want to be able see data employee tabsquare",
 "positive" : {
    "getCompany" : "As a User, I want to be able got name company",
    "getAddress" : "As a User, I want to be able got Address company",
    "getEmployeeDetails1" : "As a User, I want to be able got employee details",
    "getEmployeeDetails2" : "As a User, I want to be able got employee details",
 }
}

describe(`@get ${testCase.describe}`, () => {
    it(`@get ${testCase.positive.getCompany}`, async() => {
        const response = await page.getEmployee();
        assert(response.status).to.equal(200);
        assert(response.body.company).to.equal(data.respone.company);
       });
    it(`@get ${testCase.positive.getAddress}`, async() => {
        const response = await page.getEmployee();
        assert(response.status).to.equal(200);
        assert(response.body.address).to.equal(data.respone.address);
       });
    it(`@get ${testCase.positive.getEmployeeDetails1}`, async() => {
        const response = await page.getEmployee();
        assert(response.status).to.equal(200);
        assert(response.body.employeeDetails[0].firstName).to.equal(data.respone.employeeDetails[0].firstName);
        assert(response.body.employeeDetails[0].lastName).to.equal(data.respone.employeeDetails[0].lastName);
        assert(response.body.employeeDetails[0].DOB).to.equal(data.respone.employeeDetails[0].DOB);
       });  
    it(`@get ${testCase.positive.getEmployeeDetails2}`, async() => {
        const response = await page.getEmployee();
        assert(response.status).to.equal(200);
        assert(response.body.employeeDetails[1].firstName).to.equal(data.respone.employeeDetails[1].firstName);
        assert(response.body.employeeDetails[1].lastName).to.equal(data.respone.employeeDetails[1].lastName);
        assert(response.body.employeeDetails[1].DOB).to.equal(data.respone.employeeDetails[1].DOB);
       });  
})