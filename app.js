const app = Vue.createApp({
    // data, functions to react to events
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            books: [
                { title: "name of the wind", author: "patrick rothfuss" },
                { title: "the way of the kings", author: "brandon sanderson" },
                { title: "the final empire", author: "brandon sanderson" }
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(title){
            // this.title = 'Words of Radiance'
            this.title = title;
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            // console.log(e, e.type);
            // if(data) console.log(data);
        },
        handleMousemove(e){
            // console.log(e)
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
})

app.mount('#app')