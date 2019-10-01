//내장 객체 생성(사용자 정의)
var tv = new Object();
tv.color = "white";
tv.price = 30000;
tv.info = function() {
	document.write("tv color : " + this.color, "<br>");
	document.write("tv price : " + this.price, "<br>");
}

var car = {
	color : "black",
	price : 50000,
	info : function() {
		document.write("car color : " + this.color, "<br>");
		document.write("car price : " + this.price, "<br>");
	}
}

document.write("<h3>tv object call method</h3>");
tv.info();
document.write("<hr>");
document.write("<h3>car object call method</h3>");
car.info();
document.write("<hr>");

console.log(tv);
console.log(car);

// 내장 객체 활용(라이브러리)
// var today = new Date(2019, 10, 1);
var today = new Date();
var nowMonth = today.getMonth();
var nowDate = today.getDate();
var nowDay = today.getDay();

document.write("<h3>날짜 정보</h3>");
document.write("월 : " + nowMonth, "<br>");
document.write("일 : " + nowDate, "<br>");
document.write("요일 : " + nowDay, "<br>");
document.write("<hr>");

// 수학 객체
var num = 2.5234;
var maxNum = Math.max(10, 5, 8, 30);
var minNum = Math.min(10, 5, 8, 30);
var roundNum = Math.round(num);
var floorNum = Math.floor(num);
var rndNum = Math.random();

document.write("maxNum : " + maxNum, "<br>");
document.write("minNum : " + minNum, "<br>");
document.write("roundNum : " + roundNum, "<br>");
document.write("floorNum : " + floorNum, "<br>");
document.write("rndNum : " + rndNum, "<br>");
document.write("<hr>");

// setTimeout("location.reload()", 1000); // 자동 새로고침

document.write(Math.floor(Math.random() * 11));
document.write("<hr>");

// 배열 객체
var arr = [ 30, "JavaScript", true ];
console.log(arr);

document.write("<h3>배열 내용</h3>");
document.write("arr[ 0 ] = " + arr[0], "<br>");
document.write("arr[ 1 ] = " + arr[1], "<br>");
document.write("arr[ 2 ] = " + arr[2], "<br>");
document.write("<hr>");

for (var i = 0; i < arr.length; i++) {
	document.write("arr[ " + i + " ] = " + arr[i], "<br>");

}

document.write("<hr>");

i = 0;
for ( var index in arr) {
	document.write("arr[ " + i++ + " ] = " + arr[index], "<br>");
}

document.write("<hr>");

// Array 객체 메서드
var arr1 = [ "사당", "교대", "방배", "강남" ];
var arr2 = [ "신사", "압구정", "옥수" ];
var result = arr1.join("-");
console.log(result);

result = arr1.concat(arr2); // concat()은 문자열을 하나로 합침
console.log(result);

result = arr1.slice(1, 3); // arr[1]번째 요소부터 arr[3-1]번째를 제외하고 삭제함
console.log(result);

arr1.sort();
console.log(arr1);

arr2.reverse();
console.log(arr2);

var greenArr = [ "교대", "방배", "강남" ];
var yellowArr = [ "미금", "정자", "수서" ];
console.log(greenArr);
console.log(yellowArr);

greenArr.splice(2, 1, "서초", "역삼"); // arr[2]부터 1개를 삭제하고 '강남'을 '서초', '역삼'으로
// 대체하라.
console.log(greenArr);

var data1 = yellowArr.pop(); // pop()은 배열의 맨 끝에 값을 제거함 → '수서'
var data2 = yellowArr.shift(); // shift()는 배열의 맨 앞의 값을 제거함 → '미금'
console.log(data1);
console.log(data2);

yellowArr.push(data2); // push()는 배열의 맨 끝에 값을 추가함. '정자'만 남은 yellowArr에 shift()로
// 자른 '미금'을 추가
console.log(yellowArr);

yellowArr.unshift(data1); // unshift()는 배열의 맨 앞에 값을 추가함. '정자', '미금'인
// yellowArr의 맨 앞에 pop()으로 자른 '수서' 추가
console.log(yellowArr);

// String 객체
var str = new String("Hello Thank you good luck to you");
var str2 = "Hello Thank you good luck to you";
console.log(str);
console.log(str2);

document.write(str.charAt(16), "<br>"); // g
document.write(str2.charAt(4), "<br>");// o
document.write("<hr>");

document.write(str.indexOf("you"), "<br>"); // 12부터 you가 시작
document.write(str2.indexOf("you", 16), "<br>");// 16번째부터 "you"를 검색
document.write("<hr>");

document.write(str.match("lucky"), "<br>"); // 없으면 null 리턴
document.write(str.search("you"), "<br>"); // 12
document.write(str.substr(21, 6), "<br>"); // luck t
document.write(str.substring(6, 13), "<br>");// Thank y
document.write(str.replace("you", "me"), "<br>");
document.write("<hr>");

var email = prompt("이메일 주소를 입력하세요.", "");
var arrUrl = [ ".co.kr", ".com", ".net", ".or.kr", ".go.kr" ];
var check1 = false;
var check2 = false;

if (email.indexOf("@") > 0) {
	check1 = true;
}

for (var i = 0; i < arrUrl.length; i++) {
	if (email.indexOf(arrUrl[i]) > 0) {
		check2 = true;
	}

}

if (check1 && check2) { // check1과 check2가 모두 true라면
	document.write(email);
} else {
	document.write("e-mail 형식이 잘못되었습니다.", "<br>");
}

document.write("<hr>");

// 함수 객체
var number1 = 10;
var number2 = 20;

document.write("sum() → " + sum(number1, number2)); // hoisting. 함수가 뒤에 있어도 당겨서
// 실행 가능함
// document.write("sum2() → " + sum2(number1, number2));

function sum(number1, number2) {
	return number1 + number2;
}

var sum2 = function(number1, number2) {
	return number1 + number2;
}

document.write("<br>");
document.write("sum2() → " + sum2(number1, number2));

console.log(sum(number1, number2));
console.log(sum2);

function totals() {
	var total = 0;
	// arguments는 함수를 호출할 때 넘긴 인수들이 배열 형태로 저장된 객체를 말한다.
	for (var i = 0; i < arguments.length; i++) {
		total += arguments[i];
	}
	return total;
}

document.write(totals(10, 20, 30), "<br>"); // 여기서 arguments 함수에 넘길 인수를 정의
document.write("<hr>");

(function() {
	document.write("자동 실행 함수", "<br>");
	document.write("<hr>");
}());

