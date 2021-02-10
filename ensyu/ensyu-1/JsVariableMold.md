## 文字列型(String)
 ・一連の文字の意。テキストを代入したデータは文字列で表される。
 ・文字列はダブルクォート[""]、シングルクォート['']で囲まれる場合がある。

## 数値型(Number)
・文字列のように関連する特別の構文はない。"5"のようにクォートで囲うと文字列内の文字とみなされるので注意。
・数値型は15桁まで有効。
・加法(+)、減法(-)、除法(/)、乗法(*)の四則計算が使用可能。
・変数計算も可能。
(例)
```php
var elves = 3;
var dwarves = 7;
var men = 9;
var sauron = 1;

var ringsOfPower = elves + dwarves + men + sauron; // returns 20
```

・特殊計算型
1.非数(NaN)
・技術的には数値型にあるにもかかわらず「数値でない」ことを意味する。
・別のデータ型を使って無効な計算をしようとすると結果がNaNになる。
(例)
```php
var nope = 1 / "One"; // returns NaN
```

2.無限大(Infinity)
・技術的には数値型で、0で割ったり、大きすぎる数値を計算したりした結果を表す。
(例)
```php
var beyond = 1 / 0; // returns Infinity
```
## ブール型(Boolean)
・真(true)か偽(false)のどちらかの値を受け取る
・多くの場合は2つのものが等しいかどうか、または計算式の結果が真か偽かをチェックするために使用。
(例)
```php
/* Check if 7 is greater than 8 */
7 > 8; // returns false

/* Check if a variable is equal to a string */
var color = "Blue";

color === "Blue"; // returns true
```

## Undefined型
・この変数には値が入っていない。
・変数はキーワードvarで宣言するが、値が代入されるまでその変数はUndefinedとなる。
(例)
```php
var thing; // returns undefined
```
・変数がvarで宣言されていない場合もUndefinedとなる。
```php
typeof anotherThing; // returns undefined
```

## Null型
・この変数はなにも表現しない値。
・意図的に値がなにも入っていない。存在しないもの、ほかのどのデータ型にも該当しないものを表す。
(例)
```php
var empty = null;
```

## シンボル型(Symbol)
・一意で不変な値のデータ型。
・書き換え可能なほかのデータ型と違って、個々のシンボルが完全に一意的なトークン。
(例)
```php
var sym = Symbol();
```
