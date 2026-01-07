import "./app.css";

import * as ReactDOM from 'react-dom/client';
import { getColors } from './unique-window-colors'
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

export function Root() {
	// Empty string blows up bad
	const [input, setInput] = useState('Workspace');
	const colorSettings = getColors(input);

	return (
		<>
			<form>
				<input name="input" value={input} onChange={e => setInput(e.target.value)}/>
			</form>

			<h2>Light</h2>
			<SyntaxHighlighter language="json">
				{JSON.stringify({
					"activityBar.background": "",
					"titleBar.activeBackground": "",
					"titleBar.activeForeground": ""
				}, null, 2)}
			</SyntaxHighlighter>

			<h2>Dark</h2>
			<SyntaxHighlighter language="json">
				{JSON.stringify({
					"activityBar.background": "",
					"titleBar.activeBackground": "",
					"titleBar.activeForeground": ""
				}, null, 2)}
			</SyntaxHighlighter>
		</>
	);
}

const rootElement = document.getElementById('root')
if(rootElement === null) {
	throw new Error("Root element not found");
} else {
	const root = ReactDOM.createRoot(rootElement);
	root.render(<Root/>);
}


// {
// 	"folders": [
// 		{
// 			"path": "."
// 		}
// 	],
// 	"settings": {
// 		"workbench.colorTheme": "Default Dark Modern",
// 		"workbench.colorCustomizations": {
// 			"activityBar.background": "#13332E",
// 			"titleBar.activeBackground": "#19423B",
// 			"titleBar.activeForeground": "#F6FBFB"
// 		},
// 		"editor.fontSize": 14
// 	}
// }