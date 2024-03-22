// // https://getbootstrap.com/docs/5.3/components/alerts/

// Contact
// -- Email Button
const sendBtn = document.getElementById("liveAlertBtn")
const alertPlaceholder =  document.getElementById("liveAlertPlaceholder")

const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = "Thanks! I will get back to you."

    alertPlaceholder.append(wrapper)
  }

const alertTrigger = sendBtn
  if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
      appendAlert('Nice, you triggered this alert message!', 'success')
    })
  }

// Blog
// -- Filter Buttons
const fltrBtns = document.getElementsByTagName("filter")
const fltrCards = document.getElementsByTagName("article")

for (let i = 0; i < fltrBtns.length; i++) {
  fltrBtns.item(i).addEventListener("click", myFunction)
}

function myFunction(event) {
  // only one filter at a time
  let myFilter = event.srcElement // event.target

  if (myFilter.classList.contains("text-bg-dark"))
  {
    myFilter.classList.replace("text-bg-dark","text-bg-light")
    for(let j = 0; j < fltrCards.length; j++)
    {
      fltrCards[j].classList.remove("d-none")
    }
  }
  else
  {
    console.log("filtering",myFilter.innerHTML)
    for(let j = 0; j < fltrBtns.length; j++){
      fltrBtns[j].classList.replace("text-bg-dark","text-bg-light")
    }
    myFilter.classList.replace("text-bg-light","text-bg-dark")

    for(let j = 0; j < fltrCards.length; j++)
    {
      fltrCards[j].classList.remove("d-none")
      if (fltrCards[j].children[1].innerHTML != myFilter.innerHTML)
      {
        fltrCards[j].classList.add("d-none")
      }
    }
  }
}

// -- Search Button
// ideally would search the entire website
const searchBtn = document.getElementById("searchBtn")
const searchQuery = document.getElementById("searchText")
searchBtn.addEventListener('click',searchDuckDuckGo)

function searchDuckDuckGo(e){
    let newSearch = "https://duckduckgo.com/?q=" + searchQuery.value.replaceAll(" ","+") + "site:https://zackbk.github.io/online-cv/"
    console.log("redirecting to:",newSearch)
    window.location.replace(newSearch)
}

