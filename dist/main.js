// src/main.ts
console.clear();
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

// ../../../../private/var/folders/wr/55c039r173z6tm1c23b89d7r0000gn/T/temp_1705341615984.js
main_default();
