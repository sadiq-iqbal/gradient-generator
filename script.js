let number = () => {
    return Math.floor(Math.random() * 227);
}

let button = document.getElementById('change');
let checkbox = document.getElementById('radial')
let Color = document.getElementsByClassName('colorPicker')

checkbox.addEventListener('click',()=>{
  changeColor()
},)
// let colorChange = ()=>{
//     let color;
//     let colors = '123456789abcdef'
//     for(let i = 0 ; i< colors.length;i++){
    
    //     }
    // }
    function rgbToHex(r, g, b) {
      return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  } 
    let changeColor = (angle) => {
        let red1 = number();
        let green1 = number();
        let blue1 = number();
        let red2 = number();
        let green2 = number();
        let blue2 = number();
        let color1 = `rgb(${red1}, ${green1}, ${blue1})`;
        let color2 = `rgb(${red2}, ${green2}, ${blue2})`;
        Color[0].value = rgbToHex(red1, green1, blue1);
        Color[1].value = rgbToHex(red2, green2, blue2);

      if (checkbox.checked) {
          document.body.style.backgroundImage = `radial-gradient( ${color1}, ${color2})`;
          let text = document.getElementById('inputText')
          text.value = `radial-gradient(${color1}, ${color2})`;
      }
      else{
        {
          document.body.style.backgroundImage = ` linear-gradient(${angle} ${color1}, ${color2})`;
          let text = document.getElementById('inputText')
          text.value = `linear-gradient(${color1}, ${color2})`;
        }
      }

     
      }

  //  let change =  setInterval(()=>{
  //       changeColor("to bottom left ,");
  //     },1000)

button.addEventListener('click', () => {
    changeColor("to bottom left ,");
});


  // Function to copy text from the input field to clipboard using Clipboard API
  function copyTextToClipboard() {
    const inputElement = document.getElementById("inputText");
    const textToCopy = inputElement.value;
    // clearInterval(change)

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        // Optionally, you can show a message indicating that the text has been copied
        alert("Text has been copied to the clipboard!");
      })
      .catch((error) => {
        // Handle error if copying fails
        console.error("Copying failed:", error);
      });
  }


  const copyButton = document.getElementById("copyButton");
  copyButton.addEventListener("click", copyTextToClipboard);
