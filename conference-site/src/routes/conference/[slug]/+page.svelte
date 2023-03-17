<script lang="ts">
    import type {Conference as ConferenceType } from '../../../../lib/types'
    import Days from "./Days.svelte";
    import Conference from './Conference.svelte';
	import Speakers from './Speakers.svelte';

    export let data;
    let { conference }: {conference: ConferenceType} = data;
</script>

<Conference {conference} />
<Days days={conference.days}/>

<style>
    div {
        background: green;
    }
</style>