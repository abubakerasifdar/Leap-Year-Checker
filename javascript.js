  document.addEventListener("keydown",(e)=>{
            if(e.key == "Enter"){
                myFunction();
            }
        })

        function myFunction() {
            let input1 = document.getElementById("input1").value;
            let result;
            if (input1 % 4 == 0) {
                result = " You have Entered " + input1 + " which is leap Year."
            }
            else {
                result = " You have Entered " + input1 + " which is not a leap Year."
            }
            if (input1 % 4 == 0) {
                document.getElementById("output").style.background = "green"
            }
            else {
                
                document.getElementById("output").style.background = "red"
            }
            document.getElementById("output").style.display = "flex";
            document.getElementById("output").innerHTML = result;
        }
