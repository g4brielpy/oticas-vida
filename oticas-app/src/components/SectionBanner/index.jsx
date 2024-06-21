import Image from "next/image";
import Banner from "@/../public/capa.png";
import style from "./index.module.css";

export function SectionBanner() {
  return (
    <section id={style.container_banner}>
      <div className={style.largura_max}>
        <div className={style.container_banner}>
          <p>Preço baixos em </p>
          <h1>Óculos de grau e de sol </h1>
          <p>Você só encontra aqui</p>
        </div>
      </div>
    </section>
  );
}
