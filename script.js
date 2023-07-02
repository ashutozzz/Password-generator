// return the value of slider to span
const slider = document.getElementById("slider");
  const slidervalue = document.getElementById("slider-value");
  
  slider.addEventListener("input", function() {
    slidervalue.textContent = slider.value;

  });

  



  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  // const slider = document.getElementById('slider');
  const boxes = document.querySelectorAll('.box');
  
  function updateBoxColoring() {
    let selectedCount = 0;
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedCount++;
      }
    });
  
    const sliderValue = parseInt(slider.value);
  
    boxes.forEach((box, index) => {
      if (selectedCount === 0 || sliderValue < 4) {
        box.classList.remove('colored');
      } else if (index < selectedCount) {
        box.classList.add('colored');
      } else {
        box.classList.remove('colored');
      }
    });
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

    // if (!includeUppercase.checked && !includeLowercase.checked && !includeNumbers.checked && !includeSymbols.checked) {
    //   alert("Please select at least one checkbox");
    //   return;
    // }
    let selectedCount = 0;

      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          selectedCount++;
        }
      });
   
    


    var characterSet = "";
    var characterSet1 = "";
    var characterSet2 = "";
    var characterSet3 = "";
    var characterSet4 = "";
    var password = "";


    if (includeUppercase) {
      characterSet1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var randomIndex = Math.floor(Math.random() * characterSet1.length);
      password += characterSet1.charAt(randomIndex);
    }
    if (includeLowercase) {
      characterSet2 = "abcdefghijklmnopqrstuvwxyz";
      var randomIndex = Math.floor(Math.random() * characterSet2.length);
      password += characterSet2.charAt(randomIndex);
    }
    if (includeNumbers) {
      characterSet3 = "0123456789";
      var randomIndex = Math.floor(Math.random() * characterSet3.length);
      password += characterSet3.charAt(randomIndex);
    }
    if (includeSymbols) {
      characterSet4 = "!@#$%^&*()";
      var randomIndex = Math.floor(Math.random() * characterSet4.length);
      password += characterSet4.charAt(randomIndex);
    }
    characterSet = characterSet1 + characterSet2 + characterSet3 + characterSet4;

    if(passwordLength<4){
      if(passwordLength<selectedCount){
          return;
      }else{
        for (var i = 0; i < passwordLength-selectedCount; i++) {
          var randomIndex = Math.floor(Math.random() * characterSet.length);
          password += characterSet.charAt(randomIndex);
        
      }
      }
    }
    else if(passwordLength>=4){
      for (var i = 0; i < passwordLength-selectedCount; i++) {
        var randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet.charAt(randomIndex);
      
      
    }}

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


  
// var generateBtn = document.getElementById("generate");

// slider.addEventListener("input", function() {
//   var value = slider.value;
//   slidervalue.textContent = value;

//   if (value < 4) {
//     alert("Minimum password length is 4 characters");
//     generateBtn.disabled = true;
   
//   } else {
//     generateBtn.disabled = false;
//   }
// });

// generateBtn.addEventListener("click", function() {
//   if (slider.value < 4) {
    
//     return;
//   }
// });
