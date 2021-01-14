new Vue({
    el: '#app',
    data() {
        return {
            todos: [],
            text: ''
        };
    },
    methods: {
        inputText(e) {
            this.text = e.target.value;
        },
        addTodo() {
            if (!this.text) return;  //textプロパティが空の場合、以降の処理をしない

            const text = this.text;  //textプロパティの値を変数textに代入
            const id = Math.ceil(Math.random() * 1000);  //乱数を発生。idとして使用
            const todo = {
                id,  //TODOを一意に識別する。
                text,  //テキストボックスの内容
                isDone: false  //完了状態の保持
            };
            this.todos.push(todo);  //配列todosに新規追加したTODOオブジェクトを追加
            this.resetText();  //テキストボックスの内容を空にする。
        },
        resetText() {
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
    computed: {
        doneTodo() {
            return this.todos.filter( todo => todo.isDone === true);
        },
        incompleteTodo() {
            return this.todos.filter( todo => todo.isDone === false);
        }
    }
});