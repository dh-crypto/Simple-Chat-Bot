
<script>
        
            var know = {
               "" : "",
               
            };
            function talk() {
                var user = document.getElementById("userBox").value;
                document.getElementById("chatLog").innerHTML += user+"<br>";
                if (user in know) {
                    document.getElementById("chatLog").innerHTML += know[user]+"<br>";
                } else {
                    document.getElementById("chatLog").innerHTML += "I don't understand... <br>";
                }
            }
        </script>
