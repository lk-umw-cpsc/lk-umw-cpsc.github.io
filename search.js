function search_update() {
    var text = document.getElementById('searchbox').value;
    console.log(text);
    if (text != null && text.length > 0) {
        search(text);
    } else {
        var container = document.getElementById('button-container');
        for (const element of container.children) {
            element.children[0].style.visibility = "visible";
        }
    }
}

function search(keywordString) {
    var words = keywordString.split(' ');
    var container = document.getElementById('button-container');
    for (const element of container.children) {
        var keywords = element.children[0].getAttribute('keywords').split(' ');
        var found = false;
        for (const keyword of keywords) {
            for (const word of words) {
                if (keyword.includes(word)) {
                    found = true;
                    break;
                }
            }
            if (found) {
                break;
            }
        }
        if (!found) {
            element.style.visibility = "hidden";
        }
    }
}