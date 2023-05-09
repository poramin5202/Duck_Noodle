<template>
    <div >
        
        <NavDuck />
        <v-parallax
       
      height="100%"
      src="https://st3.depositphotos.com/1337649/18929/v/600/depositphotos_189294426-stock-illustration-orange-background-with-line-with.jpg"
    >
        <v-container class="pb-0 pt-0">
            <v-row>
                <v-col cols="12" class="text-center pt-5">
                    <h1 class="text-primary text-decoration-underline"> Menu <v-icon>mdi-hand-wave</v-icon> </h1>

                </v-col>
                <v-col cols="6">
                    <v-btn class="w100 my-btn mt-0 "  width="100%" rounded color="#900603" dark @click="gomenu">
                        <v-icon>mdi-rice</v-icon>  ดูเมนูข้าว </v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn class="w100 my-btn mt-0 " width="100%" rounded color="#900603" dark @click="goNoodle">
                        <v-icon>mdi-noodles</v-icon>   ดูเมนูก๋วยเตี๋ยว  </v-btn>
                </v-col>
                <v-col cols="12">
                    <v-btn class="w100 my-btn mt-0 " width="100%" rounded color="#900603" dark @click="gosum">
                        <v-icon>mdi-food</v-icon> ดูเมนูกับข้าว </v-btn>
                </v-col>
                <v-col cols="12">
                    <v-btn class="w100 my-btn mt-0 " width="100%" rounded color="#900603" dark href="https://goo.gl/maps/Nm9dwcexhF6ehz729?coh=178571&entry=tt" >
                        <v-icon>mdi-map-marker</v-icon>  แผนที่ / Location  </v-btn>
                </v-col>
                <v-col cols="12">
                    <v-btn class="w100 my-btn mt-0 " width="100%" rounded color="#900603" dark href="https://www.facebook.com/profile.php?id=100048533964743" >
                        <v-icon>mdi-facebook</v-icon>  Facebook  </v-btn>
                </v-col>
                
              
                <v-col cols="12" class="text-center pt-5">
                    <h3 class="text-primary text-decoration-underline"><v-icon>mdi-details</v-icon> รายละเอียด 
                    </h3>
                </v-col>
                <v-col cols="12">
                    <ul>
                        <li>
                            รับทำข้าวกล่อง
                        </li>
                        <li>
                            เบอร์โทร : 0861566572
                        </li>
                        <li>
                            เวลาเปิด-ปิด 07.00 น. - 15.00 น.
                        </li>
                    </ul>
                </v-col>
                <v-col cols="12">
                    <center>
                        <v-img 
                            :src="this.im"></v-img>
                    </center>
                </v-col>
            </v-row>
        </v-container>

        </v-parallax>
        <Footduck />
    </div>
</template>
<script>
export default {
    methods: {
        gomenu() {
            this.$router.push("/home/menu")
        },
        goNoodle() {
            this.$router.push("/home/menuNoodle")
        },
        gosum() {
            this.$router.push("/home/sumMenu")
        }
    },
    async mounted() {

        await this.$axios.get(`https://duck-noodle-default-rtdb.asia-southeast1.firebasedatabase.app/Data.json`).then((res) => {
            this.im = res.data.im
            console.log(res.data)
        })

    },
    data() {
        return {
            im: null
        }
    }

}
</script>

