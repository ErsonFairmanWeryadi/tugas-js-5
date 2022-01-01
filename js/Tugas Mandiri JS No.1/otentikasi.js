<script>
    function Login(){
    var done=0;
    var username=document.login.username.value;
    username=username.toLowerCase();
    var password=document.login.password.value;
    password=password.toLowerCase();
    if (username=="ersonganteng" && password=="ersonganteng") { window.location.assign("login.html") }
    else 
    if (done==0) { alert("Anda Gagal Login"); }
    }
    </script>
