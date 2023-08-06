import logo from '../img/logo.png';
import {useState} from "react";

const Header = () => {
    const MenuLink = ( href : string, text: string) => {
        return(
            <li className="p-3 text-xs text-gray-400"><a href={href}>{text}</a></li>
        );
    }
    const [menu, setMenu] = useState(false);
    return (
        <div className="header">
            <div className="inner">
                <div className="innerTop">
                    <div className="top-left float-left">
                        <div className="boardMenu">
                            <ul className="justify-center flex m-2 ml-20">
                                {MenuLink("notice","공지사항")}
                                {MenuLink("review","상품후기")}
                                {MenuLink("qna","Q&A")}
                            </ul>
                        </div>
                    </div>
                    <div className="top-right float-right">
                        <div className="userMenu">
                            <ul className="justify-center flex m-2 mr-20">
                                {MenuLink("login","LOGIN")}
                                {MenuLink("join","JOIN")}
                                {MenuLink("cart","CART")}
                                {MenuLink("order","ORDER")}
                                {MenuLink("tracking","TRACKING")}
                                {MenuLink("my-page","MY PAGE")}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="innerMiddle">
                    <div>
                        <div className="max-w-md m-auto pt-28">
                            <a className="" href="/">
                                <img className="" src={logo} alt="logo" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="innerBottom">
                    <div className="menuWrap">
                        <ul className="justify-center flex m-5">
                            <li className="p-10 text-sm text-gray-800" onMouseOver={() => {setMenu(!menu)}}>
                                <a href="#">원두 상품</a>
                                <ul>
                                    {menu && <Dropdown />}
                                </ul>
                            </li>
                            <li className="p-10 text-sm text-gray-800"><a href="#">BEVERAGE</a></li>
                            <li className="p-10 text-sm text-gray-800"><a href="#">TEA</a></li>
                            <li className="p-10 text-sm text-gray-800"><a href="#">MERCHANDISE</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;

function Dropdown(){
    return(
        <>
            <li className="text-sm text-gray-800"><a href="#">원두</a></li>
            <li className="text-sm text-gray-800"><a href="#">원두</a></li>
        </>
    );
}