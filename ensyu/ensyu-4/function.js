//1
function Name (name1, name2) {
    return `${name1}${name2}`
}

const getName = Name("Onishi","Mao")
console.log(getName);

//2.
const add = (a,b) => {
    return a + b;
};

const sum = add (1,3);
console.log(sum);

//3.
const check = (number) => {
    return number % 2 === 0;
};

if(check(100)) {
    console.log("偶数");
} else {
    console.log("奇数");
}

//4.
const abc = (a,b) => {
    return a + b;
};

const call = (callback) => {
    const sum = abc (5,2)
    console.log(`${sum}(コールバック関数使用)`);
    callback();
}
call(abc);

//5.
function getName (Name) {
    const Name = {
        name: Name,

        text:function() {
            console.log(`名前は${Name}`);
        }
    }
    return Name;
}
getName("Mao");

//6.
const number = (num1, num2, num3) => {
    const maxNum = Math.max(num1, num2, num3);

    return maxNum;
}
let maxNumber = number(10, 5, 15);
console.log(`最大値は${maxNumber}`);

7.
function number(num1, num2, num3) {
    const maxNum = Math.max(num1, num2, num3);
    const minNum = Math.min(num1, num2, num3);
    
    return [maxNum, minNum];
}
let [maxNumber, minNumber] = number(100, 200, 300);
console.log(`最大値は${maxNumber}`);
console.log(`最小値は${minNumber}`);

8.
const Age = (age) => {
    if (age < 20) {
        console.log("20歳未満");       
    } else if (age > 30) {
        console.log("30歳以上");
    } else {
        console.log("それ以外");
        return;
    }
}
Age(27);

9.
const getMyData = (Name, Age) => {
    const Data = {
        name: Name,
        age: Age,

        text = () => {
            console.log(`名前は${Name}`);
            console.log(`年齢は${Age}`);    
        }
    }
    return Data;
}
getMyData("Mao",27);

10.
const getnum = (num) => {
    let number = [];
    for(let i = 1; i < 6; i++) {
    [number(i * num)];
    }
    return number;
}
console.log(getnum(1));