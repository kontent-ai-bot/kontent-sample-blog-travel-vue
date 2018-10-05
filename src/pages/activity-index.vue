<template>
  <div class="tag-template">
    <the-header-generic title="Explore posts by activity" />
    <base-layout-page>
      <activity-tree :activities="activities" title="Activities" />
    </base-layout-page>
  </div>
</template>

<script>
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
      activities: [
        {
          title: 'Hiking',
          slug: 'hiking',
          description: 'A brief description goes here'
        },
        {
          title: 'Sightseeing',
          slug: 'sightseeing',
          description: 'A brief description goes here'
        }
      ]
    }
  }
}
</script>
