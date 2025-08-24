import { useState } from "react";

export default function EmojiToggle() {
  const [emoji, setEmoji] = useState("😀");
  const [count, setCount] = useState(0);

  const changeEmoji = () => {
    if (count < 10) {
      setEmoji(emoji === "😀" ? "😎" : "😀");
      setCount(count + 1);
    }
  };

  return (
    <div>
      <h1>{emoji}</h1>
      <p>Changes: {count}/10</p>
      <button onClick={changeEmoji}>Change</button>
    </div>
  );
}
