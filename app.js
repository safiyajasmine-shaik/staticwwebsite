const userInput = document.queryselector("#textareainput")
const postData = document.queryselector("#post-data")
const postButton = document.queryselector("#post-btn")
let userInputData;
const userInputHandler = (e) => {
    userInputData = e.target.value
}
const postClickHandler = () => {
    postData.textcontent = userInput
}
userInput.addEventListener("input",userInputHandler)
postButton.addEventListener("click",postClickHandler)