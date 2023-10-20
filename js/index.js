function myFunction(x) {
    if (x.matches) {
        document.body.style.backgroundColor = "yellow";
    }
}

var x = window.matchMedia("(max-width: 433px)")
myFunction(x)
x.addListener(myFunction);