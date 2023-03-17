<script lang="ts">
	import { each } from "svelte/internal";
	import type {Speaker } from "../../../../lib/types";

    export let speakers: Speaker[];

</script>

<div class="container">
    {#each speakers as Speaker }
    <div class="card">
        <div class="image">
            <img src={Speaker.imageUrl} alt="hot man" width="100" height="100">
        </div>
        <div class="header">
           Name: {Speaker.name}
        </div>
        <div>
            Title: {
                 Speaker.title
            }
        </div>
    
    </div>
{/each}
</div>

<style>

    div {
        font-family: monospace;
    }

    img {
        border-radius: 50%;
    }
</style>