new Vue({
    el: '#app',
    data() {
        return {
            todos: [],  //TODOリストを1件ずつ配列要素として格納
            text: ''　　//入力フォームのテキストボックスと連動させる
        };
    },
    methods: {
        inputText(e) {  //テキストボックスからの入力を引数として受け取る
            this.text = e.target.value;  //data()内に定義したtextプロパティにセット
        },
        addTodo() {
            if (!this.text) return;  //textプロパティが空の場合、以降の処理をしない

            const text = this.text;  //textプロパティの値を定数textに格納
            const id = Math.ceil(Math.random() * 1000);  //乱数を発生。idとして使用
            const todo = {
                id,  //TODOを一意に識別する。
                text,  //テキストボックスの内容
                isDone: false  //完了状態の保持
            };
            this.todos.push(todo);  //配列todosに新規追加したTODOオブジェクトを格納
            this.resetText();  //テキストボックスの内容を空にする。
        },
        resetText() {  //テキストボックスの文字を自動的にクリアするメソッド
            this.text ='';
        },
        deleteTodo(id) {
            const index = this.getIndexBy(id);
            this.todos.splice(index, 1);
        },
        toggleIsDone(id) {  //<DONE>ボタンがクリックされると実行
            const index = this.getIndexBy(id);
            this.todos[index].isDone = !this.todos[index].isDone;
        },
        getIndexBy(id) {
            const  filteredTodo = this.todos.filter(todo => todo.id === id)[0];
            const index = this.todos.indexOf(filteredTodo);
            return index;
        }
    },
    computed: {  //差分を察知し、自動で処理する
        doneTodo() {
            return this.todos.filter( todo => todo.isDone === true);
        },
        incompleteTodo() {
            return this.todos.filter( todo => todo.isDone === false);
        }
    }
});