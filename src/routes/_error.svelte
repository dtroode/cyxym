<script>
  import Nav from "../components/Nav.svelte";

  const year = new Date().getFullYear();
  const dev = process.env.NODE_ENV === "development";
</script>

<style>
  header nav a {
    text-transform: uppercase;
  }
</style>

<svelte:head>
  <title>404</title>
  <link rel="stylesheet" href="styles/error.css" />
</svelte:head>

<header>
  <nav>
    <a href="ru">Cyxym</a>
    <a rel="prefetch" href="ru/history">История</a>
    <a rel="prefetch" href="ru/guide">Гид</a>
    <a rel="prefetch" href="ru/people">Люди</a>
  </nav>
</header>
<main>
  <h1>404</h1>
  <figure>
    <img src="images/error-main.jpg" alt="Код ошибки: 404" />
  </figure>
</main>
<footer>
  © <span>{year}</span> ·
  <a href="https://davidkistauri.now.sh" target="_blank" rel="noopener"
    >Давид Кистаури</a
  >
  и
  <a
    href="ru/about
		"
    >друзья</a
  >
  · <a href="/en">EN</a>
</footer>
