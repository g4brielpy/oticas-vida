import style from "../produtos.module.css";
import { Card } from "./Card";

import Img01 from "@/../public/icon-oculos/oculos01.png";
import Img02 from "@/../public/icon-oculos/oculos02.png";
import Img03 from "@/../public/icon-oculos/oculos03.png";
import Img04 from "@/../public/icon-oculos/oculos04.png";

export function Produtos() {
  return (
    <div
      id={"container"}
      className="
        d-flex flex-column align-items-center gap-3
         mt-4 mb-5 w-100
      "
    >
      <div className="d-flex w-100 flex-wrap gap-3 ">
        <div className="flex-grow-1 ">
          <Card
            title="Óculos de Grau"
            price="500,00"
            imageSrc={Img01}
            altText="Oculos de grau"
          />
        </div>
        <div className="flex-grow-1">
          <Card
            title="Óculos de Transition"
            price="750,00"
            imageSrc={Img02}
            altText="oculos de transition"
          />
        </div>
      </div>
      <div className="d-flex w-100 flex-wrap gap-3">
        <div className="flex-grow-1">
          <Card
            title="Óculos de Sol"
            price="700,00"
            imageSrc={Img03}
            altText="oculos de sol"
          />
        </div>
        <div className="flex-grow-1">
          <Card
            title="Óculos de Infantil"
            price="500,00"
            imageSrc={Img04}
            altText="oculos de infantil"
          />
        </div>
      </div>
    </div>
  );
}
