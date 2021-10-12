const Book = {
    data() {
      return {
        "booklist": {
            id: {},
            title: {},
            author: {},
            year: {},
            publisher: {},
            pages: {},
            msrp: {},
        }
        }
    },

    methods: {
        prettyDollar(a) {
            const p = new Intl.NumberFormat("en-US").format(a);
            return "$" + p;
        },
        fetchBookData() {
            fetch('/api/booklist/')
            .then( response => response.json() )
            .then( (responseJson) => {  
                console.log(responseJson);
                this.booklist = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        }
    },

    created(){
        this.fetchBookData();
    }
}
  
Vue.createApp(Book).mount('#booklist');