<template>
    <div>
        <v-app-bar
      color="#900603"
      dense
      flat
      dark
      height="60"
    >
    <v-toolbar-title>
        <div>
        <v-btn icon @click="go">
        <v-icon>mdi-home</v-icon> 
      </v-btn>
        ก๋วยเตี๋ยวเป็ดตุ๋น ลุงเล็ก
    </div>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-img src="/LogoDuck.png" height="50" contain class="ml-2 rotating-image resized-image"
    style="width: 50px; "></v-img>

        </v-app-bar>
  </div>
</template>
<script>
  export default { 
  methods:{
      go(){
        this.$router.push("/home")
      }
    }
    
  }  
  </script>
<style lang="scss" scoped>
.rotating-image {
    animation: rotation 8s infinite linear;
    transform-origin: center;
    transform-style: preserve-3d;
    animation: rotation 8s infinite linear; //ความเร็วในการหมุนภาพ
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
