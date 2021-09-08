//全体に適用したいスタイルは_app.jsを作成して下記の様に呼び出す
import "../styles/global.css";
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
