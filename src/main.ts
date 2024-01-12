export default function () {
	figma.showUI(__html__, { width: 300, height: 500, themeColors: true })

	figma.ui.onmessage = async (msg) => {
		// Required for supabase.js

		if (msg.type === 'set-client-storage') {
			console.log('set-client-storage')
			figma.clientStorage.setAsync(msg.key, msg.value).then(() => {
				figma.ui.postMessage({ type: 'client-storage-set' })
			})
		}

		if (msg.type === 'remove-client-storage') {
			console.log('remove-client-storage')
			figma.clientStorage.deleteAsync(msg.key).then(() => {
				figma.ui.postMessage({ type: 'client-storage-removed' })
			})
		}

		if (msg.type === 'get-client-storage') {
			figma.clientStorage.getAsync(msg.key).then((res) => {
				figma.ui.postMessage({
					type: 'post-client-storage',
					key: msg.key,
					value: res,
				})
			})
		}
	}
}
