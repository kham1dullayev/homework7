edit.addEventListener("input", () => {
    imgwidth = document.getElementById("imgwidth").value;
    imgheight = document.getElementById("imgheight").value;
    imgradius = document.getElementById("imgradius").value;
    imgopacity = document.getElementById("imgopacity").value;
    imgfilter = document.getElementById("imgfilter").value;
    imgbordercolor = document.getElementById("imgbordercolor").value;
    document.getElementById("img").style.width = imgwidth + "px";
    document.getElementById("img").style.height = imgheight + "px";
    document.getElementById("img").style.borderRadius = imgradius + "px";
    document.getElementById("img").style.opacity = imgopacity;
    document.getElementById("img").style.filter = imgfilter;
    document.getElementById("img").style.borderColor = imgbordercolor;
});
imgopacity.addEventListener("input", () => {
    imgopacity = document.getElementById("imgopacity").value;
    if (imgopacity > 1) {
        alert("Siz notug'ri son kiritdingiz? 0 va 1 oralig'idagi sonlardan kiriting")
    }
});