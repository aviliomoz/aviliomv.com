import Link from "next/link";
import Image from "next/image";

const PostMedium = ({ post }) => {
  return (
    <Link href={"/blog/" + post.slug}>
      <article className="post-medium">
        <div className="post-medium__image">
          <Image
            src={post.frontMatter.thumbnailUrl}
            alt="thumbnail"
            width={500}
            height={400}
            objectFit="cover"
          />
        </div>
        <div className="post-medium__info">
          <h3>{post.frontMatter.title}</h3>
          <p>{post.frontMatter.description}</p>
          <small>{post.frontMatter.date}</small>
        </div>
      </article>
    </Link>
  );
};

export default PostMedium;
