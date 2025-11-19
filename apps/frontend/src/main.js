import React from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes/AppRoutes";

const rootEl = document.getElementById("app");
const root = createRoot(rootEl);
root.render(
	<React.StrictMode>
		<AppRoutes />
	</React.StrictMode>
);
