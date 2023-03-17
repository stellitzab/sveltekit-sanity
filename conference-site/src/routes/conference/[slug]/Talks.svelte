<script lang="ts">
	import { each } from "svelte/internal";
	import type {Talk } from "../../../../lib/types";

    export let talks: Talk[];

</script>

<div class="container">

    {#each talks as Talk }
    <div class="card">
        <div class="header">
           Title: <br> {Talk.title}
        </div>
        <div class="speaker">
            Speaker: {Talk.speaker}
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
        border: 2px solid;
        background-color: #0B7189;
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

    .speaker {
        font-size: 1.2em;
        padding-top: 20px;
    }

    .header {
        font-size: 2em;
        text-align: center;
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
