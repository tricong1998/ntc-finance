import { Link } from 'react-router-dom'
import Logo from '../../img/svg/logo.svg'
import LightIcon from '../../img/svg/light-icon.svg'
import { RoutePath } from '../../shared/routers'

const tabs = [
    {
        to: RoutePath.Home,
        component: <></>,
    },
]

export const Header = () => {
    return (
        <div className="flex">
            <div className="flex">
                <ul className="flex">
                    <li>
                        <Link to={RoutePath.Home}>
                            <img className="cursor-pointer" src={Logo} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to={RoutePath.Home}>Market</Link>
                    </li>
                    <li>
                        <Link to={RoutePath.Home}>NFT Farming</Link>
                    </li>
                    <li>
                        <Link to={RoutePath.Home}>Activity</Link>
                    </li>
                    <li>
                        <Link to={RoutePath.Home}>FAQ</Link>
                    </li>
                </ul>
            </div>
            <Search />
            <div>
                <button>Create</button>
            </div>
            <div>
                <button>
                    <img className="cursor-pointer" src={LightIcon} alt="" />
                </button>
            </div>
            <div className="justify-self-end">
                <Link to={RoutePath.Home}>FAQ</Link>/{' '}
                <Link to={RoutePath.Home}>FAQ</Link>
            </div>
        </div>
    )
}

const Search = () => {
    return (
        <div>
            <span></span>
            <input placeholder="search"></input>
        </div>
    )
}
