<template>
    <div>
        <Navadmin />

        <v-container class="pt-0 pb-0">
            <v-row>
                <v-col cols="12">
                    <div class="mt-8 text-primary text-title text-center">
                        <h4> </h4>
                        <h4> แก้ไขรายละเอียด </h4>
                    </div>
                </v-col>
                <v-col cols="12">
                    <v-file-input v-model="imageFile"  color="deep-purple accent-4" :show-size="1000" chips
                        accept="image/png, image/jpeg" placeholder="เพิ่มรูปหน้าหลัก"
                        prepend-icon="mdi-cloud-upload" label="เพิ่มรูปหน้าหลัก"></v-file-input>
                    <v-img v-if="imageFile" :src="imageUrl" />

                    <v-btn class="w100 my-btn mt-5 " width="100%" rounded color="primary" dark @click="next"> save </v-btn>
                </v-col>

                <v-col cols="6" class="pt-0 pb-0">

                    <v-img height="150" :src="this.data.im"></v-img>

                </v-col>
                <v-col cols="12" class="pr-0 pl-0 pb-0">
                    <Footduck />
                </v-col>

            </v-row>
        </v-container>



        <v-dialog v-model="dialog" max-width="290" transition="dialog-bottom-transition">

            <v-card>
                <v-card-title>Form Error</v-card-title>
                <v-card-text>
                    <h3> กรุณาใส่ข้อมูลให้ครบ</h3>
                </v-card-text>
            </v-card>
        </v-dialog>

        <v-dialog
      v-model="dialogDelete"
      persistent
      max-width="290"
      dark
    >
        <v-card>
        <v-card-title class="text-h5">
          <h5>คุณต้องการลบใช่หรือไม่</h5> 
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialogDelete = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialogDelete = false,dele()"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        
    </div>
</template>
  
<script>
export default {
    methods: {
       async next() {
            
            await this.$axios.patch(`https://duck-noodle-default-rtdb.asia-southeast1.firebasedatabase.app/Data.json`, this.data)  
                this.$router.go(0);
            
        },
       
        onFileInput() {
            if (this.imageFile != null) {
                this.imageUrl = URL.createObjectURL(this.imageFile)

                const reader = new FileReader();
                reader.readAsDataURL(this.imageFile);
                reader.onload = () => {
                    this.data.im = reader.result;
                };
                reader.onerror = error => {
                    console.log(error);
                };
            }
        },
        onPickFile() {
            this.$refs.fileInput.click()
        },
        onFilePicked(event) {
            const files = event.target.files
            let filename = files[0].name
            if (filename.lastIndexOf('.') <= 0) {
                return alert('Please add a valid file!')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imageUrl = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.image = files[0]
        },
        dataDelete(i){
            this.del=i;
            this.dialogDelete=true;
        }
    },

    data() {
        return {
            data:{
                im:null,
            },
            del:null,
            dialogDelete:false,
            price:[],
            items:[],
            dialog: false,
            form: {
                price:null,
                name: null,
                key: "m01",
                im: null
            },
            im: {
                im: null,
               
            },
            imageFile: null,
            imageUrl: null,
            rules: [
                value => !value || value.size < 2000000 || 'ไฟล์ภาพไม่เกิน 2 MB!',
            ],
            dataAxios:[]
        }
    },
    watch: {
        async imageFile(newValue) {
            await this.onFileInput()

        }
    },
    async mounted() {

        await this.$axios.get(`https://duck-noodle-default-rtdb.asia-southeast1.firebasedatabase.app/Data.json`).then((res) => {
            this.data.im = res.data.im
            console.log(res.data)
        })
                  
    }


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