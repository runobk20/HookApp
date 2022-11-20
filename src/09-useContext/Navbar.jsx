import { Link, NavLink } from 'react-router-dom';

export const Navbar = ({ paths }) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				useContext
			</Link>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					{paths.map((path) => {
						return (
							<NavLink
								key={path.name}
								to={path.path}
								className={({ isActive }) => {
									return `nav-link ${isActive ? 'active' : ''}`;
								}}
							>
								{path.name}
							</NavLink>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};
