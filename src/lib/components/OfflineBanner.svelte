<script>
  import { slide } from 'svelte/transition'
  import Icon from '@iconify/svelte'
  import cloudOffOutline from '@iconify/icons-mdi/cloud-off-outline'
</script>

<div class="banner" transition:slide>
  <div>
    <Icon icon={cloudOffOutline} />
    <p>You are currently offline. Changes will be synced when you re-connect</p>
  </div>
</div>
