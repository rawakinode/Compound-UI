
var url = window.location.href;
console.log(url);


window.onload = function(){
    linksStable();
}

function linksStable() {
    window.history.pushState("object or string", "Title", url);

    setTimeout(linksStable, 200);
}

linksStable();
