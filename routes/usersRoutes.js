const express = require('express');
const router = express.Router();
const { resposta } = require('../functions/resposta-json');
const { model } = require('mongoose');
const sha512 = require('js-sha512');



router.post('/', async (req, res) => {
  let body = req.body;
  console.log(body)
  try {
    body.password = sha512(body.password);
    const response = await model('User').create(body);
    return resposta(res, 200, 'OK', 'Usuário criado com sucesso!', response)
  } catch (error) {
    resposta(res, 400, 'ERRO', 'Ocorreu um erro ao criar usuário,tente novamente!', String(error))
  }
});

router.get('/', async (req, res) => {
  const query = req.query
  try {
    if (query.limite) {
      const response = await model('User').find({}).sort({ createdAt: 'desc' }).limit(parseInt(query.limite));
      return resposta(res, 200, 'OK', 'Usuário encontrado com sucesso!', response)
    } else {
      return resposta(res, 400, 'ERRO', 'Ocorreu um erro pois o campo "limite" não foi enviado!')
    }
  } catch (error) {
    resposta(res, 400, 'ERRO', 'Ocorreu um erro ao buscar usuário,tente novamente!', String(error))
  }
});

router.put('/', async (req, res) => {
  const body = req.body;
  try {
    if (body.token) {
      if (body.senha) {
        body.senha = sha512(body.senha)
      }
      const response = await model('User').findOne({ token: body.token }).update(body);
      return resposta(res, 200, 'OK', 'Usuário atualizado com sucesso!', response)
    } else {
      return resposta(res, 400, 'ERRO', 'Ocorreu um erro pois o campo "token" não foi enviado!')
    }
  } catch (error) {
    resposta(res, 400, 'ERRO', 'Ocorreu um erro ao atualizar usuário,tente novamente!', String(error))
  }
});

router.delete('/', async (req, res) => {
  const body = req.body;
  console.log(body)
  try {
    if (body._id) {
      const response = await model('User').deleteOne({ _id: body._id });
      return resposta(res, 200, 'OK', 'Usuário deletado com sucesso!', response)
    } else {
      return resposta(res, 400, 'ERRO', 'Ocorreu um erro pois o campo "_id" não foi enviado!')
    }
  } catch (error) {
    resposta(res, 400, 'ERRO', 'Ocorreu um erro ao deletar o usuário, tente novamente!', String(error))
  }
});

// -- Auth Routes

router.get('/auth', async (req, res) => {
  const body = req.body;
  try {
    let user = await model('User').find({ email: body.email }).select('+senha');
    user = user[0];
    if (!user) {
      resposta(res, 400, 'ERRO', 'Usuário não encontrado!')
    } else
      if (user.senha !== sha512(body.senha)) {
        resposta(res, 400, 'ERRO', 'Senha inválida.')
      } else {
        resposta(res, 200, 'OK', 'Senha correta, login efetuado.', user.token)
      }
  } catch (error) {
    resposta(res, 400, 'ERRO', 'Erro Inesperado', String(error))
  }
})


module.exports = router;