import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [erro, setErro] = useState(null);

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#D9F7E9',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#E8F8FF',
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#F0F8E2',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE9F5',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF',
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  function deletarColaborador(id) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id),
    );
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      }),
    );
  }

  function cadastrarTime(novoTime) {
    if (times.some((time) => time.nome === novoTime.nome)) {
      setErro(`Time ${novoTime.nome} já existe.`);
    } else {
      setTimes([...times, { ...novoTime }]);
      setErro(null);
    }
  }

  function resolverFavorito(id) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      }),
    );
  }

  return (
    <div className="App">
      <Banner
        enderecoImagem="/imagens/banner.png"
        textoAlternativo="O banner principal da página do Organo"
      />
      <Formulario
        erro={erro}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
        times={times.map((time) => time.nome)}
        cadastrarTime={cadastrarTime}
      />
      {times.map((time) => (
        <Time
          mudarCor={mudarCorDoTime}
          key={time.id}
          id={time.id}
          nome={time.nome}
          cor={time.cor}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome,
          )}
          aoDeletar={deletarColaborador}
          aoFavoritar={resolverFavorito}
        />
      ))}
    </div>
  );
}

export default App;
