import { IColaborador } from '../../shared/interfaces/IColaborador';
import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';


interface TimeProps {

  colaboradores: IColaborador[];
  aoDeletar: (id: string) => void;
  mudarCor: (cor: string, id: string) => void;
  aoFavoritar: (id: string) => void;
  nome: string;
  cor: string;
  id: string;

}


const Time = ({ id, nome, cor, colaboradores, aoDeletar, mudarCor, aoFavoritar }: TimeProps) => {

  const css = {
    backgroundColor: hexToRgba(cor, '0.6'),
    backgroundImage: 'url(../imagens/fundo.png)',
  };

  //Também pode ser colocado inline como atributo do section style={{ backgroundColor: time.cor }}

  return (
    colaboradores.length > 0 ? (
      <section className="time" style={css}>
        <input
          type="color"
          value={cor}
          onChange={(e) => mudarCor(e.target.value, id)}
          className="input-cor"
        />
        <h3 style={{ borderColor: cor }}>{nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => {
            return (
              <Colaborador
                key={colaborador.nome}
                colaborador={colaborador}
                imagem={colaborador.imagem}
                corDeFundo={cor}
                aoDeletar={aoDeletar}
                aoFavoritar={aoFavoritar}
              />
            );
          })}
        </div>
      </section>
    ) : <></>
  );
};

export default Time;
