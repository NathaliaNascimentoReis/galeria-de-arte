import dados from "../models/dados.js";
const { obrasDeArte } = dados;

const getAllObras = (req, res) => {
  res.status(200).json({
    total: obrasDeArte.length,
    obras: obrasDeArte,
  });
};

export { getAllObras };
