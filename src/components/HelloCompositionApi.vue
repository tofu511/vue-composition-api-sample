<template>
  <div>
    <p>Space Left: {{ spacesLeft }} out of {{ capacity }}</p>
    <button @click="increateCapacity()">Increase Capacity</button>
    <h2>Attending</h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">
        {{ name }}
      </li>
    </ul>
    <search-event></search-event>
  </div>
</template>

<script>
import useEventSpace from '@/modules/event-space'
import SearchEvent from '@/components/SearchEvent'

export default {
  setup () {
    return { ...useEventSpace() }
  },
  components: {
    SearchEvent
  }
}
</script>

<style scoped>
</style>
