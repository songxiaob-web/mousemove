! function () {
    var div = document.createElement('div');
    document.body.appendChild(div);
    div.style.width = 100 + 'px';
    div.style.height = 100 + 'px';
    let wDiv = 100;
    let HDiv = 100;
    let start = false;
    let moveStartX;
    let moveStartY;
    let moverLastX;
    let moverLastY;
    document.onmousemove = (e) => {
        if (!start) return
        let MstartClickX = e.clientX;
        let MstartClickY = e.clientY;
        console.log(window.screen)
        if (e.clientX <= wDiv / 2 && e.clientY <= HDiv / 2) {
            div.style.left = 0;
            div.style.top = 0;
            return
        } else if (e.clientX <= wDiv / 2 && e.clientY > HDiv / 2) {
            div.style.left = 0;
            div.style.top = MstartClickY - moveStartY + 'px';
            return
        } else if (e.clientX >= window.screen.width - wDiv / 2 && e.clientY <= HDiv / 2) {
            delete div.style.left;
            div.style.right = 0;
            div.style.top = 0;
            return
        } else if (e.clientX >= window.screen.width - wDiv / 2 && e.clientY > HDiv / 2) {
            div.style.right = 0;
            div.style.top = MstartClickY - moveStartY;
            return
        } else if (e.clientX <= wDiv / 2 && e.clientY > HDiv / 2) {
            div.style.left = 0;
            div.style.top = MstartClickY - moveStartY + 'px';
            return
        } else if (e.clientX > wDiv / 2 && e.clientY <= HDiv / 2) {
            div.style.left = MstartClickX - moveStartX + 'px';
            div.style.top = 0;
            return
        }

        div.style.left = MstartClickX - moveStartX + 'px';
        div.style.top = MstartClickY - moveStartY + 'px';

    }

    div.onmousedown = (e) => {
        moveStartX = e.clientX - moverLastX || 0;
        moveStartY = e.clientY - moverLastY || 0;
        start = true;
    }

    document.onmouseup = (e) => {
        moverLastX = parseInt(div.style.left);
        moverLastY = parseInt(div.style.top);
        start = false
    }
}()
