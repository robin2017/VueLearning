/**
 * Created by robin on 2017/10/3.
 */
var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        },
        user() {
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        reversedMessageM:function () {
            return this.message.split('').reverse().join('')
        }
    }
})