import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="m-0 p-0">
			<Navbar />
			<Outlet />
		</div>
	);
};

export default Layout;
