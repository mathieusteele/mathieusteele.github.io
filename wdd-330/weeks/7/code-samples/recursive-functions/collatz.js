function collatz(n, sequence = [n]) {
  if (n === 1) {
    return `Sequence took ${sequence.length} steps. It was ${sequence.join(
      ", "
    )}`;
  }
  if (n % 2 === 0) {
    n = n / 2;
  } else {
    n = 3 * n + 1;
  }
  return collatz(n, [...sequence, n]);
}

const collatzForm = document.getElementById("collatzForm");

collatzForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let number = parseInt(document.getElementById("number").value);

  let result = collatz(number);

  document.getElementById("result").innerText = result;
});
