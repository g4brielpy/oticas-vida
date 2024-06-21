import style from "../produtos.module.css";
import Image from "next/image";

export function Card({ title, price, imageSrc, altText }) {
  return (
    <div className={`card shadow d-flex align-items-center p-1 ${style.card}`}>
      <Image src={imageSrc} className="card-img-top" alt={altText} />
      <div className="card-body w-100">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-center pt-4 bg-body-secondary">
          R$ {price}
        </p>
      </div>
    </div>
  );
}
