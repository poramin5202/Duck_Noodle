<template>
    <div>
        <NavDuck />
        <v-container class="pb-0 pt-0">
            <v-row>
                <v-col cols="12">

                </v-col>
                <v-col cols="6">
                    <v-btn class="w100 my-btn mt-0 " width="100%" rounded color="primary" dark @click="gomenu">
                        ดูเมนูข้าว </v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn class="w100 my-btn mt-0 " width="100%" rounded color="primary" dark @click="goNoodle">
                        ดูเมนูก๋วยเตี๋ยว</v-btn>
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
            this.$router.push("/home/menu")
        },
        goNoodle() {
            this.$router.push("/home/menuNoodle")
        }
    }

}
</script>