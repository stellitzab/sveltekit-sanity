<script lang="ts">
	import { each } from "svelte/internal";
	import type { Day } from "../../../../lib/types";
	import Speakers from "./Speakers.svelte";
	import Talks from "./Talks.svelte";

    export let days: Day[];

</script>
<div class="container">
    {#each days as Day }
    <div class="card">
        <div class="header">
            {Day.title}
        </div>
        <div class="description">
            {Day.description}
        </div>
        <div class="date">
            {Day.date}
        </div>
    </div>
{/each}

</div>

<div class="container-2">
    <h1>
        Speakers
    </h1>
    {#each days as Day }
    <Speakers speakers={Day.speakers} />
    {/each}
</div>

<div class="container-3">
    <h1>
        Talks
    </h1>
    {#each days as Day }
    <Talks talks={Day.talks} />
    {/each}
</div>


<style>

    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .card {
        background-color: #C19AB7;
        border-radius: 10%;
        padding: 20px;
        min-height: 20vh;
        min-width: 20vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;
        margin-right: 10px;
    }

    .description {
        font-family: monospace;
        font-size: 1.5em;
        padding-top: 10px;
    }

    .header {
        font-family: monospace;
        font-size: 2em;
        color: black;
        text-align: center;
    }

    .date {

        padding-top: 5vh;
        font-family: monospace;
        text-align: center;
        font-size: 1em;
        
    }

    h1 {
        font-size: 3em;
        font-family: monospace;
        text-align: center;
    }
</style>