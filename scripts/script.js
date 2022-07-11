const appInstance = {
  data() {
    return {
      bulbstate: true,
      buttonText: 'SWITCH'
    };
  },
  methods: {
      Controlbulb: function(){
          
          this.bulbstate = !this.bulbstate;


      }
  }


}
 Vue.createApp(appInstance).mount("#app");

// 2. how to define the data property of the vue application instance(represent the view)
