import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div class="input-area">
        <input id="add-text" placeholder="Todoを入力" />
        <button id="add-button">追加</button>
      </div>
      <div>
        <p>未完了のTodo</p>
        <div>
          <li>あああ</li>
          <button>完了</button>
          <button>削除</button>
        </div>
      </div>
      <div>
        <p>完了のTodo</p>
        <div>
          <li>ffff</li>
          <button>戻す</button>
        </div>
      </div>
    </>
  );
};
