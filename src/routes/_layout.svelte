<script>
  import Nav from "../components/Nav.svelte";

  export let segment;

  const year = new Date().getFullYear();
</script>

<style>
  footer {
    margin-top: 3rem;
    margin-bottom: 0;
  }
</style>

<header>
  <Nav {segment} />
</header>
<main>
  <slot />
</main>
<footer>
  ©
  <span>{year}</span>
  ·
  <a href="https://davidkistauri.ru" target="_blank" rel="noopener">
    Давид Кистаури
  </a>
  и
  <a href="/us">друзья</a>
</footer>
