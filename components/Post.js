/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";

export default function Post({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a>
        <div className="card">
          <h3 className="post-heading">{post.frontmatter.title}</h3>
          <p>{post.frontmatter.excerpt}</p>
          <div className="date_container">
            <div className="post-date">Posted on {post.frontmatter.date}</div>
          </div>
        </div>
      </a>
    </Link>
  );
}
