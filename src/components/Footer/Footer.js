import React from "react";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import "./footer.css";



function Footer({ dark, setDark }) {
	return (
		<div>
			<footer className="footer" style={{ backgroundColor: dark ? "#393E46" : "", backgroundImage: dark ? "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)" : "" }}>
				<div className="d-flex bd-highlight main">
					<div className="p-2 bd-highlight">
						<h4>
							{/* <Badge pill variant="light" className="hvr-grow">
									<span role="img" aria-label="star" className="emojiFix">
										⭐
									</span>{" "}
									This project
								</Badge> */}
						</h4>
						{/* </a> */}
					</div>
					<div className="ml-auto p-2 bd-highlight footer-toggle">
						<h4>
							{/* toggle dark mode */}
							<Badge
								pill
								variant="light"
								className="hvr-grow"
								onClick={() => {
									setDark(!dark);
									window.localStorage["isDark"] = !dark;
								}}
								style={{ cursor: "pointer" }}
							>
								{dark ? (
									<span role="img" aria-label="sun-emoji" className="emojiFix">
										☀️
									</span>
								) : (
									<span role="img" aria-label="moon-emoji" className="emojiFix">
										🌙
									</span>
								)}
							</Badge>{" "}
							<Link to="/about">
								<Badge pill variant="light" className="hvr-grow">
									About{" "}
									<span role="img" aria-label="face-with-monocole" className="emojiFix">
										🧐
									</span>
								</Badge>
							</Link>
							<span className="m-3 p-2" style={{ fontSize: '19px' }}>
							This Website is Developed by the students of 8th semester from the  Department of Computer Science And Engineering.							</span>

						</h4>
					</div>
				</div>
			</footer>
		</div>
	);
}


export default Footer;