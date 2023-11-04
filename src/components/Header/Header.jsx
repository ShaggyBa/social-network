import s from "./Header.module.css"
import { NavLink } from "react-router-dom";

const Header = (props) => {
	return (
		<header className={s.header}>
			<NavLink to="/profile">Main</NavLink>
			<div className={s.auth}>
				{props.isAuth
					? props.name
					: <NavLink to={"/login"}>Login</NavLink>
				}
				<button onClick={props.userLogout}>
					<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
						width="20" height="20" viewBox="0 0 50.000000 50.000000"
						preserveAspectRatio="xMidYMid meet">

						<g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
							fill="#rgb(38, 119, 69)" stroke="#ffffff">
							<path d="M5 488 c-3 -8 -4 -119 -3 -248 l3 -235 195 0 195 0 3 53 c2 36 0 52 -7 47 -6 -3 -11 -24 -11 -46 l0 -39 -180 0 -180 0 0 230 0 230 180 0 180 0 0 -32 c0 -18 5 -40 10 -48 8 -11 10 1 8 40 l-3 55 -193 3 c-150 2 -194 0 -197 -10z" />
							<path d="M370 363 c0 -4 21 -29 47 -55 l47 -48 -152 0 c-95 0 -152 -4 -152 -10 0 -6 57 -10 152 -10 l152 0 -49 -50 c-27 -27 -46 -53 -42 -57 4 -4 36 21 70 55 l62 62 -60 60 c-56 56 -75 70 -75 53z" />
						</g>
					</svg>
				</button >
			</div>
		</header >
	)
}

export default Header