var video = document.getElementById("bg-video")
console.log(autoplay())


function isSafari(){
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
        return true
    }
    else if(ua.indexOf('chrome') > -1) {
        return false
    }
}

function autoplay(){
    if(isSafari() == true){
        video.autoplay = true

        video.muted = true
        console.log("chrome")
    }else{
        video.autoplay = false
        video.muted = false 
        console.log("safari")

    }
}

       

