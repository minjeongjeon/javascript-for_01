// for(let i=1 ; i <=10; i++){
//     console.log("Hello World",i)
// }
// 짝수만 출력
for(let i=1 ; i <=10; i++){
    if(i%2==0){
        console.log("Hello World",i)
    }
}
// i+=2 ==> i=i+2
for(let i=2 ; i<=10 ; i+=2){
    console.log("Hello World",i)
}
// 구구단
for(let i=2; i<=9;i++){
    for(let j=1;j<=9;j++){
        console.log(i+"*"+j+"="+i*j)
    }
}

// 배열과 함께 사용하는 예시
let fruit = ["banana","apple","grape","mango","melon"]
for(let i=0; i< fruit.length;i++){
    console.log(fruit[i]);
}

// 삼육구 게임
let test = 1234
let stringValue = test.toString()
let text = ""
console.log(test)
console.log(stringValue[0]) 
for(let i=0; i<stringValue.length;i++){
    console.log(text)
}

for(let i=1; i<=50; i++){
    let stringValue = i.toString();  //숫자데이터타입을 문자데이터타입으로 변환
    let result = "" //결과값을 넣을 변수방
 
    for(let j=0; j<stringValue.length; j++){
        if(stringValue[j]==="3" || stringValue[j]==="6" || stringValue[j]==="9"){
            result = result + "짝"
        }
    }
    console.log(result.length>0? result:i)
    // if(result.length>0){
    //     console.log(result)
    // }else {
    //     console.log(i)
    // }
}