var screen = document.querySelector("#screen");
var btn = document.querySelectorAll(".btn");
var mode = "COMP";

function changeMode(newMode) {
  if (newMode === "COMP") {
    console.log(mode);
    document.querySelector("#comp_calc").style.display = "block";
    document.querySelector("#cmplx_calc").style.display = "none";

    document.querySelector("#comp_mode").disabled = true;
    document.querySelector("#cmplx_mode").disabled = false;

    mode = newMode;
  } else if (newMode === "CMPLX") {
    document.querySelector("#comp_calc").style.display = "none";
    document.querySelector("#cmplx_calc").style.display = "block";

    document.querySelector("#cmplx_mode").disabled = true;
    document.querySelector("#comp_mode").disabled = false;

    mode = newMode;
  }
}
changeMode(mode);

/*============ For getting the value of btn, Here we use for loop ============*/
for (item of btn) {
  item.addEventListener("click", (e) => {
    btntext = e.target.innerText;

    if (btntext == "×") {
      btntext = "*";
    }

    if (btntext == "÷") {
      btntext = "/";
    }
    screen.value += btntext;
  });
}

function sin() {
  screen.value = Math.sin(screen.value);
}

function cos() {
  screen.value = Math.cos(screen.value);
}

function tan() {
  screen.value = Math.tan(screen.value);
}

function pow() {
  screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
  screen.value = Math.sqrt(screen.value, 2);
}

function log() {
  screen.value = Math.log(screen.value);
}

function pi() {
  screen.value = 3.14159265359;
}

function e() {
  screen.value = 2.71828182846;
}

function fact() {
  var i, num, f;
  f = 1;
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }

  i = i - 1;

  screen.value = f;
}

function backspc() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}

function ComplexNumber(real, imag) {
  this.real = real;
  this.imag = imag;
}

ComplexNumber.prototype.add = function (other) {
  return new ComplexNumber(this.real + other.real, this.imag + other.imag);
};

ComplexNumber.prototype.subtract = function (other) {
  return new ComplexNumber(this.real - other.real, this.imag - other.imag);
};

ComplexNumber.prototype.multiply = function (other) {
  return new ComplexNumber(
    this.real * other.real - this.imag * other.imag,
    this.real * other.imag + this.imag * other.real
  );
};

ComplexNumber.prototype.divide = function (other) {
  var denominator = other.real * other.real + other.imag * other.imag;
  return new ComplexNumber(
    (this.real * other.real + this.imag * other.imag) / denominator,
    (this.imag * other.real - this.real * other.imag) / denominator
  );
};

function add() {
  var real1 = parseFloat(document.getElementById("real1").value);
  var imag1 = parseFloat(document.getElementById("imag1").value);
  var real2 = parseFloat(document.getElementById("real2").value);
  var imag2 = parseFloat(document.getElementById("imag2").value);

  var complex1 = new ComplexNumber(real1, imag1);
  var complex2 = new ComplexNumber(real2, imag2);

  var result = complex1.add(complex2);
  document.getElementById("result").textContent =
    result.real + " + " + result.imag + "i";
}

function subtract() {
  var real1 = parseFloat(document.getElementById("real1").value);
  var imag1 = parseFloat(document.getElementById("imag1").value);
  var real2 = parseFloat(document.getElementById("real2").value);
  var imag2 = parseFloat(document.getElementById("imag2").value);

  var complex1 = new ComplexNumber(real1, imag1);
  var complex2 = new ComplexNumber(real2, imag2);

  var result = complex1.subtract(complex2);
  document.getElementById("result").textContent =
    result.real + " + " + result.imag + "i";
}

function multiply() {
  var real1 = parseFloat(document.getElementById("real1").value);
  var imag1 = parseFloat(document.getElementById("imag1").value);
  var real2 = parseFloat(document.getElementById("real2").value);
  var imag2 = parseFloat(document.getElementById("imag2").value);

  var complex1 = new ComplexNumber(real1, imag1);
  var complex2 = new ComplexNumber(real2, imag2);

  var result = complex1.multiply(complex2);
  document.getElementById("result").textContent =
    result.real + " + " + result.imag + "i";
}

function divide() {
  var real1 = parseFloat(document.getElementById("real1").value);
  var imag1 = parseFloat(document.getElementById("imag1").value);
  var real2 = parseFloat(document.getElementById("real2").value);
  var imag2 = parseFloat(document.getElementById("imag2").value);

  var complex1 = new ComplexNumber(real1, imag1);
  var complex2 = new ComplexNumber(real2, imag2);

  var result = complex1.divide(complex2);
  document.getElementById("result").textContent =
    result.real + " + " + result.imag + "i";
}
