const request = require('supertest')
const faker = require('faker')

const app = require('../../src/app')
const truncate = require('../utils/truncate')

describe('User', () => {
  beforeAll(async () => {
    await truncate()
  })

  afterAll(async () => {
    await truncate()
  })

  it('should create a User without problem', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: faker.name.findName(),
        email: 'rodolfo_fero@hotmail.com',
        password: faker.internet.password(),
        rg: '123456',
        cpf: '654321'
      })

    console.log(response.body)
    expect(response.status).toBe(200)
  })

  it('should not create a User with RG\'s problem', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        rg: '123456',
        cpf: faker.random.number()
      })

    console.log(response.body)
    expect(response.body.message).toBe('User with this RG already exists')
  })

  it('should not create a User with email\'s problem', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: faker.name.findName(),
        email: 'rodolfo_fero@hotmail.com',
        password: faker.internet.password(),
        rg: faker.random.number(),
        cpf: faker.random.number()
      })

    console.log(response.body)
    expect(response.body.message).toBe('User with this EMAIL already exists')
  })

  it('should not create a User with CPF\'s problem', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        rg: faker.random.number(),
        cpf: '654321'
      })

    console.log(response.body)
    expect(response.body.message).toBe('User with this CPF already exists')
  })
})

