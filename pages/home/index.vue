<template>
    <div>
        <NavDuck />
        <v-container class="pb-0 pt-0">
            <v-row>
                <v-col cols="12">
                    <v-btn class="w100 my-btn mt-0 " width="100%" rounded color="primary" dark  @click="gomenu"> 
           Next </v-btn>
                </v-col>
            </v-row>
        </v-container>
        <Footduck />
    </div>
</template>
<script>
  export default { 
  methods:{
      gomenu(){
        this.$router.push("/home/menu")
      }
    }
    
  }  
  </script>