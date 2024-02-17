import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Social from "./pages/Social";
import Instructives from "./pages/Instructives";
import Layout from "./Layout";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/ate-project/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/ate-project/contact" element={<Contact />} />
					<Route path="/ate-project/social" element={<Social />} />
					<Route path="/ate-project/instructives" element={<Instructives />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
