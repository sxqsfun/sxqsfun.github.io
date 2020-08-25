function ChangeImgSrcWithoutId() {
    var arrImg = document.images;
    for (var i = 0; i < arrImg.length; i++) {
        if (arrImg[i].getAttribute("src") != undefined && arrImg[i].getAttribute("title") != undefined && arrImg[i].getAttribute("src") == arrImg[i].getAttribute("title")) {
            arrImg[i].src = "../" + arrImg[i].getAttribute("src");
        }
    }
}
ChangeImgSrcWithoutId();//调用
