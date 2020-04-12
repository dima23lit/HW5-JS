//3 persons
var a={
    name: "Dmytro",
    surname: "Basamyhin",
  }
  var b = {
    name: "Andrey",
    surname: "Shevchenko",
  }
  var c = {
    name: "Cristiano",
    surname: "Ronaldo",
  }


  //different fields
  var a={
    name: "Dmytro",
    surname: "Basamyhin",
    age: "23",
  }
  var b = {
    name: "Andrey",
    surname: "Shevchenko",
    sex: "man"
  }
  var c = {
    name: "Cristiano",
    surname: "Ronaldo",
    numberphone : "36485734932"
  }


//fields check
  var a={
    name: "Dmytro",
    surname: "Basamyhin",
    age: 23,
  }
  var b = {
    name: "Andrey",
    surname: "Shevchenko",
    sex: "man"
  }
  var c = {
    name: "Cristiano",
    surname: "Ronaldo",
    numberphone : "36485734932"
  }

  if ("age" in a) {
    alert ("Возраст доступен")
  } else {
    alert ("Возраст недоступен")
  }
 
  alert(typeof (a.age));

  if ("numberphone" in b) {
    alert ("Номер телефона доступен")
  } else {
    alert ("Возраст недоступен")
  }
  
  alert(typeof (c.numberphone));;


  //array of persons
  var persons = [
    a = {
    name: "Dmytro",
    surname: "Basamyhin",
    age: 23,
  },
    b = {
    name: "Andrey",
    surname: "Shevchenko",
    fathername:"Nikolayevich",
    sex: "man"
  
  },
     c = {
    name: "Cristiano",
    surname: "Ronaldo",
    numberphone : "36485734932"
  }
  ]


//loop of persons
  for (var key in persons)
  console.log(persons[key]);


// loop of name and surname
  for (var person of persons) {
    var name = '';
    var surname = '';
    for (var key in person) {
        if (key === 'name') name = person[key];
        else if (key === 'surname') surname = person[key];
        else continue;
    }

    console.log(`${name} ${surname}`);
}


// loop of loop of values
for (var personka of persons) {
    var name = '';
    var surname = '';
    var age = '';
    var sex = '';
    var  numberphone = '';
    for (var keychik in personka) {
        console.log(`${personka[keychik]}`);
    }
}


//fullName 
for (var i = 0; i < persons.length; i++) {
	persons[i].fullName = persons[i].name + "/" +(persons[i].fathername? persons[i].fathername:"/") + "/" + persons[i].surname;
console.log(persons[i].fullName);
}



//serialize
({"name":"Dmtro","surname":"Basamyhin","age":23,"fullName":"Dmytro Basamyhin"},{"name":"Andrey","surname":"Shevchenko","fathername":"Nikolayevich","sex":"man","fullName":"Andrey.Nikolayevich.Shevchenko"},{"name":"Cristiano","surname":"Ronaldo","numberphone":"36485734932","fullName":"Cristiano Ronaldo"});



//deserialize
let json=({"name":"Cristiano","surname":"Ronaldo","numberphone":"36485734932","fullName":"Cristiano Ronaldo"})
let JSON = persons.push("JSON");



//HTML
var border = "style='border:3px solid grey'";
var str = `<table var border >`;
for (var i = 0; i < persons.length; i++) {
	str += `<tr var border>`; 
	for (var key in persons[i]){
		if (key == "name" || key == "surname") {
    	str += `<th var border>` + key + `</th><td var border>` + persons[i][key] + "</td>";
    	}
	}
}
document.write(str);



//HTML optional fields
var border = "style='border:3px solid grey'";
var str1 = `<table ${border} `;
for (var i = 0; i < persons.length; i++) {
		str1 += `<tr ${border}>`;
	for (var key in persons[i]){
    	str1 += `<th ${border}>` + key + `</th><td ${border}>` + persons[i][key] + "</td>";
	}
		str1 += `</tr>`; 
}
str1 += "</table>";
document.write(str1);



// //HTML tr color
var border = "style='border:3px solid grey'";
var tr= "style ='border:3px solid grey;background-color:green;' "
var str = `<table ${border} `;
for (var i = 0; i < persons.length; i++) {
	if (i % 2) {
		str += `<tr ${tr}>`;
	} else {
		str += `<tr ${border}>`; 
	}
	for (var key in persons[i]){
    	str += `<th ${border}>` + key + `</th><td ${border}>` + persons[i][key] + "</td>";
	}
		str += `</tr>`; 
}
str += "</table>";
document.write(str);




//HTML th optional
var border = "style='border:3px solid grey'";
var tr = "style='border:3px solid grey; background-color:yellow'";
var str = `<table ${border} ><tr>`;
for (var i = 0; i < persons.length; i++) {
	for (var key in persons[i]){
		str += `<th ${tr}>${key}</th>`
	}
}
str += `</tr><tr>`;
for (var i = 0; i < persons.length; i++) {
	for (var key in persons[i]){
		str += `<td ${border}>${persons[i][key]}</td>`
	}
}
str += `</tr></table>`;
document.write(str);

















