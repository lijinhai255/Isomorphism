// app/about/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function About() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // 调用 API 路由 /api/hello
    async function fetchMessage() {
      try {
        const response = await fetch("/api/hello");
        if (response.ok) {
          const data = await response.json();
          setMessage(data.message);
        } else {
          console.error("Error fetching message:", response.status);
        }
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    }

    fetchMessage();
  }, []);

  return (
    <div>
      <h1>关于我们</h1>
      <p>这是关于页面的内容。</p>
      <h2>API 返回的消息:</h2>
      <p>{message ? message : "加载中..."}</p>
    </div>
  );
}
