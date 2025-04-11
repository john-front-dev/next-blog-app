import { Metadata } from "next";
import Link from "next/link";

async function gatData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  return response.json();
}

export const metadata: Metadata = {
  title: "Blog",
};

const Blog = async () => {
  const posts = await gatData();
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
