const app = Vue.createApp({

    mounted(){
        console.log("mounted")
        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=6f9286d54de4891ea7a5c91779e09786')
            .then(response => response.json())
            .then(data => this.items=data.results)
            
    },
    data() {
        return {
           items:[] ,
            data: new Date
        }
    },

    methods:{
        convertDate(inputFormat) {
            function pad(s) { return (s < 10) ? '0' + s : s; }
            var d = new Date(inputFormat)
            return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
        }
    },
    computed:{    
    
    },

  })
  