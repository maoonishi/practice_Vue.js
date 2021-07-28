const VueCtkDateTimePicker = window['vue-ctk-date-time-picker'];  //日付選択
Vue.component('vue-ctk-date-time-picker', VueCtkDateTimePicker);  //日付選択

new Vue({
    el:"#app",
    data: {
        label: ["従業員一覧"],      //プルダウンメニュー
        listlabel:["Onishi","Sawa"],
        active:"",
        date: '',       //現在日時の取得
        time: '',
        week: [' (日) ', ' (月) ', ' (火) ', ' (水) ', ' (木) ', ' (金) ', ' (土) '],
        value: null,    //日付選択ライブラリ
        value2: null,
        items: [
            {id: '1' , name: 'Onishi' , in_time: '' , out_time: '' , total_time: ''}
        ]
    },
    methods: {
        dropdown(list) {        //プルダウンメニュー
            console.log(this.active);
            this.active = this.active === list ? "": list;
        },
        updateTime: function() {        //現在日時の取得
            let currentdate = new Date() 

            this.time = this.zeroPadding(currentdate.getHours(), 2) + ':' + this.zeroPadding(currentdate.getMinutes(), 2) + ':' + this.zeroPadding(currentdate.getSeconds(), 2)　//時:分:秒に整形
            this.date = this.zeroPadding(currentdate.getFullYear(), 4) + '年' + this.zeroPadding(currentdate.getMonth() + 1, 2) + '月' + this.zeroPadding(currentdate.getDate(), 2) + '日' + this.week[currentdate.getDay()]　//～年～月～日（曜日）に整形
        },
        zeroPadding: function(num , len) {   //現在日時が1桁の場合「０」を先頭に追加　例：5月　→　05月
            let zero = '';

            for(var i = 0; i < len; i++) {
                zero += '0';
            }

            return (zero + num).slice(-len);
        },
        timeDate: function() {
            this.value
            console.log(this.value);
        },
        timeDate2: function() {
            this.value2
            console.log(this.value2);
        }
        },
        mounted: function() {           //現在日時の取得
        let timerID = setInterval(this.updateTime, 1000);
    }
});

