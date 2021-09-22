const Person = {
    data() {
      return {
        "user": {},
        }
    },

        computed: {
        prettyBirthday() {
            return dayjs(this.result.dob.date)
            .format('D MMM YYYY')
        }
    },
    // condensed & modded from class //


    methods: {
        fetchUserData() {
            fetch('https://randomuser.me/api/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.user = responseJson.results[0];
            })
            .catch( (err) => {
                console.error(err);
            })
        }
    },
    created() {
        this.fetchUserData();
    } //end created
} // end Offer config
  
Vue.createApp(Person).mount('#personApp');
//copied from class
