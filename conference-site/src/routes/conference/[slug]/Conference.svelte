<script lang="ts">
	import type { Conference } from "../../../../lib/types";


    export let conference: Conference;
    

</script>

<div>
    <h1>{conference.title}</h1>
</div>

<style>
    h1 {
        font-size: 3em;
        font-family: monospace;
        text-align: center;
    }
</style>