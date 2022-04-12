const SectionCard = ({ children, title }) => {
  return (
    <div className="section-card">
      <h3 className="section-card__title">{title}</h3>
      <div className="section-card__content">{children}</div>
    </div>
  );
};

export default SectionCard;
