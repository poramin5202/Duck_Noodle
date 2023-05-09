<template>
    <div>
        <Navadmin />
        <v-container class="pb-0 pt-0">
            <v-row>
                <v-col cols="12" class="text-center pt-5">
                    <h1 class="text-primary text-decoration-underline"> เมนูต่างๆ <v-icon>mdi-hand-wave</v-icon> </h1>

                </v-col>
                <v-col cols="6">
                    <v-btn class="w100 my-btn mt-0 " width="100%" rounded color="primary" dark @click="gomenu">
                        แก้ไขเมนูข้าว </v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn class="w100 my-btn mt-0 " width="100%" rounded color="primary" dark @click="goNoodle">
                        แก้ไขเมนูก๋วยเตี๋ยว</v-btn>
                </v-col>
                <v-col cols="12">
                    <v-btn class="w100 my-btn mt-0 " width="100%" rounded color="primary" dark @click="gosum">
                        แก้ไขเมนูกับข้าว</v-btn>
                </v-col>
                <v-col cols="12">
                    <v-btn class="w100 my-btn mt-0 " width="100%" rounded color="primary" dark @click="go">
                        แก้ไขรายละเอียด</v-btn>
                </v-col>
                <v-col cols="12">
                    <center>
                    <v-img 
                        :src="this.im"></v-img>
                    </center>
                </v-col>
            </v-row>
        </v-container>
        <Footduck />
    </div>
</template>
<script>
export default {
    methods: {
        gomenu() {
            this.$router.push("/admin/editrice")
        },
        goNoodle() {
            this.$router.push("/admin/editNoodle")
        },
        gosum() {
            this.$router.push("/admin/editMenu")
        },
        go() {
            this.$router.push("/admin/editDetail")
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