for(let number = 1; number < 5; number++) {

    let button = document.createElement("button");
    //string template literal:
    let size = `${number * 100}%`;
    //let size = (number * 100) + "%";
    let button = `# ${number} - ${size}`;
    button.innerText = buttonText;
    document.body.appendChild(button);

    button.addEventListener("click", function() {
        console.log(`You picked ${buttonText}`);
        document.body.style.fontSize = size;
    })
}