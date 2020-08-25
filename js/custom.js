<script>
    function ChangeImgSrcWithoutId() {
        var arrImg = document.images;
        for (var i = 0; i < arrImg.length; i++) {
            if (arrImg[i].getAttribute("src") != undefined) {
                arrImg[i].src = "../" + arrImg[i].getAttribute("src");
            }
        }
    }
    ChangeImgSrcWithoutId();//调用
</script>