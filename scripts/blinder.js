function tryMe() {
  if (document.getElementsByClassName("_48e9").length < 1) {
    console.log('heyo');
    window.requestAnimationFrame(tryMe);
  } else {
    console.log("ran");
    startBlock();
  }
};
tryMe();

function startBlock() {
  console.log("rupssate");
  // !!!
  // I'M GOING TO BED NOW BUT THIS PART DOESN'T RUN
  chrome.storage.sync.get("blind_messenger", function(data) {
    if (data["blind_messenger"]) {
      var list = document.getElementsByClassName("_48e9")[0].getElementsByClassName("_2il3");
      chrome.storage.sync.get("blind_names", function(data) {
        var i;
        var j;
        for (i=0; i < data.length; i++) {
          for (j=0; j < list.length; j++) {
            if (list[j].getAttribute("data-href") == "https://www.messenger.com/t/" + data[i] ||
                list[j].getAttribute("data-href") == "http://www.messenger.com/t/" + data[i]) {
              console.log(list[j]);
              list[j].parentElement.parentElement.remove();
              break;
            }
          }
        }
      }); 
    }
  });
}  
