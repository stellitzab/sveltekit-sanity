<script lang="ts">
	import { each } from "svelte/internal";
	import type {Speaker } from "../../../../lib/types";

    export let speakers: Speaker[];

</script>

<div class="container">

    {#each speakers as Speaker }
    <div class="card">
        <div class="image">
            <img src={Speaker.imageUrl} alt="hot man" width="150" height="150">
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

    .card {
        min-width: 30vw;
        min-height: 20vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        text-align: center;
    }

    .container {
        display: flex;
        justify-content: center;

    }

    img {
        border-radius: 50%;
    }

    h1 {
        font-size: 3em;
        font-family: monospace;
        text-align: center;
    }
</style>