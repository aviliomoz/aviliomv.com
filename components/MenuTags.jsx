import { useSelector, useDispatch } from "react-redux";
import { setActiveTag } from "../redux/slices/tagsSlice";

const MenuTags = () => {
  const dispatch = useDispatch();

  const { tags, activeTag } = useSelector((state) => state.tags);

  const handleSetActiveTag = (tag) => {
    if (activeTag === tag) return dispatch(setActiveTag(""));

    return dispatch(setActiveTag(tag));
  };

  return (
    <section className="menu-tags">
      <h4>Etiquetas</h4>
      <ul>
        <li>
          <div className="menu-tags__icon">{tags.methodology}</div>
          <span
            className={activeTag === "Metodología" ? "activeTag" : ""}
            onClick={() => handleSetActiveTag("Metodología")}
          >
            Metodología
          </span>
        </li>
        <li>
          <div className="menu-tags__icon">{tags.statistics}</div>
          <span
            className={activeTag === "Estadística" ? "activeTag" : ""}
            onClick={() => handleSetActiveTag("Estadística")}
          >
            Estadística
          </span>
        </li>
        <li>
          <div className="menu-tags__icon">{tags.data}</div>
          <span
            className={activeTag === "Análisis de datos" ? "activeTag" : ""}
            onClick={() => handleSetActiveTag("Análisis de datos")}
          >
            Análisis de datos
          </span>
        </li>
      </ul>
    </section>
  );
};

export default MenuTags;
