let copyBtn = document.querySelector("#copy-btn");
let generateBtn = document.querySelector("#generate-btn");
let input = document.querySelector(".flex .more input");

let words = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z', '0', '1', '2', '3', '4','5', '6', '7', '8', '9', 'A', 'B', 'C','D', 'E', 'F', 'G', 'H', 'I', 'J', 'K','L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@',"#",'$','%','&','^','*'];





copyBtn.onclick = function(){
    copyBtn.innerHTML = 'Copied';
    input.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    
}



generateBtn.addEventListener('click', function(){
    input.value = "";
    for(let i=0;i<12;i++){
        let letter = words[Number(Math.floor(Math.random() * 70))];
        input.value += letter;
    }
    copyBtn.innerText = "Copy";
    
})
