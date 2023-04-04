import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };

  //Também pode ser colocado inline como atributo do section style={{ backgroundColor: props.corSecundaria }}

  return (
    props.colaboradores.length > 0 && (
      <section className="time" style={css}>
        <input
          type="color"
          value={props.corSecundaria}
          onChange={(e) => props.mudarCor(e.target.value, props.nome)}
          className="input-cor"
        />
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => {
            return (
              <Colaborador
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                corDeFundo={props.corPrimaria}
                aoDeletar={props.aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
