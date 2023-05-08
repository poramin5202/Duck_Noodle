//------------------------------------------
export const state = () => ({
    line: {
       pictureUrl: '',
       displayName: '',
       userId:'',
       
    },
    user: {
       id: null,
       pwd: null,
       dialogcheck:false,
       name:''
    },
    dataHair: {
       name:'',
       phoneNumber:'',
       date:'',
       perple:null,
       time:'',
       etc:'' ,
       email:'',
    },
    bt:{
       bt:false
    },
    time:{
       dateEnd: '',
       timeEnd: '',
       minute:'',
       min:'',
       hour:'',
       hor:'',
       summinute:''
    },
    cancel:{
       pictureUrl: '',
       displayName: '',
       userId:'',
       dateEnd: '',
       timeEnd: '',
       minute:'',
       min:'',
       hour:'',
       hor:'',
       summinute:'',
       name:'',
       phoneNumber:'',
       date:'',
       perple:'',
       time:'',
       etc:'' ,
       Cbooking:null,
       Tbooking:null,
    },
    check:{
       b1:null,b2:null, b3:null, b4:null,
       b5:null,b6:null,b7:null,b8:null,
       b9:null,b10:null,
       t1:null,t2:null,t3:null,t4:null,t5:null,
       t6:null,t7:null,t8:null,t9:null,t10:null,
       t11:null,t12:null,t13:null,t14:null,t15:null,
       t16:null,t17:null,t18:null,t19:null,t20:null,
       t21:null,t22:null,t23:null,t24:null,t25:null,
       t26:null,t27:null,t28:null,t29:null,t30:null,
       t31:null,t32:null,t33:null,t34:null,t35:null,
       t36:null,t37:null,t38:null,t39:null,t40:null,
       t41:null,t42:null,t43:null,t44:null,t45:null,
       t46:null,t47:null,t48:null,t49:null,t50:null,
    },
    stopday:{
       Sun:null,
       Mon:null,
       Tue:null,
       Wed:null,
       Thu:null,
       Fri:null,
       Sat:null,
       d1:null,d2:null,
       d3:null,d4:null,
       d5:null,d6:null,
       d7:null,d8:null,
   
    },
    promptpay:{
       promptpay:null,
       bath:null,
       test:null,
       Cbooking:null,
       Tbooking:null
    }
   })
   //------------------------------------------
   export const getters = {
   getLine(state){
       return state.line
    },
    getDatahair(state){
       return state.dataHair
    },
    getBt(state){
       return state.bt
    },
    getTime(state){
       return state.time
    },
    getCancel(state){
       return state.cancel
    },
    getEmail(state){
       return state.email
    },
    getCheck(state){
       return state.check
    },
    getStopday(state){
       return state.stopday
    },
    getPromptpay(state){
       return state.promptpay
    },
    getUser(state){
       return state.user
    }
   }
   //------------------------------------------
   export const mutations = {
       SET_LINE(state,data){
           state.line = {
               ...state.line,
               ...data
           }
       },
       SET_DATAHAIR(state,data){
           state.dataHair = {
               ...state.dataHair,
               ...data
           }
       },
       SET_BT(state,data){
           state.bt = {
               ...state.bt,
               ...data
           }
       },
       SET_TIME(state,data){
           state.time = {
               ...state.time,
               ...data
           }
       },
       SET_CANCEL(state,data){
           state.cancel = {
               ...state.cancel,
               ...data
           }
       },
       SET_EMAIL(state,data){
           state.email = {
               ...state.email,
               ...data
           }
       },
       SET_CHECK(state,data){
           state.check = {
               ...state.check,
               ...data
           }
       } ,
       SET_STOPDAY(state,data){
           state.stopday = {
               ...state.stopday,
               ...data
           }
       },
       SET_PROMPTPAY(state,data){
           state.promptpay = {
               ...state.promptpay,
               ...data
           }
       },
       SET_USER(state,data){
           state.user = {
               ...state.user,
               ...data
           }
       }
   
   }
   //------------------------------------------
   export const actions = {
       setLine({ commit},data){
           commit('SET_LINE',data)
       },
       setDatahair({ commit},data){
           commit('SET_DATAHAIR',data)
       },
       setbt({ commit},data){
           commit('SET_BT',data)
       },
       setTime({ commit},data){
           commit('SET_TIME',data)
       },
       setCancel({ commit},data){
           commit('SET_CANCEL',data)
       },
       setEmail({ commit},data){
           commit('SET_EMAIL',data)
       },
       setCheck({ commit},data){
           commit('SET_CHECK',data)
       },
       setStopday({ commit},data){
           commit('SET_STOPDAY',data)
       },
       setPromptpay({ commit},data){
           commit('SET_PROMPTPAY',data)
       },
       setUser({ commit},data){
           commit('SET_USER',data)
       }
   }