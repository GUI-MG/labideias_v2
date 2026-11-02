import Link from "next/link";
import "./style.scss";
import Image from "next/image";

export default function HomePage() {
  return (
    <section className="home-page">
      <header className="home-page-header">
        <nav className="home-page-header-nav">
          <div className="images">
            <Image src={"/web/public/logo.png"} alt="Laboratório de Ideias Logo" width={40} height={40}></Image>
            <Image src={"/web/public/ifrs-logo.svg"} alt="IFRS Logo" width={40} height={40}></Image>
          </div>
          <ul>
            <li>
              <Link href={""}>
                <div className="objectives">
                  <span className="material-symbols-outlined">list</span>
                  <p>Objetivos</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <div>
                  <span className="material-symbols-outlined">folder</span>
                  <p>Projetos</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <div>
                  <span className="material-symbols-outlined">people</span>
                  <p>Equipe</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <div>
                  <span className="material-symbols-outlined">co_present</span>
                  <p>Participações</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <div>
                  <span className="material-symbols-outlined">edit</span>
                  <p>Cadastrar Ideia</p>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="home-page-main">
        <section className="hero">
          <h1>Laboratório de Ideias</h1>
          <p>Aprendendo e criando inovações.</p>
        </section>
        <section className="inicio">
          <header className="header-inicio">
            <span className="material-symbols-outlined">home</span>
            <h2>Início</h2>
          </header>
          <main className="inicio-content">
            <h4>Seja muito bem-vindo!</h4>
            <p>
              O Laboratório de Ideias é um Projeto de Ensino que visa fomentar a criatividade e curiosidade de seus participantes, além de desenvolver soluções para problemas e demandas. 
              Seu foco não é apenas resolver demandas, mas também promover o aprendizado dos participantes. 
              Abaixo, você encontrará mais informações sobre o projeto, seus objetivos, participações, soluções desenvolvidas, integrantes e até um espaço para cadastrar sua ideia. 
              O Laboratório de Ideias faz parte do grupo <a href="http://dgp.cnpq.br/dgp/espelhogrupo/796428" target="_blank">Desenvolvimento Interdisciplinar de Sistemas e Inovações</a>. 
              Tem uma ideia ou demanda para compartilhar? <Link href={"./cadastroIdeia/page.tsx"}>Clique aqui</Link> e cadastre!
            </p>
          </main>
        </section>
      </main>
    </section>
  );
}
