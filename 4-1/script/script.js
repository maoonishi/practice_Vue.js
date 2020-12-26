new Vue({
    el: '#app',
    data() {
        return {
            count: 59
        };
    },
    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        }
    },
    computed: {
        isPass: function() {
            return this.count >= 60;
        }
    }
});