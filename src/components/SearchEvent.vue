<template>
  <div>
    search for <input v-model="searchInput">
    <div>
      <p>Loading: {{ getEvents.loading }}</p>
      <p>Error: {{ getEvents.error }}</p>
      <p>Number of events: {{ getEvents.results }}</p>
    </div>
  </div>
</template>

<script>
import { ref, watch } from '@vue/composition-api'
import EventApi from '@/api/event'
import usePromise from '@/composables/promise'

export default {
  setup () {
    const searchInput = ref('')
    const eventApi = new EventApi()
    const getEvents = usePromise(search =>
      eventApi.getEventCount(search.value)
    )

    watch((searchInput), () => {
      if (searchInput.value !== '') {
        getEvents.createPromise(searchInput)
      } else {
        getEvents.results.value = null
      }
    })

    return { searchInput, getEvents }
  }
}
</script>

<style scoped>
</style>
