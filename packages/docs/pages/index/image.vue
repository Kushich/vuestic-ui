<template>
  <docs-content :config="configComputed"/>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import DocsContent from '../../components/DocsContent'
import imageConfig from '../../components/page-configs/va-image/page-config'

@Component({
  components: {
    DocsContent,
  },
})
export default class Image extends Vue {
  get configComputed () {
    return imageConfig
  }
}
</script>
