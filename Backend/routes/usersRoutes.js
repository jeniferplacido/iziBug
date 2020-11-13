const express = require('express');
const router = express.Router();
const { resposta } = require('../functions/uteis');
const { model } = require('mongoose');
const sha512 = require('js-sha512');
const axios = require('axios');
const btoa = require('btoa');
const config = require('../config');

router.post('/', async (req, res) => {
  let body = req.body;
  try {
    body.senha = sha512(body.senha);
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
      return resposta(res, 400, 'ERRO', 'Ocorreu um erro pois o campo "token" não foi enviado!', error)
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
      return resposta(res, 400, 'ERRO', 'Ocorreu um erro pois o campo "_id" não foi enviado!', error)
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

// -- Email Routes

/* router.post('/email/recoveryPassword', async (req, res) => {
  const body = req.body;
  try {
    let user = await model('User').find({ email: body.email });
    user = user[0];
    if (!user) {
      resposta(res, 400, 'ERRO', 'Usuário não encontrado!')
    } else {
      let link = `${config.front.baseUrl}/recuperar-senha/${user.token}`
      let html = `<h1>Link de recuperação de senha</h1>
       <p>diawdwadojwaoidjwa</p>
       <br/>
       <a href='${link}'>${link}</a>
       <br/><br/>
       <p>Atenciosamente equipe Ambiente Medicamento.</p>`;

      axios.post(config.back.baseUrl + '/email/send', {
        toName: user.nome,
        to: user.email,
        subject: "Ambiente Medicamento - Recuperação de senha.",
        base64Html: btoa(html)
      }).then(function (response) {
        resposta(res, 200, 'OK', 'Email enviado.', String(response))
      }).catch(function (error) {
        resposta(res, 400, 'ERRO', 'Erro no envio do email', String(error))
      });
    }
  } catch (error) {
    resposta(res, 400, 'ERRO', 'Erro Inesperado', String(error))
  }
})

router.post('/email/verifyEmail', async (req, res) => {
  const body = req.body;
  try {
    let user = await model('User').find({ email: body.email });
    user = user[0];
    if (!user) {
      resposta(res, 400, 'ERRO', 'Usuário não encontrado!')
    } else {
      let link = `${config.front.baseUrl}/confirmar-email/${user.token}`
      let html = `<h1>Link de Confirmação de E-mail</h1>
         <p>Olá, Veja texto abaixo</p>
         <br/>
         <a href='${link}'>${link}</a>
         <br/><br/>
         <p>Atenciosamente equipe Ambiente Medicamento.</p>`;

      axios.post(config.back.baseUrl + '/email/send', {
        toName: user.nome,
        to: user.email,
        subject: "Ambiente Medicamento - Confirmação de e-mail.",
        base64Html: btoa(html)
      }).then(function (response) {
        resposta(res, 200, 'OK', 'Email enviado.', String(response))
      }).catch(function (error) {
        resposta(res, 400, 'ERRO', 'Erro no envio do email', String(error))
      });
    }
  } catch (error) {
    resposta(res, 400, 'ERRO', 'Erro Inesperado', String(error))
  }
})


router.post('/verifyEmail', async (req, res) => {
  const body = req.body;
  try {
    if (body.token) {
      const response = await model('User').findOne({ token: body.token }).update({emailValido: true});
      return resposta(res, 200, 'OK', 'Usuário atualizado com sucesso!', response)
    } else {
      return resposta(res, 400, 'ERRO', 'Ocorreu um erro pois o campo "token" não foi enviado!', error)
    }
  } catch (error) {
    resposta(res, 400, 'ERRO', 'Ocorreu um erro ao atualizar usuário,tente novamente!', String(error))
  }
}); */

module.exports = router;