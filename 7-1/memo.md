## todos: []
・TODOリスト(入力内容)を1件ずつ配列要素として格納する。

## inputText()
・フォームの入力値をtextプロパティに保存する。

## addTodo()
・テキストボックスの入力内容を取得し、新しいTODOを追加する。

## resetText()
・テキストボックスの内容をリセットする。

## item.id  (index.html記載)
・リストレンダリングの中ではitemを参照できる。
・削除機能や完了、未完了の切り替え時にitem.idでidを渡すことで該当リストを操作できる。

## <span class="button-area">  </span>
・未完了TODOエリアの設定

## <div class="area-complete">  </div>
・完了TODOエリアの設定

## アロー関数
・通常のfunction式の代わりとなる構文
・function式よりもシンプルに関数を書くことができる

↓アロー関数
```php
doneTodo() {
            return this.todos.filter( todo => todo.isDone === true);
        },
```
↓従来のfunction式
```php
doneTodo() {
    return this.todos/filter(function (todo) {
        return todo.isDone === true;
    });
},
```