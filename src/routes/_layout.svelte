<script>
	import Nav from '../components/Nav.svelte';

	export let segment;

	const year = new Date().getFullYear();
</script>

<header>
	<Nav {segment} />
</header>
<main>
	<slot></slot>
</main>
<footer>
	© <span>{year}</span> ·
	<a href="https://davidkistauri.now.sh" target="_blank" rel="noopener">Давид Кистаури</a>
	и
	<a href="/us">друзья</a>
</footer>