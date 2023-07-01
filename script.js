// return the value of slider to span
const slider = document.getElementById("slider");
  const slidervalue = document.getElementById("slider-value");
  
  slider.addEventListener("input", function() {
    slidervalue.textContent = slider.value;

  });

  



// colored boxes for showing strenth of the password
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // const slider = document.getElementById('slider');
    const boxes = document.querySelectorAll('.box');

    function updateBoxColoring() {
      const sliderValue = parseInt(slider.value);
      let selectedCount = 0;

      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          selectedCount++;
        }
      });

      if (selectedCount === 0 || sliderValue < 4) {
        boxes.forEach((box) => {
          box.classList.remove('colored');
        });
      } else if (sliderValue >= 4 && sliderValue <= 8) {
        boxes.forEach((box, index) => {
          if (index < Math.min(selectedCount, 3)) {
            box.classList.add('colored');
          } else {
            box.classList.remove('colored');
          }
        });
      } else if (sliderValue > 8 && selectedCount >= 4) {
        boxes.forEach((box) => {
          box.classList.add('colored');
        });
      } else {
        boxes.forEach((box, index) => {
          if (index < Math.min(selectedCount, sliderValue - 4)) {
            box.classList.add('colored');
          } else {
            box.classList.remove('colored');
          }
        });
      }
    }

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', updateBoxColoring);
    });

    slider.addEventListener('input', updateBoxColoring);



//To generate random password
function generatePassword() {
    var includeUppercase = document.getElementById("includeUppercase").checked;
    var includeLowercase = document.getElementById("includeLowercase").checked;
    var includeNumbers = document.getElementById("includeNumbers").checked;
    var includeSymbols = document.getElementById("includeSymbols").checked;
    var passwordLength = document.getElementById("slider").value;

   
    


    var characterSet = "";
    var password = "";

    if (includeUppercase) {
      characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeLowercase) {
      characterSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeNumbers) {
      characterSet += "0123456789";
    }
    if (includeSymbols) {
      characterSet += "!@#$%^&*()";
    }

    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * characterSet.length);
      password += characterSet.charAt(randomIndex);
    }

    document.getElementById("output").textContent = password;
  }

  var generateBtn = document.getElementById("generate");
  generateBtn.addEventListener("click", generatePassword);




 

//copy to clipboard function
  document.getElementById("copy").addEventListener("click", copyToClipboard);
  function copyToClipboard() {
    var passwordDisplay = document.getElementById("output");
    var password = passwordDisplay.textContent;
  
    var textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  
    alert("Password copied to clipboard: " + password);
  }


  
var generateBtn = document.getElementById("generate");

slider.addEventListener("input", function() {
  var value = slider.value;
  slidervalue.textContent = value;

  if (value < 4) {
    generateBtn.disabled = true;
    
  } else {
    generateBtn.disabled = false;
  }
});

generateBtn.addEventListener("click", function() {
  if (slider.value < 4) {
    alert("Minimum password length is 4 characters");
    return;
  }
});










  







