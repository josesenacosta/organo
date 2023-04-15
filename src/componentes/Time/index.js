import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
  const css = {
    backgroundColor: hexToRgba(time.cor, '0.6'),
    backgroundImage: 'url(../imagens/fundo.png)',
  };

  //Também pode ser colocado inline como atributo do section style={{ backgroundColor: time.cor }}

  return (
    colaboradores.length > 0 && (
      <section className="time" style={css}>
        <input
          type="color"
          value={time.cor}
          onChange={(e) => mudarCor(e.target.value, time.id)}
          className="input-cor"
        />
        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => {
            return (
              <Colaborador
                key={colaborador.nome}
                colaborador={colaborador}
                imagem={colaborador.imagem}
                corDeFundo={time.cor}
                aoDeletar={aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
