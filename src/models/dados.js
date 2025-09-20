const obrasDeArte = [
  {
    // Regra 1: ID Único para cada obra. Essencial para operações GET, PUT e DELETE.
    id: 1,
    titulo: "A Noite Estrelada",
    artista: "Vincent van Gogh",
    ano: 1889,
    // Regra 2: Categoria ou Estilo da obra. Permite criar filtros na API.
    estilo: "Pós-Impressionismo",
    // Regra 3: Status da obra. A API pode ter regras como "só mostrar disponíveis".
    status: "Em Exposição",
    // Regra 4: Destaque. Permite criar uma rota separada para obras em destaque.
    destaque: true,
    valor: 150000000,
    // Regra 5: Avaliações. A API pode receber novas avaliações e calcular uma nota média.
    avaliacoes: [
      { nota: 5, comentario: "Uma obra-prima atemporal!" },
      { nota: 4, comentario: "Incrível!" },
    ],
    // Regra 6: Dimensões. Objeto aninhado que pode ser validado pela API.
    dimensoes: {
      altura: 73.7,
      largura: 92.1,
    },
    urlImagem:
      "https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  },
  {
    id: 2,
    titulo: "Guernica",
    artista: "Pablo Picasso",
    ano: 1937,
    estilo: "Cubismo",
    status: "Em Exposição",
    destaque: true,
    valor: 200000000,
    avaliacoes: [
      { nota: 5, comentario: "Poderosa e emocionante." },
      { nota: 5, comentario: "Uma representação forte da guerra." },
    ],
    dimensoes: {
      altura: 349,
      largura: 776,
    },
    urlImagem:
      "https://upload.wikimedia.org/wikipedia/en/9/91/Guernica_%28Picasso%29.jpg",
  },
  {
    id: 3,
    titulo: "Moça com Brinco de Pérola",
    artista: "Johannes Vermeer",
    ano: 1665,
    estilo: "Barroco",
    status: "Vendido",
    destaque: false,
    valor: 80000000,
    avaliacoes: [
      { nota: 4, comentario: "Detalhes impressionantes." },
      { nota: 5, comentario: "Simplesmente deslumbrante." },
    ],
    dimensoes: {
      altura: 44.5,
      largura: 39,
    },
    urlImagem:
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg",
  },
  {
    id: 4,
    titulo: "O Grito",
    artista: "Edvard Munch",
    ano: 1893,
    estilo: "Expressionismo",
    status: "Disponível",
    destaque: true,
    valor: 119900000,
    avaliacoes: [{ nota: 5, comentario: "Icônico!" }],
    dimensoes: {
      altura: 91,
      largura: 73.5,
    },
    urlImagem:
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
  },
  {
    id: 5,
    titulo: "O Nascimento de Vênus",
    artista: "Sandro Botticelli",
    ano: 1486,
    estilo: "Renascimento",
    status: "Em Exposição",
    destaque: false,
    valor: 10000000,
    avaliacoes: [], // Regra 7: Obras sem avaliações
    dimensoes: {
      altura: 172.5,
      largura: 278.5,
    },
    urlImagem:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
  },
];

// Regra 8: Exporte o array para que possa ser importado em outro arquivo (ex: server.js)
export default { obrasDeArte };
''