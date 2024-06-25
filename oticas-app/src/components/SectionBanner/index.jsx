import style from "./index.module.css";

export function SectionBanner() {
  return (
    <section
      id={"SectionBanner"}
      className={`d-flex justify-content-center align-items-center ${style.section_banner}`}
    >
      <div className={style.largura_max}>
        <div className={`d-flex flex-column gap-4 ${style.container_banner}`}>
          <p>Preço baixos em </p>
          <h1>Óculos de grau e de sol </h1>
          <p>Você só encontra aqui</p>
        </div>
      </div>
    </section>
  );
}
