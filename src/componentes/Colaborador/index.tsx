import { IColaborador } from '../../shared/interfaces/IColaborador';
import './Colaborador.css';
import { AiFillCloseCircle, AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface ColaboradorProps {
  colaborador: IColaborador;
  imagem: string;
  corDeFundo: string;
  aoDeletar: (id: string) => void;
  aoFavoritar: (id: string) => void;
}

const Colaborador = ({
  colaborador,
  imagem,
  corDeFundo,
  aoDeletar,
  aoFavoritar,
}: ColaboradorProps) => {
  /* <<<---- Desestruturacao. ao inves de usar o props, utilizo diretamente os nomes das minhas propriedadeds do elemento <Colaborador/> */

  function favoritar() {
    aoFavoritar(colaborador.id);
  }

  const propsFavorito = {
    size: 25,
    onClick: favoritar,
  };

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito ? (
            <AiFillStar {...propsFavorito} color="f1af09" />
          ) : (
            <AiOutlineStar {...propsFavorito} color="f1af09" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
