<template>
    <div>
        <NavDuck />
        <v-parallax
       
       height="100%"
       src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
     >
        <v-container class="pb-0 pt-0">
            <v-row>
                <v-col cols="12">
             
                </v-col>

                
                <v-col cols="6" class="pt-0 pb-0" v-for="(item, index) in items" :key="index">

                    <v-card class="mx-auto my-12" max-width="100%">
                        <v-img height="150" :src=item.im ></v-img>
                        <v-card-title>{{item.name}}</v-card-title>

                        <v-card-text class="pb-0">
                            <v-row align="center" class="mx-0">
                                <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

                                <div class="grey--text ms-4">
                                    
                                </div>
                            </v-row>

                            <div class="my-4 text-subtitle-1">
                                ปกติ: {{price.noodle}} พิเศษ: {{price.noodlePlus}}
                            </div>
                        </v-card-text>
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
        </v-parallax>
        <Footduck />
    </div>
</template>

<script>
export default {
    data() {
    return {
      items: null,
      price:[]
    };
  },
    methods: {
        gohome() {
            this.$router.push("../home")
        }
    },
    mounted() {
        
        this.$axios.get(`https://duck-noodle-default-rtdb.asia-southeast1.firebasedatabase.app/DataNoodle.json`).then((res) => {
            this.items=res.data 
        console.log(res.data)
        })

        this.$axios.get(`https://duck-noodle-default-rtdb.asia-southeast1.firebasedatabase.app/price.json`).then((res) => {
            this.price=res.data 
        console.log(res.data)
        })
    }

}
</script>