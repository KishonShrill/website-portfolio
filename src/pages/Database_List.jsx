import { useEffect, useState } from "react";

export default function Database_List() {
  const [posts, setPosts] = useState([])
  const [form, setForm] = useState({ title: "", body: "" })

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((newPost) => {
        setPosts((prev) => [...prev, newPost])
        setForm({ title: "", body: "" })
      })
  }

  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>
        📬 Posts
      </h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          style={{
            border: "1px solid #ccc",
            padding: "8px",
            width: "100%",
            boxSizing: "border-box"
          }}
          required
        />
        <textarea
          placeholder="Body"
          value={form.body}
          onChange={(e) => setForm({ ...form, body: e.target.value })}
          style={{
            border: "1px solid #ccc",
            padding: "8px",
            width: "100%",
            boxSizing: "border-box"
          }}
          required
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "8px 16px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer"
          }}
        >
          Add Post
        </button>
      </form>

      <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {posts.map((post) => (
          <li key={post.id} style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "6px" }}>
            <h2 style={{ fontWeight: "bold" }}>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
