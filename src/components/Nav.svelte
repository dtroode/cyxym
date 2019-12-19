<script>
  export let segment;
</script>

<style>
  a {
    font-size: 1.5rem;
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

<nav>
  <a class={segment === undefined ? 'selected' : ''} href="/">Cyxym</a>
  <a
    rel="prefetch"
    class={segment === 'history' ? 'selected' : ''}
    href="/history">
    История
  </a>
  <a rel="prefetch" class={segment === 'guide' ? 'selected' : ''} href="/guide">
    Гид
  </a>
  <a
    rel="prefetch"
    class={segment === 'people' ? 'selected' : ''}
    href="/people">
    Люди
  </a>
</nav>
