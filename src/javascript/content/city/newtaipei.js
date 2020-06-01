window.onload = function () {
    var web = new Vue({
        el: '#web',
        data() {
            return {
                tableData: [],
                loading:true,
                data:[
                    {
                        "_id": "5ebd44e4d328590019ae4ee3",
                        "name": "小兔子鄉村輕食雜貨鋪",
                        "businesstime": "12:00-18:00",
                        "address": "新北市板橋區中山路2段255巷2號",
                        "phone": "0289533849",
                        "price": "500",
                        "website": "https://www.facebook.com/PetitTuz/",
                        "picture": "/src/image/content/newtaipei/小兔子鄉村輕食雜貨鋪.jpg",
                        "city": "newtaipei",
                        "kind": "brunch",
                        "createdAt": "2020-05-14T13:17:24.545Z",
                        "updatedAt": "2020-05-14T13:17:24.545Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd46b1d328590019ae4ee4",
                        "name": "米蘭15號 事啡之地",
                        "businesstime": "13:00-21:30",
                        "address": "新北市樹林區長壽街15之8號",
                        "phone": "0226818259",
                        "price": "220",
                        "website": "https://www.facebook.com/no15coffee/",
                        "picture": "/src/image/content/newtaipei/米蘭15號 事啡之地.jpg",
                        "city": "newtaipei",
                        "kind": "dessert",
                        "createdAt": "2020-05-14T13:25:05.344Z",
                        "updatedAt": "2020-05-14T13:25:05.344Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd4777d328590019ae4ee5",
                        "name": "老串角居酒屋-板橋江翠店",
                        "businesstime": "00:00-01:30 17:30-00:00",
                        "address": "新北市板橋區文化路二段182巷7弄15號",
                        "phone": "0222566139",
                        "price": "500",
                        "website": "https://www.facebook.com/kushikadoizakaya/",
                        "picture": "/src/image/content/newtaipei/老串角居酒屋-板橋江翠店.jpg",
                        "city": "newtaipei",
                        "kind": "japanese",
                        "createdAt": "2020-05-14T13:28:23.761Z",
                        "updatedAt": "2020-05-14T13:28:23.761Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd47d4d328590019ae4ee6",
                        "name": "減點糖LessSugar",
                        "businesstime": "12:00-20:00",
                        "address": "新北市永和區保福路二段41號",
                        "phone": "0282317605",
                        "price": "200",
                        "website": "https://www.facebook.com/lesssugar0241/",
                        "picture": "/src/image/content/newtaipei/減點糖LessSugar.jpg",
                        "city": "newtaipei",
                        "kind": "dessert",
                        "createdAt": "2020-05-14T13:29:56.271Z",
                        "updatedAt": "2020-05-14T13:29:56.271Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd4887d328590019ae4ee8",
                        "name": "樂漢堡美式餐廳LOVSS BURGER",
                        "businesstime": "11:00-21:00",
                        "address": "新北市板橋區公園街34巷20號",
                        "phone": "0229553025",
                        "price": "200",
                        "website": "https://www.facebook.com/lovss3/",
                        "picture": "/src/image/content/newtaipei/樂漢堡美式餐廳LOVSS BURGER.jpg",
                        "city": "newtaipei",
                        "kind": "brunch",
                        "createdAt": "2020-05-14T13:32:55.401Z",
                        "updatedAt": "2020-05-14T13:32:55.401Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd49f4d328590019ae4ee9",
                        "name": "Merci vielle咖啡 (三號店)",
                        "businesstime": "13:00-22:00",
                        "address": "新北市板橋區府中路50號2樓",
                        "phone": "0289653906",
                        "price": "250",
                        "website": "https://www.facebook.com/mercivielle/",
                        "picture": "/src/image/content/newtaipei/Merci vielle咖啡 (三號店).jpg",
                        "city": "newtaipei",
                        "kind": "dessert",
                        "createdAt": "2020-05-14T13:39:00.298Z",
                        "updatedAt": "2020-05-14T13:39:00.298Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd4a73d328590019ae4eea",
                        "name": "門前隱味牛肉麵",
                        "businesstime": "12:00-21:00",
                        "address": "新北市板橋區四川路一段87巷2弄12之2號1樓之1",
                        "phone": "0289516600",
                        "price": "225",
                        "website": "https://www.facebook.com/wumamii/",
                        "picture": "/src/image/content/newtaipei/門前隱味牛肉麵.jpg",
                        "city": "newtaipei",
                        "kind": "dinner",
                        "createdAt": "2020-05-14T13:41:07.700Z",
                        "updatedAt": "2020-05-14T13:41:07.700Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd4ad8d328590019ae4eeb",
                        "name": "Single Origin espresso & roast",
                        "businesstime": "10:00-18:00",
                        "address": "新北市蘆洲區仁愛街136號",
                        "phone": "0222835333",
                        "price": "100",
                        "website": "https://www.facebook.com/SingleOriginTaipei/",
                        "picture": "/src/image/content/newtaipei/Single Origin espresso & roast.jpg",
                        "city": "newtaipei",
                        "kind": "dessert",
                        "createdAt": "2020-05-14T13:42:48.606Z",
                        "updatedAt": "2020-05-14T13:42:48.606Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd4b49d328590019ae4eec",
                        "name": "良師塾人文食飲 Literati cafe'",
                        "businesstime": "11:00-20:00",
                        "address": "新北市板橋區府中路29之2號3樓",
                        "phone": "0229688101",
                        "price": "250",
                        "website": "https://www.facebook.com/liangshishu/",
                        "picture": "/src/image/content/newtaipei/良師塾人文食飲 Literati cafe'.jpg",
                        "city": "newtaipei",
                        "kind": "dessert",
                        "createdAt": "2020-05-14T13:44:41.587Z",
                        "updatedAt": "2020-05-14T13:44:41.587Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd4bacd328590019ae4eed",
                        "name": "貓欸Camulet-貓咪餐廳",
                        "businesstime": "11:00-21:00",
                        "address": "新北市板橋區文化路一段270巷3弄6號",
                        "phone": "0282581127",
                        "price": "300",
                        "website": "https://www.facebook.com/Camulet/",
                        "picture": "/src/image/content/newtaipei/貓欸Camulet-貓咪餐廳.jpg",
                        "city": "newtaipei",
                        "kind": "brunch",
                        "createdAt": "2020-05-14T13:46:20.143Z",
                        "updatedAt": "2020-05-14T13:46:20.143Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd4c39d328590019ae4eee",
                        "name": "謝謝 DOUMO",
                        "businesstime": "10:00-18:00",
                        "address": "新北市永和區水源街25號",
                        "phone": "0229265505",
                        "price": "250",
                        "website": "https://www.facebook.com/DOUMO.TW/",
                        "picture": "/src/image/content/newtaipei/謝謝 DOUMO.jpg",
                        "city": "newtaipei",
                        "kind": "brunch",
                        "createdAt": "2020-05-14T13:48:41.334Z",
                        "updatedAt": "2020-05-14T13:48:41.334Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd4c94d328590019ae4eef",
                        "name": "林太太手工石烤披薩炸雞",
                        "businesstime": "17:00-21:00",
                        "address": "新北市蘆洲區中正路283號1F",
                        "phone": "0222826685",
                        "price": "320",
                        "website": "https://www.facebook.com/linpizza1/",
                        "picture": "/src/image/content/newtaipei/林太太手工石烤披薩炸雞.jpg",
                        "city": "newtaipei",
                        "kind": "korean",
                        "createdAt": "2020-05-14T13:50:12.222Z",
                        "updatedAt": "2020-05-14T13:50:12.222Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd4ce5d328590019ae4ef0",
                        "name": "Tom&Maggy 幸福肥 手作點心",
                        "businesstime": "14:00-20:00",
                        "address": "新北市三重區集美街33巷20號",
                        "phone": "0968154115",
                        "price": "300",
                        "website": "https://www.facebook.com/tommaggy.com.tw/",
                        "picture": "/src/image/content/newtaipei/Tom&Maggy 幸福肥 手作點心.jpg",
                        "city": "newtaipei",
                        "kind": "dessert",
                        "createdAt": "2020-05-14T13:51:33.118Z",
                        "updatedAt": "2020-05-14T13:51:33.118Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd4d49d328590019ae4ef1",
                        "name": "R2義麵小棧",
                        "businesstime": "11:00-21:30",
                        "address": "新北市蘆洲區中正路166號",
                        "phone": "0282866633",
                        "price": "150",
                        "website": "https://www.facebook.com/R2pastaLuchou/",
                        "picture": "/src/image/content/newtaipei/R2義麵小棧.jpg",
                        "city": "newtaipei",
                        "kind": "dinner",
                        "createdAt": "2020-05-14T13:53:13.341Z",
                        "updatedAt": "2020-05-14T13:53:13.341Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd4da6d328590019ae4ef2",
                        "name": "雙月食品社 中和店",
                        "businesstime": "11:00-14:00 17:00-20:00",
                        "address": "新北市中和區連城路363號",
                        "phone": "0222286616",
                        "price": "250",
                        "website": "https://www.facebook.com/ShuangYueFood/",
                        "picture": "/src/image/content/newtaipei/雙月食品社 中和店.jpg",
                        "city": "newtaipei",
                        "kind": "dinner",
                        "createdAt": "2020-05-14T13:54:46.331Z",
                        "updatedAt": "2020-05-14T13:54:46.331Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd4df7d328590019ae4ef3",
                        "name": "桂舍 Kuei Fleur",
                        "businesstime": "13:00-22:00",
                        "address": "新北市板橋區民生路二段240巷21號",
                        "phone": "0222588968",
                        "price": "250",
                        "website": "https://www.facebook.com/KUEIFLEUR/",
                        "picture": "/src/image/content/newtaipei/桂舍 Kuei Fleur.jpg",
                        "city": "newtaipei",
                        "kind": "dessert",
                        "createdAt": "2020-05-14T13:56:07.771Z",
                        "updatedAt": "2020-05-14T13:56:07.771Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd4e58d328590019ae4ef4",
                        "name": "揚日式料理",
                        "businesstime": "11:40-14:00 17:30-20:00",
                        "address": "新北市中和區中正路839巷7號",
                        "phone": "0987563532",
                        "price": "300",
                        "website": "https://www.facebook.com/torisan2013/",
                        "picture": "/src/image/content/newtaipei/揚日式料理.jpg",
                        "city": "newtaipei",
                        "kind": "japanese",
                        "createdAt": "2020-05-14T13:57:44.026Z",
                        "updatedAt": "2020-05-14T13:57:44.026Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd4ea9d328590019ae4ef5",
                        "name": "滿初•烘培工作室 • Mind True Roasting x Baking House",
                        "businesstime": "13:00-22:00",
                        "address": "新北市永和區智光街57號",
                        "phone": "0229405536",
                        "price": "350",
                        "website": "https://www.facebook.com/mindtrueroasting/",
                        "picture": "/src/image/content/newtaipei/滿初•烘培工作室 • Mind True Roasting x Baking House.jpg",
                        "city": "newtaipei",
                        "kind": "dessert",
                        "createdAt": "2020-05-14T13:59:05.980Z",
                        "updatedAt": "2020-05-14T13:59:05.980Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ebd4f86d328590019ae4ef7",
                        "name": "Mr.雪腐",
                        "businesstime": "12:00-22:00",
                        "address": "新北市永和區得和路2號",
                        "phone": "0286685200",
                        "price": "80",
                        "website": "https://www.facebook.com/Mr%E9%9B%AA%E8%85%90-1033878153307086/",
                        "picture": "/src/image/content/newtaipei/Mr.雪腐.jpg",
                        "city": "newtaipei",
                        "kind": "dessert",
                        "createdAt": "2020-05-14T14:02:46.767Z",
                        "updatedAt": "2020-05-14T14:02:46.767Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0ed71e9701e00224e6615",
                        "name": "富鼎砂鍋粥",
                        "businesstime": "11:00-14:00 17:00-22:00",
                        "address": "新北市新莊區新泰路195號",
                        "phone": "0229900308",
                        "price": "500",
                        "website": "https://www.facebook.com/FUDING2014/",
                        "picture": "/src/image/content/newtaipei/富鼎砂鍋粥.jpg",
                        "city": "newtaipei",
                        "kind": "china",
                        "createdAt": "2020-05-17T07:53:21.041Z",
                        "updatedAt": "2020-05-17T07:53:21.041Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec0fa25e9701e00224e6624",
                        "name": "Eat enjoy意享美式廚房 林口三井店",
                        "businesstime": "10:00-22:00",
                        "address": "新北市林口區文化三路一段390之1",
                        "phone": "0226005881",
                        "price": "500",
                        "website": "https://www.facebook.com/eatenjoy2/",
                        "picture": "/src/image/content/newtaipei/Eat enjoy意享美式廚房 林口三井店.jpg",
                        "city": "newtaipei",
                        "kind": "american",
                        "createdAt": "2020-05-17T08:47:33.037Z",
                        "updatedAt": "2020-05-17T08:47:33.037Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec107a9e9701e00224e6638",
                        "name": "R2義麵小棧",
                        "businesstime": "11:00-21:30",
                        "address": "新北市蘆洲區中正路166號",
                        "phone": "0282866633",
                        "price": "150",
                        "website": "https://www.facebook.com/R2pastaLuchou/",
                        "picture": "/src/image/content/newtaipei/R2義麵小棧.jpg",
                        "city": "newtaipei",
                        "kind": "italy",
                        "createdAt": "2020-05-17T09:45:13.236Z",
                        "updatedAt": "2020-05-17T09:45:13.236Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11137e9701e00224e664b",
                        "name": "暹羅廚房",
                        "businesstime": "11:00-14:30 17:00-22:00",
                        "address": "新北市三重區大同北路15號",
                        "phone": "0229820363",
                        "price": "170",
                        "website": "https://www.facebook.com/siamluo/",
                        "picture": "/src/image/content/newtaipei/暹羅廚房.jpg",
                        "city": "newtaipei",
                        "kind": "thailand",
                        "createdAt": "2020-05-17T10:25:59.339Z",
                        "updatedAt": "2020-05-17T10:25:59.339Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11225e9701e00224e664d",
                        "name": "泰樂泰國料理",
                        "businesstime": "11:00-14:00 17:00-20:00",
                        "address": "新北市板橋區公園街52巷4號",
                        "phone": "0917339689",
                        "price": "230",
                        "website": "https://www.facebook.com/taylethaifood/",
                        "picture": "/src/image/content/newtaipei/泰樂泰國料理.jpg",
                        "city": "newtaipei",
                        "kind": "thailand",
                        "createdAt": "2020-05-17T10:29:57.366Z",
                        "updatedAt": "2020-05-17T10:29:57.366Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11776e9701e00224e6658",
                        "name": "港豐撈麵飯堂",
                        "businesstime": "11:30-15:00 17:00-21:00 21:30-00:00",
                        "address": "新北市板橋區新海路128號",
                        "phone": "0222598003",
                        "price": "350",
                        "website": "https://www.facebook.com/GangFengLaoMianFanTang/",
                        "picture": "/src/image/content/newtaipei/港豐撈麵飯堂.jpg",
                        "city": "newtaipei",
                        "kind": "hongkong",
                        "createdAt": "2020-05-17T10:52:38.952Z",
                        "updatedAt": "2020-05-17T10:52:38.952Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec11a12e9701e00224e665c",
                        "name": "Teaday喝茶天-茶家食堂",
                        "businesstime": "10:00-20:00",
                        "address": "新北市鶯歌區重慶街62之1號B1",
                        "phone": "0226782782",
                        "price": "400",
                        "website": "https://www.facebook.com/teaday621/",
                        "picture": "/src/image/content/newtaipei/Teaday喝茶天-茶家食堂.jpg",
                        "city": "newtaipei",
                        "kind": "hongkong",
                        "createdAt": "2020-05-17T11:03:46.262Z",
                        "updatedAt": "2020-05-17T11:03:46.262Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2a9d3e9701e00224e666e",
                        "name": "滾吧 Qunba 鍋物 北大店",
                        "businesstime": "11:30-22:00",
                        "address": "新北市樹林區學勤路318號",
                        "phone": "0226809003",
                        "price": "350",
                        "website": "https://www.facebook.com/%E6%BB%BE%E5%90%A7-Qunba-%E9%8D%8B%E7%89%A9-180277219352068/",
                        "picture": "/src/image/content/newtaipei/滾吧 Qunba 鍋物 北大店.jpg",
                        "city": "newtaipei",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T15:29:23.663Z",
                        "updatedAt": "2020-05-18T15:29:23.663Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2ac59e9701e00224e6675",
                        "name": "食尚吃到飽涮涮鍋 中和旗艦店",
                        "businesstime": "11:30-15:00 17:00-21:30",
                        "address": "新北市中和區員山路391號",
                        "phone": "0222221119",
                        "price": "329",
                        "website": "https://www.facebook.com/hotpot22221119/",
                        "picture": "/src/image/content/newtaipei/食尚吃到飽涮涮鍋 中和旗艦店.jpg",
                        "city": "newtaipei",
                        "kind": "hotpot",
                        "createdAt": "2020-05-18T15:40:09.690Z",
                        "updatedAt": "2020-05-18T15:44:58.759Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2b2c2e9701e00224e667b",
                        "name": "東港強 和牛 燒肉 蘆洲旗艦店",
                        "businesstime": "11:30-14:30 17:00-21:30",
                        "address": "新北市蘆洲區集賢路227之1號",
                        "phone": "0282820178",
                        "price": "499",
                        "website": "https://www.facebook.com/dong.gang.qiang/",
                        "picture": "/src/image/content/newtaipei/東港強 和牛 燒肉 蘆洲旗艦店.jpg",
                        "city": "newtaipei",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:07:30.515Z",
                        "updatedAt": "2020-05-18T16:19:12.791Z",
                        "__v": 0
                    },
                    {
                        "_id": "5ec2bb62e9701e00224e668c",
                        "name": "二升五合燒肉Bar",
                        "businesstime": "17:00-22:00",
                        "address": "新北市中和區連城路41號",
                        "phone": "0222462243",
                        "price": "500",
                        "website": "https://www.facebook.com/tokyo41/",
                        "picture": "/src/image/content/newtaipei/二升五合燒肉Bar.jpg",
                        "city": "newtaipei",
                        "kind": "bbq",
                        "createdAt": "2020-05-18T16:44:18.022Z",
                        "updatedAt": "2020-05-18T16:44:18.022Z",
                        "__v": 0
                    }
                ]
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData() {
                const cors = 'https://cors-anywhere.herokuapp.com/' // use cors-anywhere to fetch api data
                const url = 'http://nodejs-mongo-app-git-demo-app-project.apps.us-east-2.starter.openshift-online.com/stores/city/newtaipei' // origin api url

                /** fetch api url by cors-anywhere */
                axios.get(`${cors}${url}`)
                    .then((res) =>{
                        this.tableData = res.data
                        console.log(res.data)
                        if(this.tableData.length == 0){
                            this.tableData = this.data
                        }
                        this.loading=false
                    })
                    .catch((err) =>{
                        console.error(err)
                        this.tableData = this.data
                        this.loading = false            
                    })
            }
        }
    })
}