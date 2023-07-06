function show(params) {
    hide(); 
    var selected = document.getElementById(params);
    selected.style.display = 'block';
    var footer = document.getElementsByClassName('footer');
    for (var i = 0; i < footer.length; i++) {
        footer[i].style.display = 'block';
    }
}
function hide() {
     var gioithieu = document.getElementsByClassName('danhmuc');
    for (var i = 0; i < gioithieu.length; i++) {
        gioithieu[i].style.display = 'none';
    }
}

function hider() {
    var footer = document.getElementsByClassName('footer');
   for (var i = 0; i < footer.length; i++) {
       footer[i].style.display = 'none';
   }
}
function login() {
    document.getElementById("login-button").addEventListener("click", function() {
        document.getElementById("login-form").style.display = "block";
      });
}
window.addEventListener('load', function() {
    hide()
    hider()
    show('gioithieu')
});

function appendNumber(number) {
    var resultInput = document.getElementById('result');
    resultInput.value += number;
  }

  function appendOperator(operator) {
    var resultInput = document.getElementById('result');
    resultInput.value += operator;
  }

  function calculateResult() {
    var resultInput = document.getElementById('result');
    var result = eval(resultInput.value);
    resultInput.value = result;
  }

  function clearResult() {
    var resultInput = document.getElementById('result');
    resultInput.value = '';
  }
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      calculateResult();
      event.preventDefault(); // Ngăn chặn form submit
    }
  }
  function checkNumber() {
    var numberInput = document.getElementById('numberInput');
    var resultLabel = document.getElementById('resultLabel');
    var feeLabel = document.getElementById('feeLabel');
    var feeLabel2 = document.getElementById('feeLabel2');
    var number = numberInput.value;

    if (number <= 14) {
      resultLabel.textContent = "Số tín chỉ quá ít cho 1 kì học";
      feeLabel.textContent = "Chỉ hiển thị với số tín chỉ vừa đủ";
        feeLabel2.textContent = "Chỉ hiển thị với số tín chỉ vừa đủ";
    }else if (number > 20) {
        resultLabel.textContent = "Số tín chỉ quá nhiều cho 1 kì học";
        feeLabel.textContent = "Chỉ hiển thị với số tín chỉ vừa đủ";
        feeLabel2.textContent = "Chỉ hiển thị với số tín chỉ vừa đủ";
    }else if (number >14 || number <= 20) {
        var result = number * 310000 + " (VNĐ) ";
        var result2 = number * 337000 + " (VNĐ) ";
        feeLabel.textContent = result;
        feeLabel2.textContent = result2;
        resultLabel.textContent = "Số tín chỉ vừa đủ cho 1 kì học";
    }else {
      resultLabel.textContent = "";
    }
  }
// window.addEventListener('DOMContentLoaded', function() {
//     var currentDateTimeElement = document.getElementById('currentDateTime');
  
//     setInterval(function() {
//       var now = new Date();
//       var date = now.toLocaleDateString('vi-VN');
//       var time = now.toLocaleTimeString('vi-VN');
//       var currentDateTime = date + ' ' + time;
      
//       currentDateTimeElement.textContent = currentDateTime;
//     }, 1000); // Cập nhật ngày giờ sau mỗi giây
//   });