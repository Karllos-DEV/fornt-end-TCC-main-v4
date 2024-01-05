// phonebook.js

import axios from "axios";

const urlBase = "http://localhost:3001/api/dados";

const getAll = () => axios.get(urlBase);

const getOne = (id) => axios.get(`${urlBase}/${id}`);

const create = (dadoObject) =>
  axios.post(urlBase, dadoObject, {
    headers: {
      "Content-Type": "application/json",
    },
  });

const remove = (id) => axios.delete(`${urlBase}/${id}`);

const update = (id, dadoObject) => axios.put(`${urlBase}/${id}`, dadoObject);

const getCommentsByPostId = (postId) => axios.get(`${urlBase}/coment/${postId}`);

const dadoService = {
  getAll,
  getOne,
  create,
  remove,
  update,
  getCommentsByPostId, // Adicione esta linha para exportar a função
};

export default dadoService;
