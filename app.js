document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {

  const numberOfJokes = document.querySelector("input[type='number']").value;

  const xhr = new XMLHttpRequest;

  xhr.open("GET", `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);

  xhr.send();

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let output = "";

      if(response.type === "success") {
        response.value.forEach(joke => {
          output += `<li>${joke.joke}</li>`;
        });
      }
      else {
        document.querySelector(".jokes").innerHTML = `<li>Something doesn't work</li>`;
      }

      document.querySelector(".jokes").innerHTML = output;
     
    }
  }

  e.preventDefault();
}