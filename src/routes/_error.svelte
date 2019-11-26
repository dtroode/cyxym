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

<main>
  <h1>404</h1>
  <figure>
    <img src="images/error-main.jpg" alt="Код ошибки: 404" />
  </figure>
</main>