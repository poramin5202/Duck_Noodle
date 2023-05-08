<template>
    <div>
        <NavDuck />
        <v-container class="pb-0 pt-0">
            <v-row>
                <v-col cols="12">
                    <v-btn class="w100 my-btn mt-0 " width="100%" rounded color="primary" dark  @click="gohome"> 
           Next </v-btn>
                </v-col>
                
                <v-col cols="6">

                    <v-card class="mx-auto my-12" max-width="100%">
                        <v-img height="150" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                        <v-card-title>Cafe Badilico</v-card-title>

                        <v-card-text class="pb-0">
                            <v-row align="center" class="mx-0">
                                <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

                                <div class="grey--text ms-4">
                                    4.5 (413)
                                </div>
                            </v-row>

                            <div class="my-4 text-subtitle-1">
                                ราคา 45 บาท
                            </div>
                        </v-card-text>
                    </v-card>
                   
                </v-col>
                <v-col cols="6">

<v-card class="mx-auto my-12" max-width="100%">
    <v-img height="150" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text class="pb-0">
        <v-row align="center" class="mx-0">
            <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

            <div class="grey--text ms-4">
                4.5 (413)
            </div>
        </v-row>

        <div class="my-4 text-subtitle-1">
            ราคา 45 บาท
        </div>
    </v-card-text>
</v-card>

</v-col>
            </v-row>
        </v-container>
        <Footduck />
    </div>
</template>

<script>
  export default { 
  methods:{
    gohome(){
        this.$router.push("../home")
      }
    }
    
  }  
  </script>