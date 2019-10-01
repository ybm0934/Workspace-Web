/**
 * 
 */
document.write("<h3>JavaScript 기본 언어 스펙 연습<h3>");
document.write("<hr>");

var box;
box = 100;
document.write(box, "<br>");
console.log(box);
document.write("<hr>");

// 문자형
var s = "JavaScript";
var num = "100";
var tag = "<h3>JavaScript String</h3>"

document.write(s, "<br>");
document.write(num, "<br>");
document.write(tag, "<br>");
document.write("<hr>");

// 숫자형
var n = 100;
var t = Number('500');
document.write(n, "<br>");
document.write(t, "<br>");
document.write("<hr>");

// 논리형
var b = true;
var b2 = 10 >= 100;
var k = Boolean("hello");
var l = Boolean(0);
var m = Boolean(null);

document.write(b, "<br>"); // true
document.write(b2, "<br>"); // false
document.write(k, "<br>"); // true
document.write(l, "<br>"); // false
document.write(m, "<br>"); // false
document.write("<hr>");

// null & undefined
var u;
var h = "hello";
h = null;

document.write(u, "<br>"); // undefined
document.write(h, "<br>"); // null
document.write("<hr>");

// typeof
document.write(typeof s, "<br>");
document.write(typeof n, "<br>");
document.write(typeof b, "<br>");
document.write(typeof u, "<br>");
document.write(typeof h, "<br>");
document.write("<hr>");

// 문자열 결합 연산
var str = "<table border='1'>";
str += "<tr>";
str += "<td>1</td><td>2</td><td>3</td>";
str += "</tr>";
str += "</table>"

document.write(str, "<br>");
document.write("<hr>");

// 비교 연산
var k = 10, m = "10";
document.write(k == 10, "<br>");
document.write(m == 10, "<br>");
document.write("<hr>");

// ==는 값만 비교, ===는 타입까지 비교(엄격한 비교)
document.write(k === 10, "<br>"); // true
document.write(m === 10, "<br>"); // false
document.write("<hr>");

// 입력
var number1 = prompt("정수1 입력", "0");
var number2 = prompt("정수2 입력", "0");
var sum = Number(number1) + parseInt(number2);

document.write(number1 + " + " + number2 + " = " + sum, "<br>");
document.write("<hr>");

var select = confirm("회원을 탈퇴하시겠습니까?");

if (select) {
	document.write("탈퇴 처리되었습니다.");
} else {
	document.write("탈퇴 취소되었습니다.");
}