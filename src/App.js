import React from "react";
import { useEffect, useState } from 'react';
import BookImg from "./assets/livroVelasAromaticas.png";


function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
      console.log(window.innerWidth < 600)
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <div className="App">
      <section className="section1">
        {isMobile?null:<img src={BookImg} alt="book"  className="book"/>}
        <div className="content">
          <h1>Já pensou em criar seu próprio aroma?</h1>
          {isMobile?<img src={BookImg} alt="book"  className="book"/> : null}
          {isMobile ? <a href="https://www.instagram.com/velaspinkmonkey/">Comprar agora</a> : null }
          <p>
            Este não é apenas um guia, é minha maneira de compartilhar todo o
            conhecimento que acumulei.
          </p>
          <p>
            Um convite para você mergulhar no universo das velas aromáticas.
            Vamos descomplicar o processo juntos, falando sobre ceras,
            essências, pavios e tudo que você precisa saber para começar. Estou
            aqui para garantir que você possa lidar com todos os desafios com
            mais confiança. Ao concluir a leitura, quero que você se sinta
            pronto para criar suas próprias velas aromáticas, e tornar a sua
            realidade, ou a dos seus futuros clientes, muito mais cheirosa!
          </p>
          <p>Adquira esse eBook para:</p>
          <div className="buy-wrapper">
            <ul>
              <li>Aprender</li>
              <li>Explorar</li>
              <li>Empreender</li>
            </ul>
            {isMobile ? null : <a href="https://www.instagram.com/velaspinkmonkey/">Comprar agora</a> }
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
