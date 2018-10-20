<template>
  <div>
    <app-header></app-header>
    <h1>Dashboard POS</h1>
    <div v-for="item, index in menuItems">
      {{item.category}}:
      <br/>
      <router-link v-for="subItem in item.list"
                   class="sub-item"
                   :to="subItem.to"
                   v-if="!subItem.disabled">
        {{subItem.label}}<br/>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  .sub-item {
    margin-left: 60px;
  }
</style>

<script>
  import Header from 'Components/Header'

  export default {
    data () {
      return {
        menuItems: [
          {
            category: 'Master Entry',
            list: [
              {
                label: 'Items',
                to: '/dashboard/items'
              },
              {
                label: 'Stocks',
                to: '/dashboard/stocks'
              },
              {
                label: 'Merchant',
                to: '/dashboard/merchants',
                disabled: true
              }
            ]
          },
          {
            category: 'Transaction',
            list: [
              {
                label: 'Orders',
                to: '/order'
              },
              {
                label: 'Payments',
                to: '/payment'
              },
              {
                label: 'Invoice',
                to: '/invoice'
              }
            ]
          }
        ]
      }
    },
    components: {
      'app-header': Header
    }
  }
</script>
