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
            bookForm: {},
        }
        }
    },

    methods: {
        prettyDollar(a) {
            const p = new Intl.NumberFormat("en-US").format(a);
            return "$" + p;
        },




        fetchBookData(){
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                    console.log(responseJson);
                    this.books = responseJson
            })
            .catch( (err) => {
                console.error(err);
            })
            .catch( (error) => {
                console.error(error);
            });
        },
        postNewBook(evt) {
            //this.bookForm.id = this.bookForm.id;        
            
            console.log("Posting!", this.bookForm);
    
            fetch('api/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.bookForm = {};
              });
          }
        },
        created() {
            this.fetchBookData();
        } //end created
    } // end Offer config
      
    Vue.createApp(BookList).mount('#bookApp');