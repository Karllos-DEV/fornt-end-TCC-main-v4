import { useEffect, useState } from "react";
import axios from "axios"; // Importe a biblioteca axios
import './Home.css';
import dadoService from "../services/phonebook";
import Input from "../layout/Input";
import Cards from "../layout/Cards";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function Home() {
  const [posts, setPosts] = useState([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState(null);
  const [fotoPreview, setFotoPreview] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await dadoService.getAll();
      setPosts(response.data);
      setShowForm(false);
    } catch (error) {
      handleFetchError(error);
    }
  };

  const handleFetchError = (error) => {
    if (error.response) {
      console.error("Erro na requisição:", error.response);
    } else if (error.request) {
      console.error("Não foi possível se conectar ao servidor.");
      setError("Não foi possível se conectar ao servidor. Verifique sua conexão de rede.");
    } else {
      console.error("Erro na configuração da requisição:", error.message);
    }
  };

  const addDado = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      console.log('URL:', 'http://localhost:3001/imagens');
      console.log('FormData:', formData);

      await axios.post('http://localhost:3001/imagens', formData);

      console.log('Envio bem-sucedido!');
      // Lógica adicional, como recarregar os dados após o envio bem-sucedido.
      fetchData();
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      // Lógica para lidar com erros, como exibir uma mensagem ao usuário.
    } finally {
      setFoto(null);
      setFotoPreview(null);
    }
  };

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFoto(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFotoPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFotoPreview(null);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleDelete = async (id) => {
    try {
      await dadoService.remove(id);
      fetchData();
    } catch (error) {
      handleFetchError(error);
    }
  };

  return (
    <div className="main">
      <Header />
      <div className="container telaadd">
        <h2 className="mt-2"></h2>
        {error ? (
          <p className="alert alert-warning" role="alert">
            {error}
          </p>
        ) : (
          <>
            <button onClick={toggleForm} className="add">
              {showForm ? "Cancelar" : <i className="bi bi-plus-lg"></i>}
            </button>

            {showForm ? (
              <>
                <form onSubmit={addDado} className="subtle add1 p-2" encType="multipart/form-data">
                  <Input
                    textLabel="nome"
                    text="Nome"
                    inputType="text"
                    textPlaceholder="Digite o seu nome..."
                    handleChange={handleNomeChange}
                    isPhone={false}
                  />
                  <Input
                    textLabel="descricao"
                    text="Descrição"
                    inputType="text"
                    textPlaceholder="Digite sua Descrição"
                    handleChange={handleDescricaoChange}
                    isPhone={false}
                  />

                  <div className="form-group">
                    <label htmlFor="foto">Foto: </label>
                    <input
                      type="file"
                      id="foto"
                      className="form-control-file m-2"
                      onChange={handleFileChange}
                    />
                    {fotoPreview && (
                      <img
                        src={fotoPreview}
                        alt="Preview"
                        style={{ maxWidth: "200px" }}
                      />
                    )}
                  </div>
                  <button className="BC mt-4">Cadastrar</button>
                </form>
                <br />
              </>
            ) : (
              <div className="my-3">
                <Cards posts={posts} handleDelete={handleDelete} />
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
