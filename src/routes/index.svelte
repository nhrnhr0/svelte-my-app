<script context="module">
	export async function load({ page, fetch }) {
		const res = await fetch(`http://127.0.0.1:8000/api/CatalogAlbums/`);
		const items = await res.json();
		return { props: { items } };
	}
</script>

<script>
  import {store} from './../stores/store';
	export let items;

</script>
<main>
	<h1>my data: {$store}</h1>
	
	<section>
		<input bind:value="{$store}"/>
	</section>
	<ul>
		{#each items as item}
		<li>
			<a href="/catalogAlbum/{item.id}">{item.title}</a>
		</li>
		{/each}
	</ul>
  </main>

  <style lang="scss">
	  main {
		  section {
		  }
	  }
  </style>