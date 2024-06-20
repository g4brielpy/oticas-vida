import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logo.png";
import style from "./index.module.css";

export function Header() {
  return (
    <header id={style.cabecalho}>
      <Image src={Logo} alt="Logo óticas vida" className={style.img_log} />
      <nav className={style.nav_header}>
        <Link href="#">PRODUTO</Link>
        <Link href="#">SOBRE</Link>
        <Link href="#">CONTATO</Link>
      </nav>
    </header>
  );
}
