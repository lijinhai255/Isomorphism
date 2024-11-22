// app/about/ClientTime.tsx
"use client";

import { useEffect, useState } from "react";

// 获取当前时间字符串
const nowTimeStr = () => new Date().toLocaleString();

// 自定义 Hook，用于获取当前时间
const useTimeNow = () => {
  const [timeNow, setTimeNow] = useState<string>("");

  useEffect(() => {
    // 在客户端挂载时设置时间
    const updateTimeNow = () => {
      setTimeNow(nowTimeStr());
    };

    updateTimeNow();
    const timer = setInterval(() => {
      updateTimeNow();
    }, 1000);

    // 清除定时器
    return () => {
      clearInterval(timer);
    };
  }, []);

  return timeNow;
};

// 客户端组件，用于展示时间
export default function ClientTime() {
  const timeNow = useTimeNow();

  return (
    <div>
      <h2>当前时间:</h2>
      <p>{timeNow}</p>
    </div>
  );
}
