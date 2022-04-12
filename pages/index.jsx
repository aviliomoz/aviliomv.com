import fs from "fs";
import path from "path";

import { useEffect, useState } from "react";
import matter from "gray-matter";
import moment from "moment";

import PostCardMedium from "../components/PostCardMedium";
import SectionCard from "../containers/SectionCard";

const Home = ({ posts }) => {
  const [externalPosts, setExternalPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((posts) => setExternalPosts(posts));
  }, []);

  return (
    <div className="home">
      <section className="home__blog">
        <SectionCard title="Blog">
          {posts
            .sort(
              (a, b) =>
                Number(moment(b.frontMatter.date, "DD/MM/YYYY")) -
                Number(moment(a.frontMatter.date, "DD/MM/YYYY"))
            )
            .map((post, index) => (
              <PostCardMedium key={index} post={post} />
            ))}
        </SectionCard>
      </section>
      <section className="home__links">
        <SectionCard title="Artículos externos">
          {externalPosts
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

                <a className="global__link" target={"_blank"} href={post.url}>
                  {post.title}
                </a>
              </div>
            ))}
        </SectionCard>
      </section>
    </div>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};

export default Home;
