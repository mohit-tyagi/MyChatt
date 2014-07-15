
function validateForm()
{
    var user=$("#unm").val();
    var user=user.trim();
    var pass=$("#pwd").val();
//alert(user+">>>>>>>>>>"+pass);
    if(user !== 'mohit')
    {
        document.getElementById('error').innerHTML="Username Wrong";
            return false;
    }

    if(pass !== 'tyagi')
    {
        document.getElementById('error').innerHTML="Password Wrong";
        return false;
    }
}