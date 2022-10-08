<script lang="ts">
    import Logo from "$lib/assets/favicon.png";
	export const title: string = 'Document';
</script>

<svelte:head>
	<title>k5 - { title }</title>
</svelte:head>

<header class="bg-blue-600">
	<nav class="container flex flex-row justify-between p-2 mx-auto">
        <img src={ Logo } alt="site logo" class="w-12" />
		<div class="flex flew-row">
			<a
				href="/"
				class="p-2 mx-2 hover:bg-black hover:text-white hover:rounded-md"
				>Home</a
			>
			<a
				href="/about"
				class="p-2 hover:bg-black hover:text-white hover:rounded-md"
				>About</a
			>
			<a
				href="/contact"
				class="p-2 hover:bg-black hover:text-white hover:rounded-md"
				>Contact</a
			>
		</div>
	</nav>
</header>
