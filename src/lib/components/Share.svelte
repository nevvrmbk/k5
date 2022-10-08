<script lang="ts">
    import { share } from '$lib/utils';
</script>

<button on:click={ async () => {
    await share();
}}>Share</button>
