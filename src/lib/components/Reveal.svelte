<script lang="ts">
  import { onMount } from 'svelte';

  export let as = 'div';
  export let id: string | undefined = undefined;
  export let className = '';
  export let delay = 0;
  export let threshold = 0.18;

  let element: HTMLElement;
  let visible = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible = true;
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (element) observer.observe(element);

    return () => observer.disconnect();
  });
</script>

<svelte:element
  this={as}
  {id}
  bind:this={element}
  class={`reveal ${visible ? 'is-visible' : ''} ${className}`}
  style={`transition-delay:${delay}ms;`}
>
  <slot />
</svelte:element>
