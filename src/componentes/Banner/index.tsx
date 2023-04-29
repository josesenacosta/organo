import './Banner.css';
import React from 'react';

interface BannerProps {
  enderecoImagem: string;
  textoAlternativo?: string;
}

const Banner = ({ enderecoImagem, textoAlternativo }: BannerProps) => {
  return (
    //JSX
    <header className="banner">
      <img
        /* src="/imagens/banner.png"
        alt="O banner principal da página do Organo" */
        src={enderecoImagem}
        alt={textoAlternativo}
      />
    </header>
  );
};

export default Banner;
