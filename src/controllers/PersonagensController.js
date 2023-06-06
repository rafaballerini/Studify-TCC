// const personagens = require("../models/Personagem.js");

// class PersonagemController {
//     static listarLivros =  async (req, res) => {
//         try {
//             const livrosResultado = await livros.find();
//             res.status(200).json(livrosResultado)
//         } catch (err) {
//             res.status(500).json(err);
//         }
//     }

//     static listarLivroId = async (req, res) => {
//         const id = req.params.id;
//         try {
//             const livro = await livros.findById(id);
//             res.status(200).send(livro);
//         } catch (err) {
//             res.status(400).send({message: `${err.message} - Id do livro não localizado`});
//         }
//     }

//     // post no postman: body -> raw -> json
//     static cadastrarLivros = async (req, res) => {
//         let livro = new livros(req.body);
//         try {
//             const livroSave = await livro.save()
//             res.status(201).send(livroSave.toJSON());
//         } catch (err) {
//             res.status(500).send({message: `${err.message} - falha ao cadastrar livro`});
//         }
//     }

//     static atualizarLivros = async (req, res) => {
//         const id = req.params.id;
//         try {
//             await livros.findByIdAndUpdate(id, {$set: req.body})
//             res.status(200).send({message: `Livro atualizado com sucesso`});
//         } catch (err) {
//             res.status(500).send({message: `${err.message} - falha ao atualizar livro`});
//         }
//     }

//     static excluirLivro = async (req, res) => {
//         const id = req.params.id;
//         try {
//             await livros.findByIdAndDelete(id);
//             res.status(200).send({message: `Livro excluído com sucesso`});
//         } catch (err) {
//             res.status(500).send({message: `${err.message} - falha ao excluir livro`});
//         }
//     }
// }

// function buscaLivro(id){
//     return livros.findIndex(livro => livro.id == id);
// }

// module.exports = PersonagemController