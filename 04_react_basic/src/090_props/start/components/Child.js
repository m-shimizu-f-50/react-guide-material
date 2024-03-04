/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import './Child.css';

const Child = (props) => {
  const { color, num } = props;
  return (
    <div className={`component ${color}`}>
      <h3>Hello Component</h3>
      <p>{num}</p>
    </div>
  );
};

export default Child;
