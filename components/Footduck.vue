<template>
    <div class="mt-10">
        <v-footer padless>
            <v-col
            class="text-center "
            cols="12"
            >
                <span>
                {{ new Date().getFullYear() }} — <strong>Nuxt+Vuetify</strong>
                <img class="rotating-image resized-image" src="/favicon.ico" >
                <img class="rotating-image resized-image" src="/v.png" alt="Vuetify.js">
                </span>
                <h6>By.Poramin Boonchusawad (Jom)</h6>       
            </v-col>
        </v-footer>  
    </div>
</template>
<script>
  export default { 
  methods:{
      logout(){
        
      }
  },  
    data(){
      return{
        form:{
          perple:this.$store.getters.getDatahair.name
        }
      }
    },
      computed: {
          getLine(){
             return this.$store.getters.getLine;
          },
          getDatahair(){
             return this.$store.getters.getDatahair;
          },          
      },      
  };
  </script>
<style lang="scss" scoped>
.rotating-image {
    animation: rotation 8s infinite linear;
    transform-origin: center;
    transform-style: preserve-3d;
    animation: rotation 3s infinite linear; //ความเร็วในการหมุนภาพ
  }
  @keyframes rotation {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
  .resized-image {
    width: 25px;
    height: 25px;
  }
</style>