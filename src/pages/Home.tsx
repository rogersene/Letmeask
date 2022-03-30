import ilustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import gooogleIconImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss';

export function Home() {
  return(
    <div id="page-auth">
      <aside>
        <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button>
            <img src={gooogleIconImg} alt="Logo do google" />
            Crie sua sala com o Google
          </button>
          <div>Ou entre em uma sala</div>
          <form action="">
            <input 
              type="text"
              placeholder="Digite o código da sala" 
            />
            <button type="submit">
              Entrar na sala
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}