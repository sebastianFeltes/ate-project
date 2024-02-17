import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Social() {
	const [pageTitle, setPageTitle] = useState("ATE | Es con vos...");
	useEffect(() => {
		// Cambiar el título de la página cuando el componente se monta
		setPageTitle("Social | ATE Berisso");

		// Limpiar el título cuando el componente se desmonta
		return () => setPageTitle("ATE Berisso");
	}, []);
	return (
		<>
			<Helmet>
				<title>{pageTitle}</title>
			</Helmet>
			<div className="hero min-h-screen bg-white">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">Social</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
							quasi. In deleniti eaque aut repudiandae et a id nisi.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
