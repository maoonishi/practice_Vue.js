## カプセル化サンプルコード
```php
public class Student {

  //学生番号
  private int id;

  //名前
  private String name;

  //コンストラクタ
  Student(int id, String name){

    //クラスフィールドに値を設定
    this.id = id;
    this.name = name;

  }

  public void inform(){

    System.out.println("学生番号:" + id + " 名前:" + name);

  }

}

public class Sample {

  public static void main(String[] args) {

    //Studentクラスのインスタンスを作成する
    Student s1 = new Student(53,"山田太郎");

    //inform()メソッドの呼び出し
    s1.inform();

  }
}
```

## カプセル化とは
・カプセル化とはデータと実装を隠蔽すること。
・利用者側のクラスではinform()メソッドを呼べば「学生番号:○○ 名前:○○」という出力ができるということが分かっていればinform()メソッドの内部がどうなっているかを意識せずに使うことができます。
・サンプルのinform()メソッドのように、他クラスから利用できるメソッドにはpublic修飾子をつける。
・クラスの利用者はpublicにされたメソッドの使い方が分かっていれば、内部処理を意識せず使うことができるというのが、カプセル化されたクラス

## カプセル化の意義（メリット）
・内部処理を知らずともそのクラスを利用することができるため、プログラムの拡張が容易になる。
・機能をAPIとしてクラス単位で提供できるため、プログラムの構造が整理される。