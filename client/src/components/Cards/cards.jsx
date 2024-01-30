import styles from "./cards.module.css";
import { NavLink } from "react-router-dom";
const noImage = "../../assets/react.svg";

function Cards({ driver }) {
	const { forename, surname, image, teams, dob, id } = driver;

	const formatTeams = (teams) => {
		if (typeof teams === "string") {
			return teams;
		} else if (Array.isArray(driver.Teams)) {
			return driver.Teams.map((team) => team.name).join(", ");
		} else {
			return "";
		}
	};

	return (
		<div
			className={styles.card_container}
			title={`Click here to see more detail of ${driver.forename} ${driver.surname}`}
		>
			<NavLink
				to={`/home/${id}`}
				style={{ textDecoration: "none" }}
			></NavLink>

			<h3 className={styles.nombre}>{`${forename} ${surname}`}</h3>
			<img
				src={driver.image || noImage}
				alt="Driver"
				className={style.image}
			/>
			<div>
				<h5 className={styles.teams}>{formatTeams(teams)}</h5>
				<h5 className={styles.fecha}>{dob}</h5>
			</div>
		</div>
	);
}

export default Cards;
