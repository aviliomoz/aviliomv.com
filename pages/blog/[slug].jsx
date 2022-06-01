import ReactMarkdown from "react-markdown";
import Image from "next/image";

import CodeBlock from "../../components/CodeBlock";
import { getPostBySlug, getPosts } from "../../utils/posts";
import { getImageURL } from "../../utils/images";

const PostPage = ({ post }) => {
  return (
    <div className="post-page">
      <ReactMarkdown
        components={{
          code: CodeBlock,
          li: (li) => (
            <li style={{ marginLeft: "20px", marginBottom: "8px" }}>
              {li.children}
            </li>
          ),
          a: (a) => (
            <a
              target="_blank"
              rel="noreferrer"
              style={{ color: "#0093AB" }}
              href={a.href}
            >
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
                <Image
                  height="400"
                  width="600"
                  src={getImageURL(image.src)}
                  alt={image.src}
                />
              </div>
            );
          },
        }}
      >
        {post.content}
      </ReactMarkdown>
    </div>
  );
};

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const post = await getPostBySlug(slug);
  return {
    props: {
      post,
    },
  };
};

export default PostPage;
