$(document).ready(function () {
    console.log("doc is ready");

    var PreBtn = document.getElementById("preview-btn");

    // Click event on preview button
    PreBtn.addEventListener("click",displayData);

    // Puts user input in hidden data field
    function displayData(){

        var elMonth=document.getElementById("month-input");
        var elYear=document.getElementById("year-input");

        $("#data").html(
            `<p> You entered <b> ` + elMonth.value + `</b> (Month) <b>` + elYear.value + `</b> (Year)</p>`
        )
    }
    

})
