<template>
  <div class="header">
      
  </div>
</template>

<script>
export default {
  data(){
    return{
      stenderlist:[]//投标列表
    }
  },
  methods:{
    getstenderlist(){
      let userid = this.$store.state.user.id;
      console.log(userid)
    }
  },
  created(){
    this.getstenderlist()
  }

}
</script>

<style scoped>
.header{
    width: 100%;
    height: 600px;
    border: 1px solid;
    margin: 0 5px;
}

</style>