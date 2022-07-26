const Main = () => {
   return(
    <div className="main">
    <div className="center">
      <div className="menu">

        <div className="logo">
          <h3>LandingPage React</h3>
        </div>

        <div className="item__menu">
          <a href="#">Login</a>
        </div>

      </div>
    </div>

      <div className="form">
          <h2>Entre em contato</h2>
        <form>
          <div className="itens__form">
            <input placeholder="Digite seu nome: " type="text" />
            <input placeholder="Digite seu email: " type="text" />
            <input placeholder="Digite seu email" type="text" />
            <input placeholder="Digite seu nome" type="text" />
            <input type="submit" />
          </div>
        </form>
      </div>

  </div>
   )
}

export default Main