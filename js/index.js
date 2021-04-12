
const nodeElements = {
    mainBtn: document.querySelector(".main__button"),
    iosPwaPromptOverlay: document.querySelector('.ios-pwa-prompt__overlay--js'),
    iosPwaPromptContainer: document.querySelector('.ios-pwa-prompt__container--js'),
    iosPwaPromptBtn: document.querySelector('.ios-pwa-header__button--js')
}


function toggleIosPwaPrompt() {
    const { iosPwaPromptOverlay, iosPwaPromptContainer} = nodeElements;
    iosPwaPromptOverlay.classList.toggle("ios-pwa-prompt__overlay--hidden")
    iosPwaPromptContainer.classList.toggle("ios-pwa-prompt__container--hidden")
    iosPwaPromptOverlay.classList.toggle("ios-pwa-prompt__overlay--visible")
    iosPwaPromptContainer.classList.toggle("ios-pwa-prompt__container--visible")
}

function onTogglePwaPrompt(nodeElement) {
    nodeElement.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleIosPwaPrompt();
    })
}

window.addEventListener('DOMContentLoaded', () => {
    onTogglePwaPrompt(nodeElements.mainBtn)
    onTogglePwaPrompt(nodeElements.iosPwaPromptOverlay)
    onTogglePwaPrompt(nodeElements.iosPwaPromptBtn)

    setTimeout(()=> {
        toggleIosPwaPrompt()
    }, 1000)
});






