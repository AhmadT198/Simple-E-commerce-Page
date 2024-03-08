//Add elements
let builds = [
  {
    name : "AMD Low-End Build",
    img : "https://ahw.store/image/cache/catalog/Builds/clplqtq2z04iu01o1e0s3gui4_AMD-Low-End-Build-250x250.png",
    price : "EGP16,500",
    moreInfo : "Built-In APU Build from ArabHardware Store <br><br>You will get FREE GENUINE WINDOWS 10 PRO <br><br>Processor <br>- AMD RYZEN 3 4300G AM4 Processor 4-Core 8-Threads (Max Boost 4.0 GHz) <br><br>Motherboard <br>- GIGABYTE B450M S2H AM4 DDR4 Micro ATX Motherboard <br><br>RAM <br>- Kingston Fury Beast 8GB 3200 NONE RGB RAM KF432C16BB-8 <br><br>Case + Power Supply <br>- Fantech Aero CG80 RGB Mid Tower Case - Space Edition White + T-Dagger T-TPS201 600W Power Supply <br>"
  },
  {
    name : "AMD Mid-Range Build",
    img : "https://ahw.store/image/cache/catalog/Builds/clpnajalj05i501o104k37ivp_AMD-MID-RANGE-BUILD-250x250.png",
    price : "EGP36,000",
    moreInfo : "Built-In APU Build from ArabHardware Store <br><br>You will get FREE GENUINE WINDOWS 10 PRO <br><br>Processor <br>- AMD RYZEN 3 4300G AM4 Processor 4-Core 8-Threads (Max Boost 4.0 GHz) <br><br>Motherboard <br>- GIGABYTE B450M S2H AM4 DDR4 Micro ATX Motherboard <br><br>RAM <br>- Kingston Fury Beast 8GB 3200 NONE RGB RAM KF432C16BB-8 <br><br>Case + Power Supply <br>- Fantech Aero CG80 RGB Mid Tower Case - Space Edition White + T-Dagger T-TPS201 600W Power Supply <br>"
  },
  {
    name : "AMD High-End Build",
    img : "https://ahw.store/image/cache/catalog/Builds/clplqwdbs04jt01o14xq882ff_AMD-High-end-Build-250x250.png",
    price : "EGP56,300",
    moreInfo : "Built-In APU Build from ArabHardware Store <br><br>You will get FREE GENUINE WINDOWS 10 PRO <br><br>Processor <br>- AMD RYZEN 3 4300G AM4 Processor 4-Core 8-Threads (Max Boost 4.0 GHz) <br><br>Motherboard <br>- GIGABYTE B450M S2H AM4 DDR4 Micro ATX Motherboard <br><br>RAM <br>- Kingston Fury Beast 8GB 3200 NONE RGB RAM KF432C16BB-8 <br><br>Case + Power Supply <br>- Fantech Aero CG80 RGB Mid Tower Case - Space Edition White + T-Dagger T-TPS201 600W Power Supply <br>"
  },
  {
    name : "Intel High-End Build",
    img : "https://ahw.store/image/cache/catalog/Builds/clplqza7704ku01o19qtq0srf_Intel-High-end-Build-250x250.png",
    price : "EGP56,500",
    moreInfo : "Built-In APU Build from ArabHardware Store <br><br>You will get FREE GENUINE WINDOWS 10 PRO <br><br>Processor <br>- AMD RYZEN 3 4300G AM4 Processor 4-Core 8-Threads (Max Boost 4.0 GHz) <br><br>Motherboard <br>- GIGABYTE B450M S2H AM4 DDR4 Micro ATX Motherboard <br><br>RAM <br>- Kingston Fury Beast 8GB 3200 NONE RGB RAM KF432C16BB-8 <br><br>Case + Power Supply <br>- Fantech Aero CG80 RGB Mid Tower Case - Space Edition White + T-Dagger T-TPS201 600W Power Supply <br>"
  },
  {
    name : "Intel Extreme PC",
    img : "https://ahw.store/image/cache/catalog/Builds/clpzhaeog0dgb01o1499pfycb__5BAHW-Build_5D-Intel-Extreme-PC-_GEN-14_-250x250.jpg",
    price : "EGP87,000",
    moreInfo : "Built-In APU Build from ArabHardware Store <br><br>You will get FREE GENUINE WINDOWS 10 PRO <br><br>Processor <br>- AMD RYZEN 3 4300G AM4 Processor 4-Core 8-Threads (Max Boost 4.0 GHz) <br><br>Motherboard <br>- GIGABYTE B450M S2H AM4 DDR4 Micro ATX Motherboard <br><br>RAM <br>- Kingston Fury Beast 8GB 3200 NONE RGB RAM KF432C16BB-8 <br><br>Case + Power Supply <br>- Fantech Aero CG80 RGB Mid Tower Case - Space Edition White + T-Dagger T-TPS201 600W Power Supply <br>"
  },
]

