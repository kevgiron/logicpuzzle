//by Kevin Giron
function checkOne()
{
  var qAnswer = document.getElementById("input").value;
  if(qAnswer != 22)
  {
    var qOne = 0;
    document.cookie = ("q1check=" + qOne);
    document.getElementById("input").value = '';
    window.location = "q2.html";
  }
  else
  {
    var qOne = 1;
    document.cookie = ("q1check=" + qOne);
    document.getElementById("input").value = '';
    window.location = "q2.html";
  }
}
function valOne()
{
  var checkInput = document.getElementById("input").value;
  if(checkInput.toLowerCase() != 22)
  {
  document.getElementById("error").style.color = "red";
  document.getElementById("error").innerHTML = 'Hint the number is greater than 20';

  }
  else{
    document.getElementById("error").style.color = "DarkGreen ";
    document.getElementById("error").innerHTML = 'Correct answer';
  }
}
function checkTwo()
{
  var qAnswer = document.getElementById("input").value;
  if(qAnswer != 458330)
  {
    var qTwo = 0;
    document.cookie = ("q2check=" + qTwo);
    document.getElementById("input").value = '';
    window.location = "q3.html";
  }
  else
  {
    var qTwo = 1;
    document.cookie = ("q2check=" + qTwo);
    document.getElementById("input").value = '';
    window.location = "q3.html";
  }
}
function valTwo()
{
  var checkInput = document.getElementById("input").value;
  if(checkInput.toLowerCase() != 458330)
  {
  document.getElementById("error").style.color = "red";
  document.getElementById("error").innerHTML = 'Incorrect answer';
  }
  else
  {
    document.getElementById("error").style.color = "DarkGreen ";
    document.getElementById("error").innerHTML = 'Correct answer';
  }
}

function checkThree()
{
  var qAnswer = document.getElementById("input").value;
  if(qAnswer != 168)
  {
    var qThree = 0;
    document.cookie = ("q3check=" + qThree);
    document.getElementById("input").value = '';
    window.location = "results.html";
  }
  else
  {
    var qThree = 1;
    document.cookie = ("q3check=" + qThree);
    document.getElementById("input").value = '';
    window.location = "results.html";
  }
}


function valThree()
{
  var checkInput = document.getElementById("input").value;
  if(checkInput.toLowerCase() != 168)
  {
  document.getElementById("error").style.color = "red";
  document.getElementById("error").innerHTML = 'Incorrect answer';
  }
  else{
    document.getElementById("error").style.color = "DarkGreen ";
    document.getElementById("error").innerHTML = 'Correct answer';
  }
}

function calculateScore()
{
  var qOne = Number(getCookie("q1check"));
  var qTwo = Number(getCookie("q2check"));
  var qThree = Number(getCookie("q3check"));
  var score = qOne + qTwo + qThree;
  if(qOne == 1)
  {
  document.getElementById("t1").innerHTML = '22 is the correct answer!';
  }
  else
  {
    document.getElementById("t1").innerHTML = 'Sorry the right answer was 22';
  }
  if(qTwo == 1)
  {
    document.getElementById("t2").innerHTML = '458330 is the correct answer!';
  }
  else {

    document.getElementById("t2").innerHTML = 'Sorry the right answer was 458330';
  }
  if(qThree == 1)
  {
    document.getElementById("t3").innerHTML = '168 is the correct answer!';
  }
  else
  {
    document.getElementById("t3").innerHTML = 'Sorry the right answer was 168 to solve subtract 4 then multiply each number by 3 to give the next number';
  }
    document.getElementById("score").innerHTML = 'You got ' + score + ' out of 3 correct!';
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
