function status(request, response) {
  response.status(200).json({ chave: "teste string de retorno" });
}

export default status;
