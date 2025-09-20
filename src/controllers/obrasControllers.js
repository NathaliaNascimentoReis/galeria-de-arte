import dados from "../models/dados.js";
const { obrasDeArte } = dados;

const getAllObras = (req, res) => {
  res.status(200).json({
    total: obrasDeArte.length,
    obras: obrasDeArte,
  });
};

const getObrasById = (req, res) => {
  const id = parseInt(req.params.id);
  const obra = obrasDeArte.find((o) => o.id === id);

  if (obra) {
    return res.status(200).json({
      success: true,
      message: `Id ${id} encontrado!`,
      obra: obra,
    });
  }

  return res.status(400).json({
    success: false,
    message: "Obra não encontrada",
  });
};

const createObra = (req, res) => {
  const {
    titulo,
    artista,
    ano,
    estilo,
    status,
    destaque,
    valor,
    dimensoes,
    urlImagem,
  } = req.body;

  if (
    !titulo ||
    !estilo ||
    !status ||
    destaque === null ||
    destaque === undefined ||
    !valor ||
    !dimensoes ||
    !urlImagem
  ) {
    return res.status(400).json({
      success: false,
      message:
        "Os campos a seguir são obrigatórios: título, estilo, status, destaque, valor, dimensoes, url da imagem",
    });
  }

  const statusFormatado = status.toLowerCase();

  const statusLista = [
    "em exposição",
    "fora de exposição",
    "vendido",
    "disponível",
  ];

  if (!statusLista.includes(statusFormatado)) {
    return res.status(400).json({
      success: false,
      message:
        "O campo 'status' deve ser um dos seguintes valores: " +
        statusLista.join(", ") +
        "!",
    });
  }

  const valorNumerico = Number(valor);

  if (isNaN(valorNumerico) || valorNumerico <= 0) {
    return res.status(400).json({
      success: false,
      message:
        "O campo 'valor' deve ser um número válido (diferente de 0) e positivo.",
    });
  }

  const obraExistente = obrasDeArte.some(
    (obra) => obra.titulo === titulo && obra.artista === artista
  );

  if (obraExistente) {
    return res.status(409).json({
      success: false,
      message:
        "Esta obra de arte já existe na galeria. Tente um título ou artista diferente.",
    });
  }

  const verificaId =
    obrasDeArte.length > 0 ? obrasDeArte[obrasDeArte.length - 1].id + 1 : 1;

  const novaObra = {
    id: verificaId,
    titulo: titulo.toLowerCase(),
    artista: artista.toLowerCase(),
    ano,
    estilo: estilo.toLowerCase(),
    status: status.toLowerCase(),
    destaque,
    valor,
    dimensoes,
    urlImagem: urlImagem.toLowerCase(),
  };

  obrasDeArte.push(novaObra);
  res.status(201).json({
    success: true,
    message: "Obra adicionada ao acervo com sucesso!",
    obra: novaObra,
  });
};

export { getAllObras, getObrasById, createObra };
