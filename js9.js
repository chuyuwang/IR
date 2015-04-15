/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var xhr;
function show()
{
    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
        xhr=new XMLHttpRequest();
    }
    else{// code for IE6, IE5
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    xhr.onreadystatechange = callback;
//    console.log("heere");
//    input=document.getElementById("input");
    xhr.open("GET", "https://www.googleapis.com/plus/v1/people/me?access_token=ya29.VgFUlgPvAn-itYbB-ihfNAY6Wlmi5h3iPH44bf2J5PZpQBW3yBndP-xvoQAat5AniOAeQ7cZ-2nNow", true);
    xhr.send();
}

//https://www.googleapis.com/plus/v1/activities?query=coffee&access_token=ya29.VgHwO0HCTj2hnZGl99s8AwR5AQbFkS8HMGKY_JsR_A9TSeBukw9IURVhiWg2wbxUqG9Mz6P7uHrMlQ

function callback(){
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
//            alert(xhr.status);
        // status of 200 signifies sucessful HTTP call
        if (xhr.status === 200) {
            //clearoption();
//            alert(xhr.responseText);
            var JSONresp = JSON.parse(xhr.responseText);
            kind=  JSONresp["kind"].toString();          
            //type=JSONresp["name"].toString();
//            code=  JSONresp["code"].toString();
            document.getElementById("profile").innerHTML = kind;
            }
    }
}
        
