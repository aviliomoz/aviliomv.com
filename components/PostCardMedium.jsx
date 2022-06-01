import Link from "next/link";
import Image from "next/image";
import { getImageURL } from "../utils/images";

const PostMedium = ({ post }) => {
  return (
    <Link href={"/blog/" + post.slug}>
      <a>
        <article className="post-medium">
          <div className="post-medium__image">
            <Image
              src={getImageURL(post.cover)}
              alt={post.cover}
              width={500}
              height={400}
              objectFit="cover"
            />
          </div>
          <div className="post-medium__info">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <small>{post.date}</small>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default PostMedium;
