const imageThumbnail = Vue.component('image-thumbnail',{  //コンポーネントの宣言。第１引数にimage-thumbnailを設定
    props: {  //子コンポーネントが親コンポーネントからデータを受け取るためのオプション
        path: {  //プロパティの定義
            type: String,
            default: ''
        }
    },  //11行:pathをbackground-imageプロパティにバインディング  //12行：emitによりカスタムイベントを発行
    template: `
    <div
        class="img-box"
        :style="{ backgroundImage: 'url(' + path + ')' }"  
        @click="$emit('clickimage')"
        ></div>`
});

const modal = Vue.component('modal', {  //modalコンポーネントを宣言
    props: {
        isShown: {  //isShownプロパティを定義
            type: Boolean,
            default: false
        },
        imagePath: {  //imagePathプロパティを定義
            type: String,
            default: ''
        }
    },  //29行:v-ifによる条件付きレンダリング  //31行:emitでカスタムイベントcloseを発行  //35行:src属性にimagePathをデータバインディング
    template: `
    <div
      v-if="isShown"
      class="modal"
      @click="$emit('close')"
    >
      <img
        class="modal-img"
        :src="imagePath"
        alt="selectedImage"
        />
    </div>`
})

const app = new Vue({  //Vueインスタンスを用意
    el: '#app',
    components: {  //componentsプロパティを定義
        'image-thumbnail': imageThumbnail,  //サムネイルコンポーネントを登録。ここで設定した名前をHTML側のタグとして使用することができる。
        modal  //親コンポーネントにmodalを登録(オブジェクトのプロパティ名と値が同じ場合のJSの省略記法)
    },
    data() {
        return {
            isShown: false,  //isShownプロパティを定義
            selectedImage: '',  //selectedImageプロパティを定義
            images: [{  //imagesプロパティを定義
                path: './img/img1.jpg',   //52~69行:pathプロパティに画像のパスを設定
            },{
                path: './img/img2.jpg',
            },{
                path: './img/img3.jpg',
            },{
                path: './img/img4.jpg',
            },{
                path: './img/img5.jpg',
            },{
                path: './img/img6.jpg',
            },{
                path: './img/img7.jpg',
            },{
                path: './img/img8.jpg',
            },{
                path: './img/img9.jpg'
            }]
        };
    },
    methods: {  //メソッド追加
        onSelectImage(path) {  //onSelectImageを作成
            this.setImage(path);
            this.openModal();
        },
        openModal() {  //openModalを作成
            this.isShown = true;
        },
        closeModal() {  //closeModalを作成
            this.isShown = false;
        },
        setImage(path) {  //setImageを作成
            this.selectedImage = path;
        }
    }
});