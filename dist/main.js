// node_modules/plugma/frameworks/common/main/saveFigmaStyles.ts
function saveFigmaStyles() {
	if (true) {
		figma.ui.on("message", async (msg) => {
			if (msg.event === "save-figma-stylesheet") {
				figma.clientStorage.setAsync("figma-stylesheet", msg.styles);
			}
			if (msg.event === "get-figma-stylesheet") {
				let styles = await figma.clientStorage.getAsync("figma-stylesheet");
				figma.ui.postMessage({
					event: "pass-figma-stylesheet",
					styles
				});
			}
		});
	}
}

// src/main.ts
function main_default() {
	figma.showUI(__html__, { width: 300, height: 500, themeColors: true });
	figma.ui.onmessage = async (msg) => {
		if (msg.type === "set-client-storage") {
			console.log("set-client-storage");
			figma.clientStorage.setAsync(msg.key, msg.value).then(() => {
				figma.ui.postMessage({ type: "client-storage-set" });
			});
		}
		if (msg.type === "remove-client-storage") {
			console.log("remove-client-storage");
			figma.clientStorage.deleteAsync(msg.key).then(() => {
				figma.ui.postMessage({ type: "client-storage-removed" });
			});
		}
		if (msg.type === "get-client-storage") {
			figma.clientStorage.getAsync(msg.key).then((res) => {
				figma.ui.postMessage({
					type: "post-client-storage",
					key: msg.key,
					value: res
				});
			});
		}
	};
}

// ../../../../private/var/folders/wr/55c039r173z6tm1c23b89d7r0000gn/T/temp_1705082561038.js
saveFigmaStyles();
main_default();
