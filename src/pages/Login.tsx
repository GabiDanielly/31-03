// pages/Login.tsx
export function Login(){
    return (
      <section className="page">
        <h2 className="page-title">Faça seu Login</h2>
        <div className="login">
            <div className="Emailform">
            <label htmlFor="Email">Email </label>
            <input type="text" id="email" />
            <br />
            <br />
            </div>
            <div className="Senhaform">
            <label htmlFor="Senha">Senha </label>
            <input type="text" id="senha"/>
            <br />
            <br />
            </div>
            <div className="button"><button>Entrar</button>
        </div>
        </div>
      </section>
    );
  }

