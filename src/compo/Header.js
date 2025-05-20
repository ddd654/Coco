import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <nav>원형 메뉴
        <span>막대1</span>
        <span>막대2</span>
        <span>막대3</span>
      </nav>
      <nav className="">숨겨진 사각 메뉴 공간
        <Link to="menu1">메뉴1</Link>
        <Link to="menu2">메뉴2</Link>
        <Link to="menu3">메뉴3</Link>
        <Link to="menu4">메뉴4</Link>
        <div>개인정보나 약관같은거</div>
      </nav>
    </div>
  )
}

export default Header;