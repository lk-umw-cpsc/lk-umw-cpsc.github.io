function search_update() {
    var text = document.getElementById('searchbox').value.trim();
    if (text != null && text.length > 0) {
        search(text);
    } else {
        var container = document.getElementById('button-container');
        for (const element of container.children) {
            element.style.display = "block";
        }
    }
}

function search(keywordString) {
    var words = keywordString.split(/\s+/);
    var container = document.getElementById('button-container');
    for (const element of container.children) {
        var keywords = element.children[0].getAttribute('keywords').split(/\s+/);
        var found = false;
        for (const keyword of keywords) {
            for (var word of words) {
                word = word.toLowerCase();
                if (keyword.includes(word)) {
                    found = true;
                    break;
                }
            }
            if (found) {
                break;
            }
        }
        if (found) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}