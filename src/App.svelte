<script lang="ts">
	import { supabase } from './supabase'
	import { onMount } from 'svelte'

	let _data: any

	onMount(async () => {
		const { data } = await supabase.auth.getSession()
		_data = data
	})
</script>

<main>Session: {@html _data?.session}</main>

<style>
</style>
