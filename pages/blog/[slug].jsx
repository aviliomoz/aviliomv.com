import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { useRouter } from "next/router";

import CodeBlock from "../../components/CodeBlock";
import { getPostBySlug } from "../../utils/posts";
import { getImageURL } from "../../utils/images";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";
import { useState } from "react";
import { useEffect } from "react";

const PostPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState(null);

  useEffect(() => {
    slug && getPostBySlug(slug).then(setPost);
  }, [slug]);

  if (!post) return <></>;

  return (
    <div className="post-page">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
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

// export const getStaticPaths = async () => {
//   const posts = await getPosts();
//   const paths = posts.map((post) => ({
//     params: {
//       slug: post.slug,
//     },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params: { slug } }) => {
//   const post = await getPostBySlug(slug);
//   return {
//     props: {
//       post,
//     },
//   };
// };

export default PostPage;
