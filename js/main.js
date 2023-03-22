const btn = document.querySelector('.box__submit')
const ratingSection = document.querySelector('.rating')
const thanksSection = document.querySelector('.thanks')
const rateButtons = document.querySelectorAll('.box__rating-circle')
const rateText = document.querySelector('.rate')

const switchSection = () => {
    btn.addEventListener('click', () => {
        ratingSection.classList.add('disabled')
        thanksSection.classList.remove('disabled')
    })
}

rateButtons.forEach((rateButton) => {
    rateButton.addEventListener('click', () => {
        rateButton.classList.add('checked')
        rateText.innerHTML = rateButton.innerHTML
    })
})

switchSection();