import Image from "next/image";
import style from "./index.module.css";

import imgAtendimento from "@/../public/atendimento.png";
import imgLoja from "@/../public/loja.png";

export function SectionSobre() {
  return (
    <section id={"SectionSobre"} className={style.section_container}>
      <div className={style.largura_max}>
        <h3 className="text-center h3">Quem somos nós? </h3>
        <p className="text-center lh-lg">
          Fundada em 2001, em <em>Nova Iguaçu - Rio de Janeiro</em>, a Óticas
          Vida iniciou suas atividades focada no atendimento ao público de renda
          mais baixa, sempre com o objetivo de proporcionar ao cliente bom
          atendimento, qualidade e preço baixo.
        </p>
        <div className={`shadow mt-4 ${style.container_box}`}>
          <div className={`d-flex flex-wrap-reverse ${style.box}`}>
            <div className="border rounded">
              <Image
                src={imgLoja}
                alt="Image Loja vida"
                className="img-fluid h-100 object-fit-cover"
              />
            </div>
            <div className="border px-3 d-flex flex-column align-items-center justify-content-center gap-3">
              <h4 className="h1 text-center">Nossas Filiais</h4>
              <p className="text-center">
                Hoje temos mais de 20 filiais pelo Brasil e na América
              </p>
            </div>
          </div>
          <div className={`border d-flex flex-wrap ${style.box}`}>
            <div className="px-3 d-flex flex-column align-items-center justify-content-center gap-3">
              <h4 className="h1 text-center">Atendimento Flexível</h4>
              <p className="text-center">
                Nossa equipe possue treinamento para te atender
              </p>
            </div>
            <div className="border">
              <Image
                src={imgAtendimento}
                alt="Image Atendimento"
                className="img-fluid h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
