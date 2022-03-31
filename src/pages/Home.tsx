import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ilustrationImg from '../assets/images/illustration.svg';
import { auth, firebase } from '../services/firebase';
import logoImg from '../assets/images/logo.svg';
import gooogleIconImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';

export function Home() {
  const navigate = useNavigate();

  function handleCreateRoom() {
      navigate('/rooms/new')

    })

  }

  return(
    <div id="page-auth">
      <aside>
        <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <h1>{value}</h1>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={gooogleIconImg} alt="Logo do google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form action="">
            <input 
              type="text"
              placeholder="Digite o código da sala" 
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}