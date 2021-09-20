<script>
  import { slide } from 'svelte/transition'
  import CloudOffline from 'carbon-icons-svelte/lib/CloudOffline16'
</script>

<div class="banner" transition:slide>
  <div>
    <CloudOffline aria-label="Offline Cloud" />
    <p>You are currently offline. Changes will be synced when you re-connect</p>
  </div>
</div>
