<script>
	import { onMount } from 'svelte';
	let id;
	let baby;
	let span;
	onMount( () => {
	});
	let attri = {
		background:"Pink",
		skin: 'Original',
		outfit:'',
		neck:'',
		head:'',
		ears:'',
		mouth: 'Base',
		eyes:'Original'
	};
	const newId = (event) => {
		if(event.key && event.key !== 'Enter') return;

		fetch(`https://api.opensea.io/api/v1/asset/0x7c07AAfA429D952Ac3Fde9Ca037003EDB57cE14e/${id}`)
			.then(response => {
				// baby.classList.toggle('hidden');
				// span.classList.toggle('hidden');
				return response.json()
			})
			.then(response => {
				for (var member in attri) delete attri[member];
				attri.mouth = 'Base';
				attri.eyes = 'Original';
				attri.skin = 'Original';
				console.log(response.traits)
				for (let item of response.traits) attri[item.trait_type] = item.value;
				// baby.classList.toggle('hidden');
				// span.classList.toggle('hidden');
				console.log(attri);
			});
	}

	const imageError = (event) => {
		event.target.classList.add('hidden');
	}
	const imageLoad = event => event.target.classList.remove('hidden');
</script>

<main class="p-5" on:keyup={newId}>
	<!--preview-->
	<div class="mx-auto max-w-md mb-4">
		<span class="text-blue-500">Your Monkey Id</span>
		<input type="text" name="monkey-id" class="border border-black rounded-md pl-1" bind:value={id}>
		<button class="border-solid border border-black px-1 rounded-md" type="button" on:click={newId}>Click Here</button>
	</div>
	<span class="mx-auto">If the monkey is not changing, we apologize, OpenSea's servers are down.</span>
	<!-- <span class="hidden">Asking the cranes to bring your baby...</span> -->
	<div class="relative mx-auto w-64">
		<img class="absolute top-0 w-64" src="Baby Monkey Colors/{attri.background}.png" alt="background" >
		<img class="absolute top-0 w-64" src="Baby Monkey Bases/{attri.skin} Base.png" alt="base">
		<img class="absolute top-0 w-64" src="Baby Monkey Outfits/{attri.outfit}.png" alt="outfit" on:error={imageError} on:load={imageLoad}>
		<img class="absolute top-0 w-64" src="Baby Monkey Necklace/{attri.neck}.png" alt="neck" on:error={imageError} on:load={imageLoad}>
		<img class="absolute top-0 w-64" src="Baby Monkey HatHair/{attri.head}.png" alt="head/hair" on:error={imageError} on:load={imageLoad}>
		<img class="absolute top-0 w-64" src="Baby Monkey Ears/{attri.earrings}.png" alt="ears" on:error={imageError} on:load={imageLoad}>
		<img class="absolute top-0 w-64" src="Baby Monkey Mouths/{attri.mouth}.png" alt="mouth">
		<img class="absolute top-0 w-64" src="Baby Monkey Eyes/{attri.eyes}.png" alt="eyes">
	</div>
</main>

<style global lang="postcss">
	@tailwind base;
  	@tailwind components;
  	@tailwind utilities;
</style>