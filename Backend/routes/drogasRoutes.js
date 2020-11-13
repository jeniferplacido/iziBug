const express = require('express');
const { resposta } = require('../functions/uteis')
const router = express.Router();const { model } = require('mongoose');

router.post('/criar', async (req, res) => {
  const body = req.body;
  try {
    const response = await model('Droga').create(body);
    return resposta(res, 200, 'OK', 'Droga criado com sucesso!', response)
} catch (error) {
    resposta(res, 400, 'ERRO', 'Ocorreu um erro ao criar a droga, tente novamente!', String(error))
}
});

router.post('/buscarTodos', async (req, res) => {
  const query = req.query;
  try {
    if (query.limite) {
        const response = await model('Droga').find({}).sort({ createdAt: 'desc' }).limit(parseInt(query.limite));
        return resposta(res, 200, 'OK', 'Droga encontrada com sucesso!', response)
    } else {
        return resposta(res, 400, 'ERRO', 'Ocorreu um erro pois o campo "limite" não foi enviado!')
    }
} catch (error) {
    resposta(res, 400, 'ERRO', 'Ocorreu um erro ao buscar a droga, tente novamente!', String(error))
}
});

router.post('/buscar/AZ/:letra?', async (req, res) => {
  const params = req.params;
  try {
    if (params.letra) {
        const letra = params.letra
        const regex = new RegExp(`^${letra.charAt(0)}`, 'i')
        const response = await model('Droga').find({ nome: regex }).sort({ createdAt: 'desc' });
        return resposta(res, 200, 'OK', 'Busca realizada com sucesso!', response)
    } else {
        return resposta(res, 400, 'ERRO', 'Ocorreu um erro pois o campo "letra" não foi enviado!')
    }
} catch (error) {
    resposta(res, 400, 'ERRO', 'Ocorreu um erro ao buscar a droga, tente novamente!', String(error))
}
});
router.post('/buscar', async (req, res) => {
    const body = req.body;
    try {
      if (body.buscar) {
          const regex = new RegExp(`${String(body.buscar)}+`, 'i')
          console.log(regex)
          const response = await model('Droga').find({ $or:[ {nome: regex}, {descricao: regex} , {nomeGenerico: regex} , {nomeAlternativo: regex}, {indicacoes: regex} , {contraIndicacoes: regex}, {gravidez: regex}, {riscosBeneficios: regex}, {alertas: regex}, {acoes: regex} , {ram: regex}, {maisInfos: regex}] }).sort({ createdAt: 'desc' });
          resposta(res, 200, 'OK', 'Busca realizada com sucesso!', response)
      } else {
          return resposta(res, 400, 'ERRO', 'Ocorreu um erro pois o campo "buscar" não foi enviado!')
      }
  } catch (error) {
      resposta(res, 400, 'ERRO', 'Ocorreu um erro ao buscar a droga, tente novamente!', String(error))
  }
});

router.post('/editar', async (req, res) => {
  const body = req.body;
  try {
    if (body._id) {
        const response = await model('Droga').findOne({ _id: body._id }).update(body);
        return resposta(res, 200, 'OK', 'Droga atualizada com sucesso!', response)
    } else {
        return resposta(res, 400, 'ERRO', 'Ocorreu um erro pois o campo "_id" não foi enviado!')
    }
} catch (error) {
    resposta(res, 400, 'ERRO', 'Ocorreu um erro ao atualizar a droga, tente novamente!', String(error))
}
});

router.post('/deletar', async (req, res) => {
    const body = req.body;
    try {
      if (body._id) {
          const response = await model('Droga').remove({ _id: body._id });
          return resposta(res, 200, 'OK', 'Droga deletada com sucesso!', response)
      } else {
          return resposta(res, 400, 'ERRO', 'Ocorreu um erro pois o campo "_id" não foi enviado!')
      }
  } catch (error) {
    resposta(res, 400, 'ERRO', 'Ocorreu um erro ao deletar a droga, tente novamente!', String(error))
  }
});



module.exports = router;