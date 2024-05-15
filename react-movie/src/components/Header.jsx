import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="header-container">
            <div className="header-wrap">
                <div className="header-left-wrap">
                    <Link style={{display: 'flex', alignItems: 'center'}} to='/'>
                        <img
                            style={{width:"154px", height:"20px"}}
                            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
                            alt="로고" />
                    </Link>
                    <ul>
                        <li>
                            <Link className="header-nav-item" to='/movie'>
                                영화
                            </Link>
                        </li>
                        <li>
                            <Link className="header-nav-item" to='/tv'>
                                TV프로그램
                            </Link>
                        </li>
                        <li>
                            <Link className="header-nav-item" to='/person'>
                                인물
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="header-left-wrap">
                </div>
            </div>

        </div>
    )
}

export default Header;