function createCard(build) {
  const cardElement = document.createElement('li');
  cardElement.classList.add('card');
  
  // Create the image container
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('img');
  
  // Create and configure the image
  const img = document.createElement('img');
  img.src = build.img;
  img.alt = "";
  img.draggable = false;
  imgDiv.appendChild(img);
  
  // Create and configure the heading
  const heading = document.createElement('h2');
  heading.textContent = build.name;
  heading.style.color = "#A25772";
  heading.style.fontWeight = "bold";
  
  // Create the price span
  const priceSpan = document.createElement('span');
  priceSpan.textContent = build.price;
  
  // Create the more info container
  const moreInfoDiv = document.createElement('div');
  moreInfoDiv.classList.add('more-info', 'invisible');
  moreInfoDiv.innerHTML = build.moreInfo;
  
  // Assemble the elements
  cardElement.appendChild(imgDiv);
  cardElement.appendChild(heading);
  cardElement.appendChild(priceSpan);
  cardElement.appendChild(moreInfoDiv);
  
  // Add the card element to the desired parent element in the DOM
  const targetElement = document.getElementById('#card-container'); // Replace with the actual selector for your target element
  targetElement.appendChild(cardElement);
  
  cardElement.addEventListener("click", () => {
    x = cardElement.childNodes[3]
    if(x.classList.contains("invisible")){
      x.classList.remove("invisible")
    }
    else {
      x.classList.add("invisible")
    }
})}


for(let i = 0; i < builds.length; i++)
{
  createCard(builds[i])
}

const searchInput = document.getElementById('search-input'); // Replace with the actual id of your search input element
const cardContainer = document.getElementById('#card-container'); // Replace with the actual id of your card container element
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredBuilds = builds.filter(build => build.name.toLowerCase().includes(searchTerm));
  // Clear the card container
  cardContainer.innerHTML = '';
  console.log(filteredBuilds.length)
  leftBtn = document.getElementById("left")
  rightBtn = document.getElementById("right")
  console.log(leftBtn)
  if(filteredBuilds.length <= 3)
  {
    if(!leftBtn.classList.contains("invisible")){
      leftBtn.classList.add("invisible")
      rightBtn.classList.add("invisible")
    }
  } else {
    if(leftBtn.classList.contains("invisible")){
      leftBtn.classList.remove("invisible")
      rightBtn.classList.remove("invisible")
    }
  }

  // Render the filtered builds
  filteredBuilds.forEach(build => {
    createCard(build)
  });
});





// Slider effects
const carousel = document.querySelector(".carousel"); 
const arrowBtns = document.querySelectorAll(".wrapper i"); 
const wrapper = document.querySelector(".wrapper"); 

const cardWidth = 326.650

// Add event listeners for the arrow buttons to  
// scroll the carousel left and right 
arrowBtns.forEach(btn => { 
    btn.addEventListener("click", () => { 
        carousel.scrollLeft += btn.id === "left" ?  
            -cardWidth : cardWidth; 
    }); 
}); 


// Search functionality
