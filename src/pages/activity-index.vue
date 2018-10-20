<template>
  <div class="tag-template">
    <the-header-generic title="Explore posts by activity" />
    <base-layout-page>
      <activity-tree :activities="activities" title="Activities" />
    </base-layout-page>
  </div>
</template>

<script>
import { taxonomyService } from '../api/services/taxonomy-service'

import ActivityTree from '@/components/activity-tree'
import BaseLayoutPage from '@/components/base-layout-page'
import TheHeaderGeneric from '@/components/the-header-generic'

export default {
  name: 'activity-index',
  components: {
    ActivityTree,
    BaseLayoutPage,
    TheHeaderGeneric
  },
  data: function () {
    return {
      activities: []
    }
  },
  watch: {
    '$route': {
      handler: 'loadPage',
      immediate: true
    }
  },
  methods: {
    loadPage: function () {
      taxonomyService.getTree('activities').then(activities => {
        this.activities = activities
      })
    }
  }
}
</script>
