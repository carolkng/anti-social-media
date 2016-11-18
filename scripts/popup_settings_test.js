document.addEventListener('DOMContentLoaded', function() {
  var input = document.getElementById('blind-option');
  var names = document.getElementById('blinded');
  var button = document.getElementById('blinded_save');
  
  var testarea = document.getElementById("test_area");
  
  // chrome.storage.sync.get("blind_messenger", function(data){
    // input.checked = data["blind_messenger"];
  // });
  
  // chrome.storage.sync.get("blind_names", function(data) {
    // names.value = data["blind_names"].join("\n");
  // });
  
  input.addEventListener("change", function() {
    // chrome.storage.sync.set({"blind_messenger": input.checked});
    testarea.innerHTML = "input changed";
    setTimeout(function() {
      testarea.innerHTML = "Test content...";
    }, 500)
  });
  
  button.addEventListener("click", function() {
    button.innerHTML = "Saved!";
    button.disabled = true;
    setTimeout(function() {
      button.innerHTML = "Save";
      button.disabled = false;
    }, 1500);
    testarea.value = names.value.split("\n").join(",");
    // chrome.storage.sync.set({"blind_names": names.value.split("\n")}, function() {  
      // button.innerHTML = "Saved!";
      // button.disabled = true;
      // setTimeout(function() {
        // button.innerHTML = "Save";
        // button.disabled = false;
      // }, 1500);
    // });
  });
  
  
});