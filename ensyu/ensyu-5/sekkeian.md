## 勤怠管理アプリ計画案

## トップページ表示内容
・名前
・開始時間（日時を選択）
・終了時間（日時を選択）
・出勤日の勤務時間
・出勤ボタン、退勤ボタン
・1月の総勤務時間
・出勤日一覧
・出勤日の削除ボタン
         

## アプリの動作及び条件
１，名前
・プルダウンで名前一覧を出す。
・名前をクリックで記録ページが切り替わる。

２，出勤ボタン
・日時を選択し、ボタンをクリックで一覧に表示
・出勤日一覧に表示、保持する。
・再度日時選択で上書き。

３、退勤ボタン
・日時を選択し、ボタンをクリックで一覧に表示
・1日の勤務時間を算出
・出勤日一覧に追加表示、保持。
・再度日時選択で上書き。

４，1月の総勤務時間
・1月の出勤日数の算出。表示
・1月の勤務時間を算出。表示

５，削除
・出勤日の削除。

## ページのレイアウト
```
                        　　　　   <h1>勤怠表</h1>

<h2>名前一覧</h2>
 <h3>名前1</h3>             
 <h3>名前2</h3>
                    　  <h2>1月の出勤日数：1月の総勤務時間</h2>　 //SUMで実働時間を算出


                      　<h2>現在日時：○○○○年○○月○○日○○時○○分</h2>　//現在日時を取得

                    <form>   
                         <p>日付選択</p>　　　　<p>時刻選択</p>　//自分で選択

                        <h1>出勤</h1> 　　　　　　　  <h1>退勤</h1>　　//出勤・退勤ボタンの設置及びクリックで「時間」の取得、一覧へ表示

                    <h1>従業員氏名</h1>
                    </form>
        　　　　　　　　　　　　　         <h2>出勤日一覧</h2>
         <table>
                　<h2>出勤時間</h2>        <h2>退勤時間</h2>       <h2>1日の実働時間</h2>
             <h3> 2021/05/01/17:00:00     2021/05/01/10:00:00         　05:00:00 </h3>    （削除ボタン）　//過去の出勤情報（保持）
             <h3> 2021/05/06/16:32:00                                            </h3>       //退勤ボタンが押されていない状態        
         </table>                                           

                            //出勤・退勤ボタンを押すと下に情報が追加されていく

```

## 目標１
・まず数人分の勤怠表ではなく1人の勤怠表。

## 目標２
・人数を増やしてデータの切り替え。

## Vue.js カレンダーライブラリ

## SQLite
・個人開発、小規模開発

## JS非同期通信 Vue.js
・Ajax
・aixos

## テーブル
・カラム一覧（ID,ユーザーID,出勤時間、退勤時間、総勤務時間)

## バリテーションチェック

## Node.jsからSQLを繋ぐ
・データ登録ができるように

## Error: cannnot find module
・モジュール名問題
Error: Cannot find module 'C:\Users\kizin\test.js'
[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)[39m
[90m    at Function.Module._load (internal/modules/cjs/loader.js:746:27)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)[39m
[90m    at internal/main/run_main_module.js:17:47[39m {
  code: [32m'MODULE_NOT_FOUND'[39m,
  requireStack: []
}

・環境変数の設定
export APP_DATA=c:\\Users\\satom\\AppData\\Roaming
export NPM_MODULE_PATH=$APP_DATA\\npm\\node_modules
export NODE_PATH=$NPM_MODULE_PATH

## Sqlite3テーブル作成
1, Sqlite内でテーブル作成 CREATE文
    .作成するテーブル名は time にする
2, Sqlite内でテストデータ作る INSERT文
3, アプリからSqlite（time）のデータを取得
4, アプリの出勤ボタン押されたらSqliteのテーブル（time）に登録する
5, アプリ側ではリアルタイムに反映される

## データ取得
・Node.js(Express)でsqlite3のデータを書く
・Vue.jsに返す