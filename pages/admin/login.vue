<template>
    <div>
        <NavDuck />
   
        <v-container class="pt-0 pb-0">
          <v-row>
            <v-col cols="12" >
                    <div class="mt-8 text-primary text-title text-center">
                        <h4> Login</h4>
                    <h4> กรอก UserId และ Password </h4>
                      </div>
                </v-col>
                <v-col cols="12" class="text-center pb-0">

                  <img src="/LogoDuck.png" alt="" width="200" > 
                 
                    
                </v-col>
                <v-col cols="12">
                    <v-text-field 
                         v-model="form.id"
                         dense
                         prepend-icon="mdi-account"
                         label="UserId"> 
                    </v-text-field>

                    <v-text-field 
                    class="mt-3 password"
                    type="password"
                         v-model="form.pwd"
                         dense
                         prepend-icon="mdi-key-variant"
                         label="Password"> 
                    </v-text-field>
                    <v-btn class="w100 my-btn mt-5 " width="100%" rounded color="primary" dark  @click="next"> Login </v-btn>
                </v-col>           
          </v-row>
        </v-container>
        
        
    <Footer />
    <v-dialog v-model="dialog" max-width="290" transition="dialog-bottom-transition">
            
            <v-card>
              <v-card-title>Form Error</v-card-title>
                    <v-card-text>
                      <h3> อย่ามั่วครับ อย่ามั่ว!</h3>
                   </v-card-text>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogcheck" max-width="290" transition="dialog-bottom-transition">
            
            <v-card>
              <v-card-title>ข้อมูลไม่ถูกต้อง</v-card-title>
                    <v-card-text>
                      <h3> userId หรือ password ไม่ถูกต้อง</h3>
                   </v-card-text>
            </v-card>
          </v-dialog>
  </div>
  </template>
  
  <script>
  export default { 
  methods:{
    next(){
        if(this.form.id=="admin" && this.form.pwd=="1111100000"){ 
         this.$router.push("/admin/edit")
           console.log(55)
        }else{
            this.dialog=true;
        }
    }
  },
  
    data(){
      return{
        dialog:false,
        dialogcheck:this.$store.getters.getUser.dialogcheck,
        form:{
          id:null,
          pwd:null,
        }
      }
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