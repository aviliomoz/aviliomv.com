export const countTags = (postsData) => {
  let tags = {
    methodology: 0,
    statistics: 0,
    data: 0,
  };

  postsData.map((post) => {
    post.frontMatter.tags.map((tag) => {
      if (tag === "Metodología") tags.methodology++;
      if (tag === "Estadística") tags.statistics++;
      if (tag === "Análisis de datos") tags.data++;
    });
  });

  return tags;
};
