import React from "react";
import ReactDOM from "react-dom/client";
import App from "./screens/App/App";
import "./styles.css";

import "tailwindcss/tailwind.css";

import {
	BrowserRouter, Route, Routes
} from "react-router-dom";
import ErrorBoundary from "./screens/ErrorBoundary/ErrorBoundary"; // Import the ErrorBoundary component

function AppContainer() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}

// Wrap AppContainer with ErrorBoundary
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ErrorBoundary>
		<AppContainer />
	</ErrorBoundary>,
);
