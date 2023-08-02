const { createApp } = Vue
      
createApp({
  data() {
    return {
        product: "Pizza",
        type: "Orientale",
        price:12,
        codePromo:'royale',
        image:"assets/images/pizza-1.jpg",
        sale: false,
        notAvailable: false,
        ingredients: [
          "Olives",
          "Poulet roti",
          "Bacon",
          "Poivrons",
          "Champignons",
          "Mozzarella",
          "Oeuf",
        ],
        sauces: [
          {
            id: 1001,
            type: "Sauce tomate",
            backgroundColor:"#db4006",
            color:"#fff",
            image: "assets/images/pizza-1.jpg"
          },
          {
            id: 1002,
            type: "Crème fraîche",
            backgroundColor:"#e9cb8f",
            color:"#000",
            image: "assets/images/pizza-2.jpg"
          },
        ],
        energy: {
          Kcal:242,
          Glucides: 27.99,
          Fibres: 1.75,
          Proteines: 9.62,
          Sel: 11,
        },
        totalPrice: 0,
        nbrProduct: 0,
        promo: "",
    }
  },

  methods: {
    addProduct() {
      if(this.sale){
        this.nbrProduct += 1;
        this.totalPrice = (this.price - 5) * this.nbrProduct;
      }else{
        this.nbrProduct += 1;
        this.totalPrice = this.price * this.nbrProduct;
      }
    },

    updateImage(newLinkImage){
      this.image = newLinkImage;
    },

    toggleStateSale(){
      if (!this.notAvailable){
        this.sale = !this.sale;
      }
    },

    toggleStateNotavailable(){
        if(this.notAvailable){
          this.notAvailable= false;
        }else{
          this.notAvailable = true;
        }
    },

    toggleCodePromo(){
      if (!this.notAvailable){
        if(this.promo == ''){
          this.promo ='royale'
        } else {
          this.promo = ''
        }
      } else {
        this.promo = ''
      }

    }

  },

  computed: {
    title() {
      return this.product + " " + this.type ;
    }
  }

}).mount('#app')