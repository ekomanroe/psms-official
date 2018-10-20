<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- toggle untuk mobile web -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">
          <img class="header-logo" src="../assets/logo_psms.png">
        </a>
        <span>Official Website PSMS Medan</span>
      </div>

      <!-- bungkus semua menu dalam 1 form collapsible -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav" v-for="menu in menuItems">
          <li>
            <router-link :to="menu.link">{{menu.name}}</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">OFFICIAL STORE</a></li>
          <li><a href="#">KINANTAN TV</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Header',
    data () {
      return {
        msg: 'This is header application'
      }
    },
    created () {
      this.$store.dispatch('getMenuItems')
    },
    computed: {
      ...mapGetters(['menuItems'])
    }
  }
</script>

<style scoped>
  .navbar-toggle {
    float: left;
  }

  .navbar {
    background-color: #f5f5f5;
  }

  .header-logo {
    inline-size: 40px;
    margin-top: -15px;
  }

  li {
    text-align: left;
  }
</style>
