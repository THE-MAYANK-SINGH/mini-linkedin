"use client";

import { use, useEffect, useState } from "react";

export default function ProfilePage({ params: paramsPromise }) {
  const params = use(paramsPromise); 
  const { id } = params;

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`);
      const data = await res.json();
      setUser(data.user);
      setPosts(data.posts.reverse());
    } catch (err) {
      console.error("Failed to fetch profile", err);
    }
  };

  if (!user) return <p className="mt-10 text-center">Loading profile...</p>;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">
      <div className="bg-white shadow-md rounded-xl p-6 text-center">
        <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-bold">
          {user.name[0]}
        </div>
        <h2 className="text-2xl font-semibold mt-4">{user.name}</h2>
        <p className="text-sm text-gray-500">{user.email}</p>
        <p className="text-gray-700 mt-3">{user.bio}</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Posts by {user.name}</h3>
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts yet.</p>
        ) : (
          posts.map((post) => (
            <div key={post._id} className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-800">{post.content}</p>
              <p className="text-sm text-gray-500 mt-2">
                {new Date(post.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
