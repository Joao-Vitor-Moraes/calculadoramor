document.getElementById('loveCalculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name1 = document.getElementById('name1').value.trim().toLowerCase();
    let name2 = document.getElementById('name2').value.trim().toLowerCase();

    if ((name1 === "joso" && name2 === "alexei") || (name1 === "alexei" && name2 === "joso")) {
        document.getElementById('result').innerText = "101% de amor!! Eu te amo :)";
    } else {
        document.getElementById('result').innerText = "vish, só da pra colocar joso e alexei";
    }
});
