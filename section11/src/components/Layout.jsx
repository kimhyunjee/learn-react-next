import style from "./Layout.module.css";
import { useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const nav = useNavigate();
  const onclickHeader = () => {
    nav("/");
  };
  return (
    <div>
      <header onClick={onclickHeader} className={style.header}>
        <div>🌏NARAS</div>
      </header>
      <main className={style.main}> {children}</main>
    </div>
  );
}
