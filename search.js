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
    var words = keywordString.toLowerCase().split(/\s+/);
    var container = document.getElementById('button-container');
    for (const element of container.children) {
        var keywords = element.children[0].getAttribute('keywords').split(/\s+/);
        var found = false;
        var count = 0;
        for (var word of words) {
            for (const keyword of keywords) {
                if (keyword.includes(word)) {
                    count++;
                    break;
                }
            }
        }
        if (count == words.length) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}