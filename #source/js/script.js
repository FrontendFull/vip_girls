window.onload = function () {
    let item = document.querySelector('.none')
    console.log(item)
    for (let i = 1; i <= 48; i++) {
        for (let j = 2; j <= 3; j++) {
            item.insertAdjacentHTML('beforeend', `<div className="img_warp object-fit " data-fancybox="girl-${i}" data-src="img/girls/big/${i}-${j}.jpg"></div>`)
        }
    }
};

