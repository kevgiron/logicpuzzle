//by Kevin Giron
function testOneCheck()
{
  var newItem = document.getElementById("input").value;
  if(newItem != 30){
    var test1 = 0;
    document.cookie = ("testOne=" + test1);
    document.getElementById("input").value = '';
    window.location = "q2.html";
  }
  else{
    var test1 = 1;
    document.cookie = ("testOne=" + test1);
    document.getElementById("input").value = '';
    window.location = "q2.html";
  }
}

function testTwoCheck()
{
  var newItem = document.getElementById("input").value;
  if(newItem != 6){
    var test2 = 0;
    document.cookie = ("testTwo=" + test2);
    document.getElementById("input").value = '';
    window.location = "q3.html";
  }
  else{
    var test2 = 1;
    document.cookie = ("testTwo=" + test2);
    document.getElementById("input").value = '';
    window.location = "q3.html";
  }
}

function testThreeCheck()
{
  var newItem = document.getElementById("input").value;
  if(newItem != 10){
    var test3 = 0;
    document.cookie = ("testThree=" + test3);
    document.getElementById("input").value = '';
    window.location = "results.html";
  }
  else{
    var test3 = 1;
    document.cookie = ("testThree=" + test3);
    document.getElementById("input").value = '';
    window.location = "results.html";
  }
}

function testOneValidate(){
  var checkInput = document.getElementById("input").value;
  if(checkInput.toLowerCase() != 30)
  {
  document.getElementById("error").style.color = "red";
  document.getElementById("error").innerHTML = 'Incorrect answer';
  }
  else{
    document.getElementById("error").style.color = "green";
    document.getElementById("error").innerHTML = 'Correct answer';
  }
}

function testTwoValidate(){
  var checkInput = document.getElementById("input").value;
  if(checkInput.toLowerCase() != 6)
  {
  document.getElementById("error").style.color = "red";
  document.getElementById("error").innerHTML = 'Incorrect answer';
  }
  else{
    document.getElementById("error").style.color = "green";
    document.getElementById("error").innerHTML = 'Correct answer';
  }
}

function testThreeValidate(){
  var checkInput = document.getElementById("input").value;
  if(checkInput.toLowerCase() != 10)
  {
  document.getElementById("error").style.color = "red";
  document.getElementById("error").innerHTML = 'Incorrect answer';
  }
  else{
    document.getElementById("error").style.color = "green";
    document.getElementById("error").innerHTML = 'Correct answer';
  }
}

function calculateScore()
{
  var Test1 = Number(getCookie("testOne"));
  var Test2 = Number(getCookie("testTwo"));
  var Test3 = Number(getCookie("testThree"));
  var score = Test1 + Test2 + Test3;
  if(Test1 == 1){
  document.getElementById("t1").innerHTML = '30 is the correct answer!';
  }
  else {
    document.getElementById("t1").innerHTML = 'Sorry the right answer was 30';
  }
  if(Test2 == 1){
  document.getElementById("t2").innerHTML = '6 is the correct answer!';
  }
  else {
    document.getElementById("t2").innerHTML = 'Sorry the right answer was 6';
  }
  if(Test3 == 1){
  document.getElementById("t3").innerHTML = '10 is Correct';
  }
  else {
    document.getElementById("t3").innerHTML = 'Sorry the right answer was 10';
  }
  document.getElementById("score").innerHTML = 'you got ' + score + ' out of 3 correct';
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
