// app/about/page.tsx
import React from "react";

async function fetchMessage() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/hello`, {
      cache: "no-store", // 确保最新的数据被获取到，不使用缓存
    });
    if (response.ok) {
      const data = await response.json();
      return data.message;
    } else {
      console.error("Error fetching message:", response.status);
      return "无法获取消息";
    }
  } catch (error) {
    console.error("Error fetching message:", error);
    return "获取消息时出错";
  }
}

export default async function About() {
  const message = await fetchMessage();

  return (
    <div>
      <h1>关于我们</h1>
      <p>这是关于页面的内容。</p>
      <h2>API 返回的消息:</h2>
      <p>{message}</p>
    </div>
  );
}
