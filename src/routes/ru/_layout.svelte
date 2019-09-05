<script>
	import Nav from '../../components/Nav.svelte';

	export let segment;
	export let language = "ru";

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
	<a href="https://davidkistauri.now.sh" target="_blank" rel="noopener">Давид Кистаури</a>
	и
	{#if segment === undefined}
	<a href="ru/about
		">друзья</a> · <a href="/en">EN</a>
	{:else}
	<a href="ru/about
		">друзья</a> · <a href="/en/{segment}">EN</a>
	{/if}
</footer>