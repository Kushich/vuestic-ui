<template>
  <div>
    <va-checkbox
      label="Toggle visibility"
      v-model="isCloseableAlertVisible"
    />
    <va-alert
      v-model="isCloseableAlertVisible"
      closeable
    >
      You read this important alert message with a default close icon.
    </va-alert>

    <va-alert
      v-model="isCloseableAlertVisible"
      closeable
      close-icon="info"
    >
      You read this important alert message with a custom close icon.
    </va-alert>

    <va-alert
      v-model="isCloseableAlertVisible"
      closeable
      close-text="close"
    >
      You read this important alert message with a text instead of an icon.
    </va-alert>

    <va-alert
      v-model="isCloseableAlertVisible"
      closeable
    >
      <template slot="close">
        close
      </template>
      You read this important alert message with a slotted text instead of an icon.
    </va-alert>
  </div>
</template>

<script>
import VaCheckbox from '../../../ui/src/components/vuestic-components/va-checkbox/VaCheckbox'
export default {
  components: {
    VaCheckbox,
  },
  data () {
    return {
      isCloseableAlertVisible: true,
    }
  },
}
</script>
