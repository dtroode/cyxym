<script>
  export let segment;
  export let language;
</script>

<style>
  a {
    text-transform: uppercase;
  }
  a.selected {
    border-radius: 0.2rem;
    color: var(--accent);
    background-color: var(--gray);
    pointer-events: none;
    cursor: default;
  }
</style>

{#if language === "en"}
<nav>
  <a class='{segment === undefined ? "selected" : ""}' href="en">Cyxym</a>
  <a
    rel="prefetch"
    class='{segment === "history" ? "selected" : ""}'
    href="en/history"
    >History</a
  >
  <a
    rel="prefetch"
    class='{segment === "guide" ? "selected" : ""}'
    href="en/guide"
    >Guide</a
  >
  <a
    rel="prefetch"
    class='{segment === "people" ? "selected" : ""}'
    href="en/people"
    >People</a
  >
</nav>
{:else}
<nav>
  <a class='{segment === undefined ? "selected" : ""}' href="/">Cyxym</a>
  <a
    rel="prefetch"
    class='{segment === "history" ? "selected" : ""}'
    href="/history"
    >История</a
  >
  <a
    rel="prefetch"
    class='{segment === "guide" ? "selected" : ""}'
    href="/guide"
    >Гид</a
  >
  <a
    rel="prefetch"
    class='{segment === "people" ? "selected" : ""}'
    href="/people"
    >Люди</a
  >
</nav>
{/if}
