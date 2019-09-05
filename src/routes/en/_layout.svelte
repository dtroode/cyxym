<script>
	import Nav from '../../components/Nav.svelte';

	export let segment;
	export let language = "en";

	const year = new Date().getFullYear();
</script>

<header>
	<Nav {segment} {language}/>
</header>
<main>
	<slot></slot>
</main>
<footer>
	© <span>{year}</span> ·
	<a href="https://davidkistauri.now.sh" target="_blank" rel="noopener">David Kistauri</a>
	and
	{#if segment === undefined}
	<a href="en/about
		">friends</a> · <a href="/ru">РУ</a>
	{:else}
	<a href="en/about
		">friends</a> · <a href="/ru/{segment}">РУ</a>
	{/if}
</footer>