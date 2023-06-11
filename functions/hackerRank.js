const axios = require('axios');

const API_KEY = 'f6ec5142b01b00908c36e78f95178b95ba754a8208b24f5227a992bf8eebd782';

async function buscarDesafios() {
  try {
    const response = await axios.get('https://www.hackerrank.com/api/rest/contests/master/challenges', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }
    });

    // Processar a resposta e exibir os desafios
    const desafios = response.data.models;
    desafios.forEach(desafio => {
      console.log(`Título: ${desafio.name}`);
      console.log(`Slug: ${desafio.slug}`);
      console.log('-------------------');
    });
  } catch (error) {
    console.error(error);
  }
}

// Chamada da função para buscar desafios
buscarDesafios();
