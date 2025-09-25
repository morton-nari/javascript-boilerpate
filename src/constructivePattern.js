

const constructivePattern = () => {
   
   
    const showHidemenu = (nodeName) => {
        const buttonSelect = document.querySelector(nodeName + ' .hamburger');
        return {
            activate: () => {
                buttonSelect.addEventListener
                    ('click', e =>
                     buttonSelect.parentNode.querySelector('.navbar').classList.toggle('dis-none'), false)
            },//activate
            hide: () =>
                buttonSelect.parentNode.querySelector('.navbar').classList.add('dis-none')
        } // return
    } //menu button

    const topMenu = new showHidemenu('#topMenu');
    topMenu.activate();
    const bottomMenu = new showHidemenu('#bottmMenu');
    bottomMenu.activate();
    bottomMenu.hide();
    
}

export default constructivePattern
