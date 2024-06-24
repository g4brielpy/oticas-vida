import Image from "next/image";
import style from "./index.module.css";
import { CardContato, CardRedesSociais } from "./Cards";

export function Footer() {
  return (
    <footer id={style.footer}>
      <div className={style.largura_max}>
        <h2 className="text-center mb-3">Fale conosco</h2>
        <p className="text-center lh-lg">
          Não perca tempo, venha conhecer uma de nossas lojas ou entre em
          contato através de nossas redes sociais ou da central de atendimento.
        </p>

        <div
          className={`d-flex flex-wrap gap-3  mt-4 ${style.container_cards}`}
        >
          <CardContato />
          <CardRedesSociais />
        </div>
      </div>

      <div className={`text-center py-3 px-2 ${style.direitos_reservados}`}>
        &copy; 2024 Óticas Vida | Gabriel Iuri - Todos os direitos reservados
      </div>
    </footer>
  );
}
