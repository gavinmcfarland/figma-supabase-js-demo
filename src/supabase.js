import { createClient } from '@supabase/supabase-js';

const clientStorage = {
	setItem: function (key, value) {

		new Promise((resolve, reject) => {

			parent.postMessage(
				{
					pluginMessage: {
						type: "set-client-storage",
						key,
						value
					},
					pluginId: "*"
				},
				"https://www.figma.com"
			)

			window.addEventListener("message", (event) => {

				let message = event.data.pluginMessage;

				if (message.type === "client-storage-set") {
					resolve()
				}

			});
		})
	},
	getItem: function (key) {
		return new Promise((resolve, reject) => {

			parent.postMessage(
				{
					pluginMessage: {
						type: "get-client-storage",
						key,
					},
					pluginId: "*"
				},
				"https://www.figma.com"
			)

			window.addEventListener("message", (event) => {
				let message = event.data.pluginMessage;

				if (message.type === "post-client-storage") {
					if (message.key === key) {
						resolve(message.value)
					}
				}

			});
		})
	},
	removeItem: function (key) {
		new Promise((resolve, reject) => {
			parent.postMessage(
				{
					pluginMessage: {
						type: "remove-client-storage",
						key
					},
					pluginId: "*"
				},
				"https://www.figma.com"
			)

			window.addEventListener("message", (event) => {

				let message = event.data.pluginMessage;

				if (message.type === "client-storage-removed") {
					resolve()
				}

			});
		})
	},
}


const PUBLIC_SUPABASE_API_URL = import.meta.env.VITE_PUBLIC_SUPABASE_API_URL
const PUBLIC_SUPABASE_ANON_KEY = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY


export const supabase = createClient(
	PUBLIC_SUPABASE_API_URL,
	PUBLIC_SUPABASE_ANON_KEY,
	{
		auth: {
			storage: clientStorage,
		}
	}
)
