const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbarMain = document.querySelector(".navbar-main")
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("animation");
  if (hamburgerMenu.classList.contains("animation")) {
    hamburgerMenu.classList.remove("not-animation");
  } else {
    hamburgerMenu.classList.toggle("not-animation");
  }
  navbarMain.classList.toggle("nav-expanded")
});





// tab
// const tabs = document.querySelectorAll(".tab")
// const tabContentItem = document.querySelectorAll(".tab-content-item")
// tabs.forEach(tab => {
//   tab.addEventListener("click" , () => {
//     console.log(tab)

//     const targeTabContent = document.querySelector(`${tab.dataset.tabTarget}`);
//     console.log(targeTabContent)

//     tabs.forEach(tab => {tab.classList.remove("active")})
//     tabContentItem.forEach(tabContentItem => tabContentItem.classList.remove("active"))
//    tab.classList.add("active")
//    targeTabContent.classList.add("active");
//   })
// })


// const tabs = document.querySelectorAll(".tab")
// const tabContentItem = document.querySelectorAll(".tab-content-item")

// tabs.forEach(tab => console.log(tab))






// accordion
const accordionBody = document.querySelectorAll(".accordion-body")
console.log(accordionBody)

accordionBody.forEach((item) => {
  const accordionBodyHeader = item.querySelector(".accordion-body-header")
  console.log(accordionBodyHeader)

  accordionBodyHeader.addEventListener("click" , () => {
    const accordionOpen = document.querySelector(".accordion-open")

    if(accordionOpen && accordionOpen!==item){
      getToggle(accordionOpen)
    }
    getToggle(item)
  })

  
})

function getToggle(item){
  const accordionBodyContent = item.querySelector(".accordion-body-content")

 if(item.classList.contains("accordion-open")){
    accordionBodyContent.removeAttribute("style")
    item.classList.remove("accordion-open")
 }else{
  accordionBodyContent.style.height = accordionBodyContent.scrollHeight + "px"
  item.classList.add("accordion-open")
 }
}



