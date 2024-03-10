import { Fragment } from "react";
import "./App.css";
import Logo from "./images/Logo.svg";
import HeaderImage from "./images/header-main-img.png";
import { default as LogoComponent } from "./components/Logo";
import Image from "./components/Image";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Typography from "./components/Typography";

const App = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <nav className="header__nav">
            {/* <a href="#!" className="logo">
              <img src={Logo} alt="error" />
            </a> */}

            <LogoComponent className={"logo"} logo={Logo} />

            <Navbar />

            <div className="header__nav-button">
              <Button type={"button"} className={`header__currentcy`}>
                $
              </Button>

              {/* <button type="button" className="header__currentcy">$</button> */}
            </div>
          </nav>

          <main className="header__main">
            <div className="header__main-content">
              {/* <span className="header__main-badge">
                Новое меню
              </span> */}

              <Typography as="span" className="header__main-badge" >
                Новое меню
              </Typography>

              {/* <h1 className="title-1">
                бургер чеддер
              </h1> */}

              <Typography as="h1" className={"title-1"}>
                бургер чеддер
              </Typography>

              {/* <p className="header__content-text">
                Мы обновили наше меню, спешите попробовать сезонные новинки и насладиться отличным вкусом наших бургеров. Готовим для вас лучшие бургеры в городе из отборной мраморной говядины.
              </p> */}

              <Typography as="p" className={"header__content-text"}>
                Мы обновили наше меню, спешите попробовать сезонные новинки и насладиться отличным вкусом наших бургеров. Готовим для вас лучшие бургеры в городе из отборной мраморной говядины.
              </Typography>

              <Button type={"button"} className="header__main-content__button">
                Смотреть меню
              </Button>

              {/* <button className="header__main-content__button">
                Смотреть меню
              </button> */}
            </div>

            {/* <div className="header__main-img">
              <img src={HeaderImage} alt="error" />
            </div> */}

            <Image
              className={`header__main-img`}
              src={HeaderImage}
              alt={`Chedder burger`}
            />
          </main>
        </div>
      </header>


    </Fragment>
  )
}

export default App;