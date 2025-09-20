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
    res.status(200).json({
      sucess: true,
      message: `Id ${id} encontrado!`,
      obra: obra,
    });
  }

  res.status(400).json({
    sucess: false,
    message: "Obra não encontrada",
  });
};

export { getAllObras, getObrasById };
