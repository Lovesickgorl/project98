


function send(){
     document.getElementById("number1").value;
     document.getElementById("number2").value;
actaul_awnser=parseInt(number1)*parseInt(number2).value;

     question_number= "<h4>"+ number1+ "X" + number2+"</h4>";
input_box="<br> Awnser:<input type='text' id='input_check_box'>";
     check_button="<br><br><button class='btn btn-info' onclick='check()'> Check</button>";
     row=question_word+input_box+check_button;
     document.getElementById("output").innerHTML=row;
     document.getElementById("number1").value="";
     document.getElementById("number2").value="";

}