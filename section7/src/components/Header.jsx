import "./Header.css";
import { memo } from "react";

function Header() {
  return (
    <div className="Header">
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
}

const OptimizedHeaderComponent = memo(Header);
/*
memo는 인수로 받은 컴포넌트를 최적화해서 내보낸다
Optimized~ 변수에는 최적화된 Header컴포넌트가 저장됨 
제공받은 props가 변경되지 않으면 부모 컴포넌트가 리렌더되어도 리렌더되지 않음
*/

export default OptimizedHeaderComponent;

// export default memo(Header);
