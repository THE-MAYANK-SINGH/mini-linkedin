"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUserId(localStorage.getItem("userId"));
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
      const data = await res.json();
      setPosts(data.reverse());
    } catch (err) {
      console.error("Failed to fetch posts", err);
    }
  };

  const createPost = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Failed to post");
      } else {
        setContent("");
        fetchPosts();
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-4xl font-bold text-blue-700 text-center">
        Community Feed
      </h1>

      {token && (
        <form
        onSubmit={createPost}
        className="bg-white border border-gray-200 rounded-xl p-5 space-y-3"
      >
        <h2 className="text-lg font-semibold text-gray-800">Create Post</h2>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="What’s on your mind?"
          rows={4}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          disabled={loading}
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
        >
          {loading ? "Posting..." : "Post"}
        </button>
      </form>

      )}

      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <p className="text-gray-900 font-medium text-lg">{post.content}</p>
            <p className="text-sm text-gray-500 mt-1">
              <span
                onClick={() => router.push(`/profile/${post.author._id}`)}
                className="text-blue-600 hover:underline cursor-pointer font-semibold"
              >
                {post.author.name}
              </span>{" "}
              – {new Date(post.createdAt).toLocaleString("en-IN")}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
