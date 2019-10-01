var names, subs1, subs2, subs3;

function save() {
	var name = document.getElementById("name").value;
	var sub1 = document.getElementById("sub1").value;
	var sub2 = document.getElementById("sub2").value;
	var sub3 = document.getElementById("sub3").value;

	names = name;
	subs1 = sub1;
	subs2 = sub2;
	subs3 = sub3;

	var sum = calc(sub1, sub2, sub3);
	var avg = calc2(sub1, sub2, sub3);

	// insertRow를 사용하는 방법
/*	var inputTbody = document.getElementById('inputTbody');
	var row = inputTbody.insertRow(inputTbody.rows.length); // 하단에 추가
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	cell1.innerHTML = name;
	cell2.innerHTML = sub1;
	cell3.innerHTML = sub2;
	cell4.innerHTML = sub3;
	cell5.innerHTML = sum;
	cell6.innerHTML = avg;
	cell7.innerHTML = "";
	cell8.innerHTML = "";	*/

	// innerHTML을 사용하는 방법
	var str = "<tr>";
	str += "<td>" + name + "</td>"
	str += "<td>" + sub1 + "</td>"
	str += "<td>" + sub2 + "</td>"
	str += "<td>" + sub3 + "</td>"
	str += "<td>" + sum + "</td>"
	str += "<td>" + avg + "</td>"
	str += "<td>" + "" + "</td>"
	str += "<td>" + "" + "</td>"
	str += "</tr>";
	
	var inbody = document.getElementById("inputTbody");
	inbody.innerHTML = inbody.innerHTML + str;
}

function calc(sub1, sub2, sub3) {
	sum = parseInt(sub1) + parseInt(sub2) + parseInt(sub3);

	return sum;
}

function calc2(sub1, sub2, sub3) {
	avg = (parseInt(sub1) + parseInt(sub2) + parseInt(sub3)) / 3;

	return avg;
}