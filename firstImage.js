function firstImage() {
    var re = /<img[^>]+src="?([^"\s]+)"?[^>]*\/>/g;
    var results = re.exec(HTMLSTRING);
    var img = ''
    if (results) img = results[1];
    return img
}