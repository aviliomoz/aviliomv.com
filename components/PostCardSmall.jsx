import Link from "next/link";
import Image from "next/image";

const PostSmall = ({ post }) => {
  return (
    <Link href={"/blog/" + post.slug}>
      <article className="post-small">
        <div className="post-small__image">
          <Image
            src={post.frontMatter.thumbnailUrl}
            alt="thumbnail"
            width={500}
            height={400}
            objectFit="cover"
          />
        </div>
        <div className="post-small__info">
          <h3>{post.frontMatter.title}</h3>
        </div>
      </article>
    </Link>
  );
};

export default PostSmall;
