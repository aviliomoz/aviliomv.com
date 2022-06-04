import moment from "moment";
import { useEffect, useState } from "react";

import PostCardMedium from "../components/PostCardMedium";
import SectionCard from "../containers/SectionCard";
import { getPosts, getExternalPosts } from "../utils/posts";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [external_posts, setExternalPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
    getExternalPosts().then(setExternalPosts);
  }, []);

  return (
    <div className="home">
      <section className="home__blog">
        <SectionCard title="Blog">
          {posts
            .sort(
              (a, b) =>
                Number(moment(b.date, "DD/MM/YYYY")) -
                Number(moment(a.date, "DD/MM/YYYY"))
            )
            .map((post, index) => (
              <PostCardMedium key={index} post={post} />
            ))}
        </SectionCard>
      </section>
      <section className="home__links">
        <SectionCard title="Artículos externos">
          {external_posts
            .sort(
              (a, b) =>
                Number(moment(b.date, "DD/MM/YYYY")) -
                Number(moment(a.date, "DD/MM/YYYY"))
            )
            .map((post, index) => (
              <div
                style={{
                  lineHeight: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
                key={index}
              >
                <hr
                  style={{
                    border: "1px solid rgba(0,0,0, 0.1)",
                    margin: "15px 0px",
                  }}
                />

                <a
                  className="global__link"
                  target={"_blank"}
                  rel="noreferrer"
                  href={post.url}
                >
                  {post.title}
                </a>
              </div>
            ))}
        </SectionCard>
      </section>
    </div>
  );
};

// export const getStaticProps = async () => {
//   const posts = await getPosts();
//   const external_posts = await getExternalPosts();

//   return {
//     props: {
//       posts,
//       external_posts,
//     },
//   };
// };

export default Home;
