import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import "./CareerCenter.scss";

//img
import careerLogo from "./img/careerLogo.jpg";
import trening1 from "./img/trening1.jpg";
import trening2 from "./img/trening2.jpg";
import trening3 from "./img/trening3.jpg";
import trening4 from "./img/trening4.jpg";
import trening5 from "./img/trening5.jpg";
import trening6 from "./img/trening6.jpg";
import trening7 from "./img/trening7.jpg";
import trening8 from "./img/trening8.jpg";
import trening9 from "./img/trening9.jpg";
import trening10 from "./img/trening10.jpg";
import trening11 from "./img/trening11.jpg";

export default function CareerCenter() {
  const [activeStep, setActiveStep] = useState(0);

  const imagesTrening = [trening1, trening2, trening3, trening4,
    trening5, trening6, trening7, trening8,
    trening9, trening10, trening11
  ];

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % imagesTrening.length);
  };

  const handleBack = () => {
    setActiveStep((prev) =>
      prev === 0 ? imagesTrening.length - 1 : prev - 1
    );
  };

  return (
    <div>
      <Header />
      <div className="career-center container">
        {/* Заголовок і логотип */}
        <div className="career-hero">
          <img
            src={careerLogo}
            alt="Центр кар'єри"
            className="career-logo"
          />
          <h1>Центр кар'єри</h1>
        </div>

        {/* Кнопки-навігація */}
        <div className="career-nav">
          <button>Нормативно-правові документи</button>
          <button>Співпраця з роботодавцями</button>
          <button>Успішна кар'єра</button>
        </div>

        {/* Новини */}
        <section className="career-news">
          <h2>Новини</h2>
          <div className="news-card">
            {/* Слайдер */}
            <Box className="news-slider" position="relative">
              <img
                src={imagesTrening[activeStep]}
                alt={`Слайд ${activeStep + 1}`}
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              {imagesTrening.length > 1 && (
                <>
                  <Button
                    onClick={handleBack}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "10px",
                      transform: "translateY(-50%)",
                      backgroundColor: "rgba(0,0,0,0.6)",
                      color: "#fff",
                      minWidth: "40px",
                      minHeight: "40px",
                      borderRadius: "50%",
                      padding: 0,
                    }}
                  >
                    <KeyboardArrowLeft fontSize="large" />
                  </Button>

                  <Button
                    onClick={handleNext}
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                      backgroundColor: "rgba(0,0,0,0.6)",
                      color: "#fff",
                      minWidth: "40px",
                      minHeight: "40px",
                      borderRadius: "50%",
                      padding: 0,
                    }}
                  >
                    <KeyboardArrowRight fontSize="large" />
                  </Button>
                </>
              )}
            </Box>
            {/* <Box className="news-slider" position="relative">
              <img
                src={images[activeStep]}
                alt={`Слайд ${activeStep + 1}`}
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              {images.length > 1 && (
                <>
                  <Button
                    onClick={handleBack}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "10px",
                      transform: "translateY(-50%)",
                      backgroundColor: "rgba(0,0,0,0.6)",
                      color: "#fff",
                      minWidth: "40px",
                      minHeight: "40px",
                      borderRadius: "50%",
                      padding: 0,
                    }}
                  >
                    <KeyboardArrowLeft fontSize="large" />
                  </Button>

                  <Button
                    onClick={handleNext}
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                      backgroundColor: "rgba(0,0,0,0.6)",
                      color: "#fff",
                      minWidth: "40px",
                      minHeight: "40px",
                      borderRadius: "50%",
                      padding: 0,
                    }}
                  >
                    <KeyboardArrowRight fontSize="large" />
                  </Button>
                </>
              )}
            </Box> */}

            {/* Текст */}
            <div className="news-content">
              <h3>Тренінг-практикум</h3>
              <p>
                ☝ Розуміємо, що в сучасних умовах трансформації системи
                професійної освіти особливої актуальності набуває діяльність
                Центрів кар’єри як важливого інструменту взаємодії між
                освітою, ринком праці та суспільством.  
                <br />
                💙💛 Дякуємо Збройним Силам України за можливість
                розвиватися!
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
