<script lang="ts">
	import { supabase } from './supabase'
	import { onMount } from 'svelte'

	onMount(async () => {
		const { data } = await supabase.auth.getSession()
		console.log(data)
	})
</script>

<main>Hello World</main>

<style>
</style>
