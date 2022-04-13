import fs from "fs";
import path from "path";

import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

import CodeBlock from "../../components/CodeBlock";

const PostPage = ({ postContent, postMetadata }) => {

  return (
    <div className="post-page">
      <ReactMarkdown
        children={postContent}
        components={{
          code: CodeBlock,
          li: (li) => (
            <li style={{ marginLeft: "20px", marginBottom: "8px" }}>
              {li.children}
            </li>
          ),
          a: (a) => (
            <a target={"_blank"} style={{ color: "#0093AB" }} href={a.href}>
              <abbr title={a.title}>{a.children}</abbr>
            </a>
          ),
          p: "div",
          img: (image) => {
            return (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  margin: "50px 0px",
                }}
              >
                <Image height="400" width="600" src={"/" + image.src} />
              </div>
            );
          },
        }}
      />
    </div>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: postMetadata, content: postContent } = matter(markdownWithMeta);
  return {
    props: {
      postMetadata,
      postContent,
      slug,
    },
  };
};

export default PostPage;
