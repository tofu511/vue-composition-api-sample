import { reactive, computed, toRefs } from '@vue/composition-api'

export default function useEventSpace () {
  const event = reactive({
    capacity: 4,
    attending: ['Tim', 'Bob', 'Joe'],
    spacesLeft: computed(() => {
      return event.capacity - event.attending.length
    })
  })

  function increateCapacity () {
    event.capacity++
  }

  return { ...toRefs(event), increateCapacity }
}
