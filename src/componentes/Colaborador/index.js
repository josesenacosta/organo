import './Colaborador.css';
import { AiFillCloseCircle } from 'react-icons/ai';

const Colaborador = ({ nome, imagem, cargo, corDeFundo, aoDeletar }) => {
  /* <<<---- Desestruturacao. ao inves de usar o props, utilizo diretamente os nomes das minhas propriedadeds do elemento <Colaborador/> */
  return (
    <div className="colaborador">
      <AiFillCloseCircle size={25} className="deletar" onClick={aoDeletar} />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
