import React, { useEffect, useState } from "react";
import emojiData from "./emojiData.json";

import "./emoji.css";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
  const newData = emojiData.filter((emoji) =>
  emoji.title.toLowerCase().includes(search.toLocaleLowerCase())
  );
  setData(newData);
  }, [search]);
  return (
  <div>
    <input
        type="text"
        placeholder="...جستجو"
        onChange={(e) => setSearch(e.target.value)}
    value={search}
    />

    <div className="guides">
        <img style={{verticalAlign:'middle',width:'55px',height:'55px'}} src="https://cdn-icons-png.flaticon.com/128/4160/4160724.png?uid=R25619652&ga=GA1.1.1410702522.1689505960&track=ais" />
        <div style={{verticalAlign:'middle',display:'inline',marginLeft:'20px'}}>
          !.. اسم ایموجی را که میخوای پیدا کنی به انگلیسی بنویس
        </div>
    </div>
    <div className="grid">
        {data.map((emoji) => (
        <article key={emoji.title}>
          <div class="text">
              <h3> {emoji.title}</h3>
              <h3> {emoji.symbol}</h3>
          </div>
        </article>
        ))}
    </div>
  </div>
  );
}
export default App;