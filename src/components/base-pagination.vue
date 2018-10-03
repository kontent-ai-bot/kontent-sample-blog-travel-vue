<template>
  <nav v-if="showPaging" class="pagination" role="pagination">
    <div class="inner">
      <a class="pagination-next" v-if="showPrevious" @click.prevent="goPrevious" href="#prev">
        <i class="ic ic-arrow-left"></i> <span class="pagination-label">Newer Posts</span>
      </a>
      <span class="pagination-info">Page {{pagingDetails.currentPage}} of {{pagingDetails.maxPage}}</span>
      <a class="pagination-prev" v-if="showNext" @click.prevent="goNext" href="#next">
        <span class="pagination-label">Older Posts</span> <i class="ic ic-arrow-right"></i>
      </a>
      <div class="clear"></div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    pagingDetails: {
      type: Object,
      default: function () {
        return {
          currentPage: 1,
          perPage: 3,
          maxPage: -1,
          totalCount: -1
        }
      }
    }
  },
  computed: {
    showPaging: function () {
      return this.pagingDetails.maxPage > 1
    },
    showPrevious: function () {
      return this.pagingDetails.currentPage > 1
    },
    showNext: function () {
      return this.pagingDetails.currentPage < this.pagingDetails.maxPage
    }
  },
  methods: {
    goPrevious: function () {
      this.$emit('pageChanged', { newPage: this.pagingDetails.currentPage - 1 })
    },
    goNext: function () {
      this.$emit('pageChanged', { newPage: this.pagingDetails.currentPage + 1 })
    }
  }
}
</script>
