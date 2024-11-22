// app/ClientTime/page.tsx
"use client"; // 添加这一行

import TimeDisplay from "../components/TimeDisplay";
import ClientTime from "./ClientTime";
import { useState } from "react";

export default function AboutPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>关于我们</h1>
      <p>这是关于页面的内容。</p>
      <ClientTime />
      <div>
        <h2>计数器</h2>
        <p>当前计数：{count}</p>
        <button onClick={() => setCount(count + 1)}>增加</button>
        <h1>时间显示页面</h1>
        <p>这是一个演示如何使用 useTimeNow 自定义 Hook 的页面。</p>
        <TimeDisplay />
      </div>
    </div>
  );
}
