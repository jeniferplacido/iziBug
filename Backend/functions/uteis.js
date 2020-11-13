//  ONLY COPYS

 function resposta(res, statusCode, status, statusMotivo, resposta = {}) {
    res.status(statusCode);
    res.json({
        'statusCode': "" + statusCode,
        'status': status,
        'statusMotivo': statusMotivo,
        'resposta': resposta
    });
    return;
}

module.exports = {resposta};
