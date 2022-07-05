/* eslint-disable no-undef */
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../server');
const { Tasks } = require('../models');

chai.use(chaiHttp);

describe('Testando a rota GET', () => {

    before(() => {
        sinon.stub(Tasks,'findAll').resolves([{
            id: 1,
            task: 'cozinhar',
            created_date: '20/04/2022',
            status: 'pendente',
        }]);
    })

    after(() => {
      Tasks.findAll.restore();
    })

    it('A requisição retorna um status 200', async () => {
        const response = await chai.request(app).get('/tasks');
        expect(response).to.have.status(200)
    })

    it('A requisição retorna um Objeto com id, task, created_date, status', async () => {
        const response = await chai.request(app).get('/tasks');
        expect(response.body[0]).to.be.includes.all.keys(
            'id',
            'task',
            'created_date',
            'status'
        );
    })
})