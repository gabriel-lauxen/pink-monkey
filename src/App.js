import React from "react";
import { useEffect, useState, useRef } from 'react';
import BookImg from "./assets/livroVelasAromaticas.png";


function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      console.log(window.innerWidth < 768)
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const fadeInTextRef = useRef(null);
  const fadeInTextRef2 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const fadeInText = fadeInTextRef.current;
      const contentPosition = fadeInText.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;
      const fadeInText2 = fadeInTextRef2.current;
      const contentPosition2 = fadeInText2.getBoundingClientRect().top;
      const screenPosition2 = window.innerHeight;

      if (contentPosition < screenPosition) {
        fadeInText.style.opacity = 1;
      }
      if (contentPosition2 < screenPosition) {
        fadeInText2.style.opacity = 1;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className="App">
      <section className="section1">
        {isMobile?null:<img src={BookImg} alt="book"  className="book"/>}
        <div className="content">
          <h1>Já pensou em criar seu próprio aroma?</h1>
          {isMobile?<img src={BookImg} alt="book"  className="book"/> : null}
          {isMobile ? <a href="https://pay.hotmart.com/U88277179J">Comprar agora</a> : null }
          <div className="fadeintext" ref={fadeInTextRef}>
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

          </div>
          <div className="buy-wrapper fadeintext" ref={fadeInTextRef2}>
            <p>Adquira esse eBook para:</p>
            <ul>
              <li><span className="check">&#x2713;</span>Aprender</li>
              <li><span className="check">&#x2713;</span>Explorar</li>
              <li><span className="check">&#x2713;</span>Empreender</li>
            </ul>
          </div>
          <a href="https://pay.hotmart.com/U88277179J">Comprar agora</a> 
        </div>
      </section>
      <div className="bottomFlower"></div>
    </div>
  );
}

export default App;
