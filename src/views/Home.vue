<template>
  <div class="home">

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  mounted() {
    this.$get('/cgi-bin/user/cgi_personal_card',{uin:1024630744})
    .then(res=>{
      console.log(res)
    })
    .catch(r=>{
      console.log(r)
      console.log('err')
    })

  }
}
</script>
