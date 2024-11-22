// app/components/TimeDisplay.tsx
// "use client";

import { useTimeNow } from "../hooks/useTimeNow";

export default function TimeDisplay() {
  const currentTime = useTimeNow();

  return (
    <div>
      <h2>当前时间:</h2>
      <p>{currentTime}</p>
    </div>
  );
}
