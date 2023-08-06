import logo from '../img/logo.png';
import {useState} from "react";
import { useDispatch, useSelector} from "react-redux";


const Header = () => {
    const HeaderTopMenuLink = ( href : string, text: string) => {
        return(
            <li className="p-3 text-xs text-gray-400"><a href={href}>{text}</a></li>
        );
    }
    const [menu, setMenu] = useState(false);
    return (
        <>
            <div>
                <div>
                    {/*헤더 상단 왼쪽 메뉴*/}
                    <div className="top-left float-left">
                        <div className="boardMenu">
                            <ul className="justify-center flex m-0.5 ml-20">
                                {HeaderTopMenuLink("notice","공지사항")}
                                {HeaderTopMenuLink("review","상품후기")}
                                {HeaderTopMenuLink("qna","Q&A")}
                            </ul>
                        </div>
                    </div>
                    {/*헤더 상단 오른쪽 메뉴*/}
                    <div className="top-right float-right">
                        <div className="userMenu">
                            <ul className="justify-center flex m-0.5 mr-20">
                                {HeaderTopMenuLink("login","LOGIN")}
                                {HeaderTopMenuLink("join","JOIN")}
                                {HeaderTopMenuLink("cart","CART")}
                                {HeaderTopMenuLink("order","ORDER")}
                                {HeaderTopMenuLink("tracking","TRACKING")}
                                {HeaderTopMenuLink("mypage","MY PAGE")}
                            </ul>
                        </div>
                    </div>
                </div>
                {/*헤더 중간(로고)*/}
                <div className="innerMiddle">
                    <div>
                        <div className="max-w-md m-auto pt-24">
                            <a href="/">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                    </div>
                </div>
                {/*헤더 하단(메뉴)*/}
                <div className="innerBottom">
                    <div className="menuWrap">
                        <ul className="justify-center flex m-1">
                            <li className="p-10 text-xs text-gray-800">
                                <a href="#" onMouseEnter={() => {setMenu(!menu)}}>원두 상품</a>
                                <ul>
                                    {menu && <Dropdown />}
                                </ul>
                            </li>
                            <li className="p-10 text-xs text-gray-800"><a href="#">커피용품 상품</a></li>
                            <li className="p-10 text-xs text-gray-800"><a href="#">기타 상품</a></li>
                            <li className="p-10 text-xs text-gray-800"><a href="#">주문 상품</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;

{/*드롭다운 메뉴(추후 개선)*/}
function Dropdown(){
    console.log("재랜더링")
    return(
        <>
            <li className="text-sm text-gray-800"><a href="#">원두</a></li>
            <li className="text-sm text-gray-800"><a href="#">원두</a></li>
        </>
    );
}