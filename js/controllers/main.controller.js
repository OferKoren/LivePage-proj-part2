function onMainNavToggle(elbtn) {
    const elMainNavList = document.querySelector('.main-nav')
    console.log(elMainNavList)
    console.log(elbtn)
    elMainNavList.classList.toggle('expanded')
    elbtn.classList.toggle('checked')
}
