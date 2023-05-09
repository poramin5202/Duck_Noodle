 <template>
  
  <v-app >
    
    <Nuxt />
  </v-app>

</template>
<style lang="scss">
/* div {
    background-color: #DDDACA;
  }*/
.v-application{ //ฟ้อนทั้งแอพ
    font-family: 'Quicksand', sans-serif;
}
.v-toolbar__title{ //กำหนดtitle
        text-align: center;
        width: 100%;
        font-weight: bold;
 }
 .v-application .primary{ //สี
  background-color: #900603 !important;
    border-color: #900603 !important;
 }
 .text-primary{
  color: #900603
  //color: #1A56BE
 }
 .text-title{
  font-size: 20px;
  font-weight: bold;
 }
 .w100{
  width: 100%;
 }
 .my-btn{
  text-transform: none !important;
  height: auto !important;
  padding: 12px !important;
  font-weight: bold !important;
 }

</style>
