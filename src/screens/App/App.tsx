import React from "react";
import bow from "../../assets/brand/ico_bow.svg";
import { removeDir, BaseDirectory } from '@tauri-apps/api/fs';
import TitleBarComponentLight from "@/components/TitleBar/TitleBarComponentLight";

const App: React.FC = () => {
	const [purged, setPurged] = React.useState(false);

	async function purgeJarvisData() {
		try {
			await localStorage.clear();
			await removeDir('', { dir: BaseDirectory.AppData, recursive: true });
			setPurged(true);
		} catch (error) {
			alert(error);
		}
	}

	return (
		<div className="flex flex-col bg-background-sidebar items-center justify-center h-screen select-none" data-tauri-drag-region>
			<TitleBarComponentLight />
			<img src={bow} className="w-16 mb-12" />
			{!purged ?
				<>
					<h1 className="text-xl mx-6 mb-2 font-medium text-center">Welcome to the Jarvis Emergency Purge Tool</h1>
					<p className="text-md text-center mx-2 text-comment-color">Click the Button below to purge all Data created by Jarvis.</p>

					<button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-8" onClick={purgeJarvisData}>Purge Jarvis Data</button>
				</>
				:
				<p className="text-md text-center mx-2 text-jenkins-job-green mt-2">All Data has been purged. You can now close this window.</p>}
		</div>
	);
};

export default App;
