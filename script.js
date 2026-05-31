let nameFill =()=>{
    let Username = document.getElementById("name").value;
    document.getElementById("measage").innerHTML="Wish you a Happy New Year "+Username+"!"
    document.getElementById("measage2").innerHTML="And many more ahead for you!"
    document.getElementById("2026").src="./images/2026 two.gif"
}

document.getElementById("button1").addEventListener("click",nameFill)

let themeChange =()=>{
    document.getElementById("h1").style.color="#ff5e00";
    document.getElementById("h2").style.color="#ff5e00";
    document.getElementById("h3").style.color="#ff5e00";

    document.getElementById("button1").style.color="#000000";
    document.getElementById("button1").style.backgroundColor="#ff0000";

    document.getElementById("measage").style.color="#ff0000";
    document.getElementById("measage2").style.color="#ff0000";
}

document.getElementById("theme").addEventListener("click",themeChange)