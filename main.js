const app = Vue.createApp({
    data() {
        return {
            dummyArray: [],
            premium: true
        }
    },
    methods: {
        dummyMethod(variable) {
            this.dummyArray.push(variable)
        }
    }
})