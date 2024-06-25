import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logo.png";
import style from "./index.module.css";

export function Header() {
  return (
    <header
      id={style.cabecalho}
      className="
        mx-auto 
        py-2 px-3 
        d-flex 
          flex-wrap justify-content-between align-items-center"
    >
      <Image src={Logo} alt="Logo óticas vida" className={style.img_log} />
      <nav className={`${style.nav_header} d-flex gap-3`}>
        <Link
          href="#SectionProduto"
          className="
             link-secondary link-offset-2 link-underline-opacity-10 link-underline-opacity-50-hover
            "
        >
          PRODUTO
        </Link>
        <Link
          href="#SectionSobre"
          className="
          link-secondary link-offset-2 link-underline-opacity-10 
          link-underline-opacity-50-hover
          "
        >
          SOBRE
        </Link>
        <Link
          href="#footer"
          className="
          link-secondary link-offset-2 link-underline-opacity-10 
          link-underline-opacity-50-hover
          "
        >
          CONTATO
        </Link>
      </nav>
    </header>
  );
}
