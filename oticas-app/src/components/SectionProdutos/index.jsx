import { Produtos } from "./Produtos/Produtos.jsx";
import { ListaBeneficios } from "./Beneficios/ListaBeneficios.jsx";
import style from "./produtos.module.css";

export function SectionProduto() {
  return (
    <section id={"SectionProduto"} className={style.section_container}>
      <h2 className="text-center mb-3 text-uppercase">Nossos produtos</h2>
      <p className="text-center lh-lg">
        Trabalhamos com óculos de grau, óculos de sol, lentes transition nos
        modelos masculino, feminino e infantil. <br />
        Todos os nossos preços são acessíveis e contam com a melhor qualidade do
        mercado.
      </p>
      <Produtos />
      <h3 className="text-center h3">Todos os nossos produtos incluem: </h3>
      <ListaBeneficios />
    </section>
  );
}
