## 継承とは
・クラスを作る際にクラスの一部を変更して使いまわしたいときに利用できる実装。
・クラスで定義したプロパティとメソッドをそのまま受け継ぎつつ、独自のプロパティやメソッドを差分として定義することが可能。

## 継承の書き方
１、スーパークラス（EmployeeBaseクラス）
例↓
```php
public class EmployeeBase {
    // フィールド
    String employeeName;// 社員名
    String divisionName;// 部署名
    // コンストラクタ
    public EmployeeBase() {
    }
}
```
２、継承しないクラス(EmployeeDevクラス)
```php
public class EmployeeDev{
    String employeeName;// 社員名
    String divisionName;// 部署名
    // コンストラクタ
    public EmployeeDev() {
    }
}
```
・スーパークラスと同じようなコード
・実務ではクラス内のプロパティやメソッドはこの10倍以上

３、サブクラスの継承（EmployeeDevクラス）
・継承して作成したクラスをサブクラスという
```php
public class EmployeeDev extends EmployeeBase {
    // コンストラクタ
    public EmployeeDev() {
    }

    // 引数ありコンストラクタ
    public EmployeeDev(String employeeName) {
        super.setEmployeeName(employeeName);
        super.setDivisionName(引数を指定);
    }
}
```
・サブクラスを継承するときはクラスの後ろに「extends　クラス名」をつける。

## 継承のメリット
・継承を利用することで、継承元のスーパークラス（EmployeeBase クラス）を変更すれば継承先のサブクラス（EmployeeDevクラス）まで変更が反映される。
・全てのプロパティやメソッドを使わず、継承先のサブクラス（EmployeeDevクラス）で独自のプロパティやメソッドを追加実装することで、必要以上の定義や修正をすることなく、効率的な開発が可能。
