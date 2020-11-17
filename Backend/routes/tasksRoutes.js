const express = require('express');
const { resposta } = require('../functions/resposta-json')
const router = express.Router();const { model } = require('mongoose');

router.post('/', async (req, res) => {
  const body = req.body;
  try {
    const response = await model('Task').create(body);
    return resposta(res, 200, 'OK', 'Chamado criado com sucesso!', response)
} catch (error) {
    resposta(res, 400, 'ERRO', 'Ocorreu um erro ao criar o chamado, tente novamente!', String(error))
}
});

router.get('/', async (req, res) => {
  const query = req.query;
  try {
    if (query.limite) {
        const response = await model('Task').find({}).sort({ createdAt: 'desc' }).limit(parseInt(query.limite));
        return resposta(res, 200, 'OK', 'Chamado encontrada com sucesso!', response)
    } else {
        return resposta(res, 400, 'ERRO', 'Ocorreu um erro pois o campo "limite" não foi enviado!')
    }
} catch (error) {
    resposta(res, 400, 'ERRO', 'Ocorreu um erro ao buscar a chamado, tente novamente!', String(error))
}
});

// REFAZER LOGICA DE BUSCAR CHAMADO UNICO
/* router.get('/:idChamado?', async (req, res) => {
  const params = req.params;
  try {
    if (params.idChamado) {
        const idChamado = params.idChamado
        const regex = new RegExp(`^${idChamado.charAt(0)}`, 'i')
        const response = await model('Droga').find({ idChamado: regex }).sort({ createdAt: 'desc' });
        return resposta(res, 200, 'OK', 'Busca realizada com sucesso!', response)
    } else {
        return resposta(res, 400, 'ERRO', 'Ocorreu um erro pois o campo "letra" não foi enviado!')
    }
} catch (error) {
    resposta(res, 400, 'ERRO', 'Ocorreu um erro ao buscar a droga, tente novamente!', String(error))
}
}); */

router.get('/buscar', async (req, res) => {
    const body = req.body;
    try {
      if (body.buscar) {
          const regex = new RegExp(`${String(body.buscar)}+`, 'i')
          console.log(regex)
          const response = await model('Task').find({ $or:[ {idChamado: regex}, {assunto: regex} ,{prioridade: regex} , {mensagem: regex} , {solicitante: regex}] }).sort({ createdAt: 'desc' });
          resposta(res, 200, 'OK', 'Busca realizada com sucesso!', response)
      } else {
          return resposta(res, 400, 'ERRO', 'Ocorreu um erro pois o campo "buscar" não foi enviado!')
      }
  } catch (error) {
      resposta(res, 400, 'ERRO', 'Ocorreu um erro ao buscar o chamado, tente novamente!', String(error))
  }
});

router.put('/', async (req, res) => {
  const body = req.body;
  try {
    if (body._id) {
        const response = await model('Task').findOne({ _id: body._id }).update(body);
        return resposta(res, 200, 'OK', 'Chamado atualizada com sucesso!', response)
    } else {
        return resposta(res, 400, 'ERRO', 'Ocorreu um erro pois o campo "_id" não foi enviado!')
    }
} catch (error) {
    resposta(res, 400, 'ERRO', 'Ocorreu um erro ao atualizar o chamado, tente novamente!', String(error))
}
});

router.delete('/', async (req, res) => {
    const body = req.body;
    try {
      if (body._id) {
          const response = await model('Task').remove({ _id: body._id });
          return resposta(res, 200, 'OK', 'Chamado deletado com sucesso!', response)
      } else {
          return resposta(res, 400, 'ERRO', 'Ocorreu um erro pois o campo "_id" não foi enviado!')
      }
  } catch (error) {
    resposta(res, 400, 'ERRO', 'Ocorreu um erro ao deletar o chamado, tente novamente!', String(error))
  }
});



module.exports = router;