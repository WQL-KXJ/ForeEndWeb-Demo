<template>
  
  <div>
    <h2>组件内容</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link class="list-group-item" active-class="active" to="/home/news">news</router-link>
      </li>
      <li>
        <router-link class="list-group-item" active-class="active" to="/home/message">message</router-link>
      </li>
    </ul>
    <Keep-alive include="news">
      <router-view></router-view>
    </Keep-alive>
  </div>
</template>

<script>
import router from '@/router';

export default {
    name: "Home",
    components: { router }
}
</script>