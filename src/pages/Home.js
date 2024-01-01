import React, { useEffect, useState } from "react";
import './Home.css';
import Cards2 from "../layout/Cards2"; // Importando o componente Cards2
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import dadoService from "../services/phonebook";

function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(); // Carrega os dados iniciais
  }, []);

  const fetchData = () => {
    dadoService
      .getAll()
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        if (error.response) {
          // O servidor respondeu com um status de erro
          console.error("Erro na requisição:", error.response);
        } else if (error.request) {
          // A requisição foi feita, mas não houve resposta do servidor
          console.error("Não foi possível se conectar ao servidor.");
          setError(
            "Não foi possível se conectar ao servidor. Verifique sua conexão de rede."
          );
        } else {
          // Algo aconteceu na configuração da requisição que causou o erro
          console.error("Erro na configuração da requisição:", error.message);
        }
      });
  };

  return (
    <div>
      <Header />
      <div className="container telaadd">
        <h2 className="mt-2"></h2>
        {error ? (
          <p className="alert alert-warning" role="alert">
            {error}
          </p>
        ) : (
          <>
            <div className="my-3">
              
              <Cards2 posts={posts} />
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
