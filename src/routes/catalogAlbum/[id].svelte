
<script context="module">
	export async function load({ page, fetch }) {
		const res = await fetch(`http://127.0.0.1:8000/api/CatalogAlbums/${page.params.id}`);
		const item = await res.json();
		return { props: { item } };
	}
</script>


<script>
	export let item;
</script>
<h1>{item.id}</h1>
<h2>{item.title}</h2>
<h3>{item.description}</h3>
