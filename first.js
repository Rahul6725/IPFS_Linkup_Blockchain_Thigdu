function submitey() {
    var dataString = document.getElementsByClassName("aboutyoufield");
    var data = new Array();

    for (var i = 0; i < dataString.length; i++) {
        data[i] = dataString[i].value;
        //document.getElementById("displayData").innerHTML += data[i];
        // alert(data[i]);

    }
    alert(data);

    if (demo(data)) {
        alert("hello");
    } else {
        alert("error");
    }

    // return data;

}