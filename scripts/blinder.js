function tryMe() {
  if (document.getElementsByClassName("_48e9").length < 1) {
    window.requestAnimationFrame(tryMe);
  } else {
    startBlock();
  }
}
tryMe();

function startBlock() {
  chrome.storage.sync.get("blind_messenger", function(data) {
  if (data["blind_messenger"]) {
      chrome.storage.sync.get("blind_names", function(data) {
        var list = document.getElementsByClassName("_48e9")[0].getElementsByClassName("_2il3");
        data = data["blind_names"].map(function(ob) {return ob.toLowerCase()});
        var data_href;
        var i;
        var j;
        for (i=0; i < data.length; i++) {
          for (j=0; j < list.length; j++) {
            data_href = list[j].getAttribute("data-href").toLowerCase();
            console.log("inner loop");
            console.log(data_href);
            console.log("https://www.messenger.com/t/" + data[i]);
            if (data_href === "https://www.messenger.com/t/" + data[i] ||
                data_href === "http://www.messenger.com/t/" + data[i]) {
              console.log("name to be removed:");
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
