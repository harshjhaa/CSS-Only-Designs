let body = document.getElementsByTagName("body")[0];
    let tilted = false;
    let toggleTilt = function () {
      console.log("Clicked!")
      tilted = !tilted;
      if (tilted) body.classList.add("details");
      else body.classList.remove("details");
    };
    body.addEventListener("click", toggleTilt);
    body.addEventListener("touchstart", toggleTilt);
    if (location.pathname.match(/fullcpgrid/i)) setTimeout(toggleTilt, 1000);