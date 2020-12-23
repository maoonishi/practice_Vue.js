## 条件付きレンダリング
・ある条件を満たすときのみレンダリングを行う。
・条件分岐は、HTML側で行う。
・特定の条件に当てはまった場合のみレンダリングを行う。
・それ以外の場合はレンダリングを実行しない処理を自動的に行う。

## 算出プロパティの省略形(省略していないコードはscript.js参照)
```php
computed: {
    isPass() {
        return this.count >= 60;
    }
}
```

## 算出プロパティを使用していない場合(JS側)
```php
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
    }
});
```

## 算出プロパティを使用していない場合(HTML側)
```php
<body>
        <div id='app'>
            <button
            @click="increment"
            >+1</button>
            <button
            @click="decrement"
            >-1</button>
            <p>{{ count }}</p>
            <div v-if="count >= 60">
                <p>合格</p>
                <section>
                    <h2>おめでとう</h2>
                    <p>これからも頑張りましょう</p>
                </section>
            </div>
        </div>
```

・(js側)(HTML側)のコードのようにv-ifの条件式の中ではjsのロジックをかける。
・しかし、見た目を表すHTMLにjsのロジックが入るのは望ましくない。
・複雑な処理を書くほど、HTMLの可読性を下げてしまうため。

## v-show
・v-ifと使い方は全く同じ
・v-show="isShow"という書き方で要素の表示、非表示を切り替える。

## v-showとv-ifの違い
・要素の表示や非表示をjsでなく、cssのdisplay:noneで行う
・v-elseやv-else-ifのような分岐は使用できない。