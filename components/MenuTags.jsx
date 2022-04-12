import Link from "next/link";

const MenuTags = ({}) => {
  return (
    <section className="menu-tags">
      <h4>Etiquetas</h4>
      <ul>
        <li>
          <div className="menu-tags__icon"></div>
          <Link href="/blog?tag=metodología">Metodología</Link>
        </li>
        <li>
          <div className="menu-tags__icon"></div>
          <Link href="/blog?tag=estadística">Estadística</Link>
        </li>
        <li>
          <div className="menu-tags__icon"></div>
          <Link href="/blog?tag=ciencia+de+datos">Análisis de datos</Link>
        </li>
      </ul>
    </section>
  );
};

export default MenuTags;
