const app = Vue.createApp({
    template: "#my-app",
    data() {
        return {
            books: [
                {
                    id: 1,
                    name: '《算法导论》',
                    date: '2006-9',
                    price: 85.00,
                    count: 1
                },
                {
                    id: 2,
                    name: '《UNIX编程艺术》',
                    date: '2006-2',
                    price: 59.00,
                    count: 1
                },
                {
                    id: 3,
                    name: '《编程珠玑》',
                    date: '2008-10',
                    price: 39.00,
                    count: 1
                },
                {
                    id: 4,
                    name: '《代码大全》',
                    date: '2006-3',
                    price: 128.00,
                    count: 1
                },
            ],
        }
    },
    computed: {
        totalPrice: function () {
            let finalPrice = 0
            // for (let i = 0; i < this.books.length; i++) {
            //     finalPrice += this.books[i].count * this.books[i].price
            // }
            for (let book of this.books) {
                finalPrice += book.count * book.price
            }
            return finalPrice
        },

        // vue3已经不支持过滤器了，推荐使用计算属性和全局方法
        // 价格添加￥
        filterBooks() {
            return this.books.map(item => {
                item.newprice = '￥' + item.price
                return item
            })
        }
    },
    methods: {
        decrement(index) {
            this.books[index].count--
        },
        increment(index) {
            this.books[index].count++
        },
        removeBook(index) {
            // 从哪里开始移除，移除几个元素
            this.books.splice(index, 1)
        }
    },
})
app.mount("#app")