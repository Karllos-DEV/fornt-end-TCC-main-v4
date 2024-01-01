// ContactPage.js
import React from 'react';
import './ContactPage.css'; // Estilo opcional
import Header from '../layout/Header';
import Footer from '../layout/Footer';

function ContactPage() {
  return (
    <div className="contact-page-container">
      <div className="about-us-container">
        <Header/>
        <h2>Sobre Nós - MaxServices</h2>
        <p>
          Bem-vindo à MaxServices, sua parceira confiável para serviços de alta qualidade. Estamos dedicados a fornecer soluções excepcionais para atender às necessidades de nossos clientes. Com anos de experiência, a MaxServices se destaca na prestação de serviços que superam as expectativas.
        </p>
        <img
          src="https://imgs.search.brave.com/r5VEKsUb7WabL5n9NBc9TIE3knRMzvIieAQOguSjq_0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTc2NDMw/OS84NjUzL2kvNjAw/L2RlcG9zaXRwaG90/b3NfODY1MzY3NjQt/c3RvY2stcGhvdG8t/bW9kZXJuLWJ1c2lu/ZXNzLWNvbXBhbnkt/ZGlzdHJpY3QuanBn" // Substitua com o URL da sua imagem
          alt="MaxServices"
        />
      </div>

      <div className="contact-info-container">
        <h3>Informações de Contato</h3>
        <p>
          <strong>WhatsApp:</strong> (11) 98765-4321
        </p>
        <p>
          <strong>Instagram:</strong> @maxservices_insta
        </p>
        <p>
          <strong>Telefone:</strong> (11) 1234-5678
        </p>
        <p>
          <strong>E-mail:</strong> contato@maxservices.com
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
