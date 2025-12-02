// CSC 193A - Zachary James

function biggerText(){
    alert("Hello, world");

    // Making the text larger
    document.getElementById("Text").style.fontSize = "24pt";
}

function radioChange(){
    alert ("Radio Changed!")
    if (document.getElementById("FancyShmancy").checked) {
        document.getElementById("Text").style.fontWeight = "bold";
        document.getElementById("Text").style.color = "blue";
        document.getElementById("Text").style.textDecoration = "underline";
    } else {
        document.getElementById("Text").style.fontWeight = "normal";
        document.getElementById("Text").style.color = "black";
        document.getElementById("Text").style.textDecoration = "none";
    }
}

function moo() {
    let Text = document.getElementById("Text");

    // Uppercase
    let Uppercase = Text.value.toUpperCase();

    // Split
    let sentences = Uppercase.split(".");

    // Add -MOO
    for (let i = 0; i < sentences.length; i++){
        let s = sentences[i].trim();
        if (s.length > 0) {
            let parts = s.split(" ");
            parts[parts.length - 1] += "-MOO";
            sentences[i] = parts.join(" ");
        }
    }

    Text.value = sentences.join(". ");
}