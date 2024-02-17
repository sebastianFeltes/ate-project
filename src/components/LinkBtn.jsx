import { Link } from "react-router-dom";
import "./LinkBtn.scss"
export default function LinkBtn({ route, content }) {
	return (
		<div>
			<Link
				to={route}
				className="text-xl button"
			>
				{content}
			</Link>
		</div>
	);
}
