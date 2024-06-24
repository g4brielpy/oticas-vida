import style from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

import imgEmail from "@/../public/icon-contatos/email.png";
import imgFaceBook from "@/../public/icon-contatos/fb.png";
import imgInstagram from "@/../public/icon-contatos/ig.png";

import imgLocal from "@/../public/icon-contatos/local.png";
import imgTel from "@/../public/icon-contatos/telefone.png";
import imgX from "@/../public/icon-contatos/tt.png";

export function CardContato() {
  return (
    <div className={`card border shadow ${style.container_card}`}>
      <div className="card-body">
        <h3 class="card-title h4 mb-4">Nossos Contatos</h3>
        <div className="box_content d-flex flex-column gap-3">
          <div className="d-flex align-items-center gap-2">
            <Image src={imgLocal} alt="Icone Local" />
            <p className="card-text">Nova Iguaçu, RJ</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <Image src={imgTel} alt="Icone Telefone" />
            <p className="card-text">(31) 9999-9999</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <Image src={imgEmail} alt="Icone Email" />
            <p className="card-text">contato@oticavida.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardRedesSociais() {
  return (
    <div className={`card border shadow ${style.container_card}`}>
      <div className="card-body">
        <h3 class="card-title h4 mb-4">Nossos Redes Sociais</h3>
        <div className="box_content d-flex flex-column gap-3">
          <div className="d-flex align-items-center gap-2">
            <Image src={imgFaceBook} alt="Icone Facebook" />
            <Link
              href={"#"}
              className="
                link-light 
                link-offset-2 
                link-underline-opacity-25 
                link-underline-opacity-100-hover 
                card-text"
            >
              /OticaVida
            </Link>
          </div>
          <div className="d-flex align-items-center gap-2">
            <Image src={imgInstagram} alt="Icone Instagram" />
            <Link
              href={"#"}
              className="
                link-light 
                link-offset-2 
                link-underline-opacity-25 
                link-underline-opacity-100-hover 
                card-text"
            >
              @oticavidarj
            </Link>
          </div>
          <div className="d-flex align-items-center gap-2">
            <Image src={imgX} alt="Icone X" />
            <Link
              href={"#"}
              className="
                link-light 
                link-offset-2 
                link-underline-opacity-25 
                link-underline-opacity-100-hover 
                card-text"
            >
              @oticavidarj
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
