function getData(from) {
  var formdata = new FormData(form);

  for (var pair of formdata.entries()) {
    console.log(pair[0] + ": " + pair[1])
  }
  console.log(Object.fromEntries(formdata))
  console.log()

}

document.getElementById("Form").addEventListener("submit",function(e) {
    e.preventDefault();
    getData(e.target);
});
