import logo from '../img/logo.png';
import {useState} from "react";
const Header = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className="header">
            <div className="inner">
                <div className="innerTop">
                    <div className="top-left float-left">
                        <div className="boardMenu">
                            <ul className="justify-center flex m-2 ml-20">
                                <li className="p-3 text-xs text-gray-400"><a href="#">공지사항</a></li>
                                <li className="p-3 text-xs text-gray-400"><a href="#">구매후기</a></li>
                                <li className="p-3 text-xs text-gray-400"><a href="#">Q&A</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="top-right float-right">
                        <div className="userMenu">
                            <ul className="justify-center flex m-2 mr-20">
                                <li className="p-3 text-xs text-gray-400"><a href="#">LOGIN</a></li>
                                <li className="p-3 text-xs text-gray-400"><a href="#">JOIN</a></li>
                                <li className="p-3 text-xs text-gray-400"><a href="#">CART</a></li>
                                <li className="p-3 text-xs text-gray-400"><a href="#">ORDER</a></li>
                                <li className="p-3 text-xs text-gray-400"><a href="#">TRACKING</a></li>
                                <li className="p-3 text-xs text-gray-400"><a href="#">MY PAGE</a></li>
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