<template>
    <div>
        <NavDuck />
        <v-container class="pb-0 pt-0">
            <v-row>
                <v-col cols="12" class="text-center pt-5">
                    <h1 class="text-primary text-decoration-underline"> Menu <v-icon>mdi-hand-wave</v-icon> </h1>

                </v-col>
                <v-col cols="6">
                    <v-btn class="w100 my-btn mt-0 " width="100%" rounded color="primary" dark @click="gomenu">
                        ดูเมนูข้าว </v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn class="w100 my-btn mt-0 " width="100%" rounded color="primary" dark @click="goNoodle">
                        ดูเมนูก๋วยเตี๋ยว</v-btn>
                </v-col>
                <v-col cols="12" class="text-center pt-5">
                    <h3 class="text-primary text-decoration-underline"> รายละเอียด <v-icon>mdi-format-list-bulleted</v-icon>
                    </h3>
                </v-col>
                <v-col cols="12">
                    <ul>
                        <li>
                            รับทำข้าวกล่อง
                        </li>
                        <li>
                            เบอร์โทร : 0861515202
                        </li>
                        <li>
                            เวลาเปิด-ปิด 07.00 น. - 15.00 น.
                        </li>
                    </ul>
                </v-col>
                <v-col cols="12">
                    <center>
                    <v-img max-height="150" max-width="250" 
                        src="https://organic-village.co.th/wp-content/uploads/2021/11/duck2.jpeg"></v-img>
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
            this.$router.push("/home/menu")
        },
        goNoodle() {
            this.$router.push("/home/menuNoodle")
        }
    }

}
</script>