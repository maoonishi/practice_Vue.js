## コンポーネント
・特定の機能を保有した再利用可能な「部品」。
・[Textbox]、[Textarea]、[Button]などが部品（コンポーネント）の意。

## ルートコンポーネント
・最も上の階層にあり、全てのコンポーネントを集約するコンポーネント。
・今回はサムネイルとモーダルを子コンポーネントとして実装。

## コンポーネント指向開発
・複数のコンポーネント（部品）を組み合わせて、Webアプリを構築する開発。
・同じUIパーツを複数のページに実装する場合、従来は同じコードを何度も書いていた。
・機能ごとにコンポーネントとして分割した部品を再利用できる。

## 今回演習のコンポーネント
・サムネイル...画像のパスを受け取り表示。画像がクリックされたらイベントを伝える。親コンポーネント。
・モーダル.....画像のパスを受け取り表示。クリックしたら閉じる。子コンポーネント。
の２つ使用

##　コンポーネントの親子関係
・親コンポーネント...取り込む側のコンポーネント
・子コンポーネント...取り込まれる側のコンポーネント
・孫コンポーネント...子コンポーネントがさらに含む、深い階層の子コンポーネント
・親子関係になったコンポーネント同士は、お互いにデータの受け渡し、イベントハンドリングのやり取りを行う。

## Vue.jsに用意された「props」機能
・親から子に渡されるデータ。
・一度データが渡されたら、親のデータの変更内容を子にも常時伝え続ける。
・書き方
```php
props: {
    プロパティ名: {
        ルールの指定
    }
}
```

## Vue.jsに用意された「emit」機能
・子から親にイベントの伝達やデータの受け渡しができる機能。
・子でemit機能を使い、カスタムイベントを発行することで、親側に用意されたメソッドを実行。
・書き方
```php
$emit(イベント名, [親コンポーネントに渡すデータ])
```

## トランジション(transition)
・要素にアニメーションを付けるための,Vue.jsの機能。

## String
・文字列型
・文字リテラル

## Boolean
・trueとfalseしか存在しない型
・真偽値

## IntegerもしくはNumber
・数値型（イント）
・文字列（''）はエラー
・trueとfalseはエラー

```php
/*
 <body>
       <div id="app">
           <div class="wrap">
               <image-thumbnail
                 v-for="(img, i) in images"   //v-forで画像のパスをリストレンダリング
                 :key="i"
                 :path="img.path"  //path属性にimg.pathをバインディング
                 @clickimage="onSelectImage(img.path)"  //@clickimageが動作し、onSelectImageを呼び出す
               ></image-thumbnail>
               <transition name="fade">  //transitionタグを追加
                                              //↓image-path属性にselectedImageをバインディング
                   <modal :is-shown="isShown" :image-path="selectedImage" @close="closeModal" />
                   　　　 //↑is-shown属性にisShownをバインディング                  //↑カスタムイベントcloseModalをバインディング
               </transition>
           </div>
       </div>
*/
```