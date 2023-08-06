const nextButton = document.querySelector(".btnNext");
const wrapper = document.querySelector(".wrapper");
const body = document.body;
const numbers = document.querySelectorAll(".number");
const contentChange = document.querySelector(".changeSect");
const infoSection = document.querySelector(".info");
const numberOne = document.querySelector(".numberOne");
const numberTwo = document.querySelector(".numberTwo");
const numberThree = document.querySelector(".numberThree");
const numberFour = document.querySelector(".numberFour");
const backBtn = document.querySelector(".backBut");

let userClick = [false];

const pages = [
  {
    html: `<h1 class="mt-7 text-3xl font-bold mb-4 xl:text-4xl 2xl:text-5xl">
    Personal Info
  </h1>
  <p class="mb-5 font-normal text-xl text-CoolGray xl:pb-5 2xl:text-xl">
    Please provide your name, email address, and phone number.
  </p>
  <div class="mb-4">
    <div class="flex justify-between"  >
       <h1 class="font-medium">Name</h1>
       <h1 class="font-semibold hidden errName text-StrawberryRed">This field is required</h1>
    </div>
    <input
      id="nameReq"
      type="text"
      placeholder="e.g. Stephen kings"
      class="border border-CoolGray hover:border-MarineBlue text-MarineBlue font-medium text-xl w-full p-2 rounded outline-none xl:p-3 xl:rounded-lg xl:mt-1"
    />
  </div>
  <div class="mb-4">  
      <div class="flex justify-between">                            
       <h1 class="font-medium">Email Address</h1>
       <h1 class="font-semibold errMail text-StrawberryRed hidden">This field is required</h1>
      </div>
    <input
      placeholder="stephenking@lorem.com"
      type="email"     
      id="mailReq"
      name=""
      class="border border-CoolGray hover:border-MarineBlue  font-medium text-xl   w-full p-2 rounded outline-none xl:p-3 xl:rounded-lg xl:mt-1"
    />
  </div>
  <div class="mb-4">
     <div class="flex justify-between">
       <h1 class="font-medium">Phone Number</h1>
       <h1 class="font-semibold errPhone text-StrawberryRed hidden">This field is required</h1>
      </div>
    <input
      type="text"
      placeholder="e.g. +1 234 567 890"
      name=""
      id="phoneNumReq"
      class="border border-CoolGray hover:border-MarineBlue font-medium text-xl w-full p-2 rounded outline-none xl:p-3 xl:rounded-lg xl:mt-1"
    />
  </div>`,
  },
  {
    html: `<h1 class="mt-7 text-3xl plans font-bold mb-4 xl:text-4xl 2xl:text-5xl">
    Select your plan
    </h1>
    <p
    class="mb-5 font-normal text-lg text-CoolGray xl:pb-5 2xl:text-xl"
    >
    You have the option of monthly or yearly billing.
    </p>
    <div class="2xl:flex 2xl:justify-between 2xl:h-2/4 2xl:mb-5">
    <div
      class=" arcSel  border p-3 border-CoolGray rounded-lg flex mb-3  hover:border-MarineBlue 2xl:w-1/4 2xl:inline-block 2xl:p-6"
    >
      <img
        class="align-text-bottom"
        src="./assets/images/icon-arcade.svg"
        alt=""
      />
    
      <div class="arcDiv pl-3 2xl:pl-0 2xl:pt-16  ">
        <h1 class="font-medium text-lg">Arcade</h1>
        <h1 class=" text-CoolGray text-lg  arcPrice">
         $9/mo
        </h1>
        <h1 class="font-meduium hidden arcYear ">2 months free</h1>
      </div>
    </div>
    
    <div
      class=" advSel    border p-3 border-CoolGray rounded-lg flex mb-3  hover:border-MarineBlue 2xl:w-1/4 2xl:inline-block 2xl:p-6"
    >
      <img
        class="align-text-bottom"
        src="./assets/images/icon-advanced.svg"
        alt=""
      />
      <div class="advDiv  pl-3 2xl:pl-0 2xl:pt-16">
        <h1 class="font-medium text-lg">Advanced</h1>
        <h1 class="text-CoolGray text-lg advPrice">
       $12/mo
        </h1>
        <h1 class="font-meduium hidden advYear">2 months free</h1>
      </div>
    </div>
    
    <div
      class=" proSel   border p-3 border-CoolGray rounded-lg flex mb-3  hover:border-MarineBlue 2xl:w-1/4 2xl:inline-block 2xl:p-6"
    >
      <img
        class="align-text-bottom"
        src="./assets/images/icon-pro.svg"
        alt=""
      />
      <div class="proDiv pl-3 2xl:pl-0 2xl:pt-16">
        <h1 class="font-medium text-lg">Pro</h1>
        <h1 class="text-CoolGray proPrice text-lg ">
          $15/mo
        </h1>
        <h1 class="font-meduium hidden proYear ">2 months free</h1>
      </div>
    </div>
    </div>
    <div class="w-full pt-4 rounded-lg bg-Magnolia">
    <div class="flex w-2/3 ml-auto mr-auto justify-between">
      <h1>Monthly</h1>
      <label
        for="slider"
        class="relative switch w-14 inline-block h-12 transition duration-300 ease-in-out"
      >
        <input
          type="checkbox"
          name=""
          id="checkSlide"
          class="h-12 absolute w-12 opacity-0 z-10"
        />
        <span
          class="slider absolute cursor-default border rounded-xl round top-0 h-2/4 bottom-0 left-0 right-0 bg-MarineBlue before:absolute before:h-4 before:w-4 before:left-2 before:bottom-1 before:bg-White before:rounded-full before:transition duration-300"
        ></span>
      </label>
      <h1>Yearly</h1>
    </div>`,
  },
  {
    html: `
    <h1 class="mt-7 text-3xl font-bold mb-4 xl:text-4xl 2xl:text-5xl">
    Pick add-ons
    </h1>
    <p
      class="mb-5 font-normal text-lg text-LightGray xl:pb-5 2xl:text-xl"
    >
      Add-ons help enhance your gaming experience.
    </p>
    <div class="p-3  border w-full justify-between border-CoolGray rounded-lg flex mb-3 hover:bg-Magnolia hover:border-MarineBlue 2xl:p-6"">
        <input type="checkbox" name="" id="addonCheckboxes" class="w-6" />

        <div class="ml-5 xl:text-xl ">
          <ul>
            <li class="font-bold">Online service</li>
            <li class="text-LightGray"> Access to multiplayer games</li>
          </ul>
        </div>                  

        <h1 class="mt-3 priceYrOnl ml-1 text-PurplishBlue">+$1/mo</h1>
  </div>

  <div
    class="border p-3 border-CoolGray justify-between rounded-lg flex mb-3 hover:bg-Magnolia hover:border-MarineBlue 2xl:p-6"
  >
    <input type="checkbox" name="" id="addonCheckboxes" class="w-6" />

    <div class="ml-5  xl:text-xl ">
      <ul>
        <li class="font-bold">Larger storage</li>
        <li class="text-LightGray ">Extra 1TB of cloud save</li>
      </ul>
    </div>
    
    <h1 class="mt-3 ml-1   priceYrLar text-PurplishBlue">
      "+$2/mo"
    </h1>
  </div>

  <div
    class="border p-3 border-CoolGray justify-between rounded-lg flex mb-3 hover:bg-Magnolia hover:border-MarineBlue 2xl:p-6"
  >
    <input type="checkbox" name="" id="addonCheckboxes" class="w-6" />

    <div class="ml-5 xl:text-xl">
      <ul>
        <li class="font-bold ">Customizable Profile</li>
        <li class="text-LightGray">Custom theme on your profile</li>
      </ul>
    </div>
    
    <h1 class="mt-3 ml-1 priceYrCus text-PurplishBlue">
     +$2/mo</h1>
  </div>`,
  },
  {
    html: ` <div

    <h1 class="mt-7 text-3xl font-bold mb-4 xl:text-4xl 2xl:text-5xl">
      Finishing up
    </h1>
    <p class="mb-5 font-normal text-xl text-CoolGray xl:pb-5 2xl:text-xl">
      Double-check everything looks OK before confirming.
    </p>
    
  <div class="bg-LightGray rounded-2xl p-6 text-xl">
    <div class="flex summaryUp justify-between border-b-2 border-CoolGray pb-5">
      <div>
        <h1 class="text-MarineBlue planTitle font-bold">Arcade (Monthly)</h1>
      </div>
      <h1 class="mt-auto mb-auto planPrice font-semibold">$9/mo</h1>
    </div>

    <div class="summaryDown">
    <div class="flex justify-between mt-3">
      <h1 class="text-CoolGray">Online service</h1>
      <h1 class="font-semibold">$1/mo</h1>
    </div>

    <div class="flex justify-between mt-3">
      <h1 class="text-CoolGray">Larger storage</h1>
      <h1 class="font-semibold">$2/mo</h1>
    </div>
    </div>
  </div>
  <div class="flex justify-between mt-10 mb-10">
    <p class="text-CoolGray total text-xl">Total (per month)</p>
    <h1 class="text-2xl ttalAmt text-PurplishBlue font-bold">$12/mo</h1>
  </div>
</div>`,
  },
  {
    html: ` <div class="mt-20 mb-20 text-center xl:ml-12 2xl:ml-0">
  <img
    class="ml-auto mr-auto mb-7"
    src="./assets/images/icon-thank-you.svg"
    alt=""
  />
  <h1 class="mb-5 text-3xl font-bold">Thank you!</h1>
  <p class="text-CoolGray text-xl">
    Thanks for confirming your subscription! We hope you have fun
    using our platform. If you ever need support, please feel free to
    email us at support
    <a href="mailto:loremgaming.com">@loremgaming.com.</a>
  </p>
  </div>`,
  },
];

let currentPage = 0;
numberOne.classList.add("bg-PastelBlue");
contentChange.innerHTML = pages[currentPage].html;

const userData = {
  name: "",
  email: "",
  phoneNumber: "",
  addOns: [],
  plan: 0,
};

function updateNumberings() {
  numberOne.classList.remove("bg-PastelBlue");
  numberTwo.classList.remove("bg-PastelBlue");
  numberThree.classList.remove("bg-PastelBlue");
  numberFour.classList.remove("bg-PastelBlue");

  switch (currentPage) {
    case 0:
      numberOne.classList.add("bg-PastelBlue");
      break;
    case 1:
      numberTwo.classList.add("bg-PastelBlue");
      break;
    case 2:
      numberThree.classList.add("bg-PastelBlue");
      break;
    case 3:
      numberFour.classList.add("bg-PastelBlue");
      break;
  }
}

function next() {
  if (currentPage === 0) {
    if (!pageOnError()) {
      currentPage++;
      contentChange.innerHTML = pages[currentPage].html;
    }
    console.log(userData);
    updateNumberings();
  } else if (currentPage === 1) {
    const plans = document.querySelector(".plans");
    currentPage++;
    console.log(plans);
    contentChange.innerHTML = pages[currentPage].html;
  } else if (currentPage === 2) {
    currentPage++;
    contentChange.innerHTML = pages[currentPage].html;
    console.log(userData);
  } else if (currentPage === 3) {
    currentPage++;
    console.log(userData);
    contentChange.innerHTML = pages[currentPage].html;
    const summaryUp = document.querySelector(".summaryUp");
    const summaryDown = document.querySelector(".summaryDown");
  } else if (currentPage === 4) {
    contentChange.innerHTML = pages[currentPage].html;
  }
  pageStuffs();
  console.log(currentPage);
}

function goBack() {
  if (currentPage === 1) {
    currentPage--;
    contentChange.innerHTML = pages[currentPage].html;
    reversal1();
    updateNumberings();
  } else if (currentPage === 2) {
    currentPage--;
    contentChange.innerHTML = pages[currentPage].html;
    pageStuffs();
    updateNumberings();
  } else if (currentPage === 3) {
    userData.addOns.length = 0;
    console.log(userData.addOns.length);
    console.log("Wahahahahah");
    currentPage--;
    contentChange.innerHTML = pages[currentPage].html;
    pageStuffs();
    updateNumberings();
  } else if (currentPage === 4) {
    currentPage--;
    contentChange.innerHTML = pages[currentPage].html;
    pageStuffs();
    const footer = document.querySelector(".footer");
    footer.classList.remove("hidden");
    updateNumberings();
  }
}

function reversal1() {
  const nameInput = document.getElementById("nameReq");
  const emailInput = document.getElementById("mailReq");
  const phoneInput = document.getElementById("phoneNumReq");
  if (userData.name) {
    nameInput.value = userData.name;
  }
  if (userData.email) {
    emailInput.value = userData.email;
  }
  if (userData.phoneNumber) {
    phoneInput.value = userData.phoneNumber;
  }
}

function pageStuffs() {
  if (currentPage === 0) {
    const nameInput = document.getElementById("nameReq");
    const emailInput = document.getElementById("mailReq");
    const phoneInput = document.getElementById("phoneNumReq");
    nameInput.addEventListener("input", function () {
      userData.name = this.value;
      nameInput.classList.add("text-MarinBlue");
    });
    emailInput.addEventListener("input", function () {
      userData.email = this.value;
    });

    phoneInput.addEventListener("input", function () {
      userData.phoneNumber = this.value;
    });
  }
  if (currentPage === 1) {
    checkSlide.addEventListener("input", slidefunc);
    backBtn.classList.remove("hidden");
    nextButton.textContent = "Next step";
    nextButton.classList.remove("bg-PurplishBlue");
    pageTwoSel();
    updateNumberings();
    // yearFunc();
  }
  if (currentPage === 2) {
    // yearFunc();
    backBtn.classList.remove("hidden");
    nextButton.textContent = "Next step";
    nextButton.classList.remove("bg-PurplishBlue");
    checkBox();
    updateNumberings();
  }
  if (currentPage === 3) {
    backBtn.classList.remove("hidden");
    planDisplay();
    addOnsDisplay();
    nextButton.textContent = "Confirm";
    nextButton.classList.add("bg-PurplishBlue");
    updateNumberings();
    // yearFunc();
  }
  if (currentPage === 4) {
    const footer = document.querySelector(".footer");
    footer.classList.add("hidden");
    updateNumberings();
  }
  yearFunc();
}
pageStuffs();

function checkBox() {
  const addonCheckboxes = document.querySelectorAll("#addonCheckboxes");
  addonCheckboxes.forEach((checkbox, index) => {
    console.log(checkBox);
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        console.log(this); // 'this' refers to the checkbox element
        userData.addOns.push(index);
      } else {
        const addonIndex = userData.addOns.indexOf(index);
        if (addonIndex !== -1) {
          userData.addOns.splice(addonIndex, 1);
        }
      }
    });
  });
  // addOnsDisplay();
}

function pageOnError() {
  const nameInput = document.querySelector("#nameReq");
  const mailInput = document.querySelector("#mailReq");
  const numReq = document.querySelector("#phoneNumReq");
  const errName = document.querySelector(".errName");
  const errMail = document.querySelector(".errMail");
  const errPhone = document.querySelector(".errPhone");
  let errInit = false;
  if (!/^[A-Za-z]+$/.test(nameInput.value)) {
    errName.classList.remove("hidden");
    errInit = true;
  } else {
    errName.classList.add("hidden");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mailInput.value)) {
    errMail.classList.remove("hidden");
    errInit = true;
  } else {
    errMail.classList.add("hidden");
  }
  if (numReq.value.length < 9 || !/^\d+$/.test(numReq.value)) {
    errPhone.textContent = "min. of nine digits";
    errPhone.classList.remove("hidden");
    errInit = true;
  } else {
    errPhone.classList.add("hidden");
  }
  return errInit;
}

function slidefunc() {
  const arcYear = document.querySelector(".arcYear");
  const advYear = document.querySelector(".advYear");
  const proYear = document.querySelector(".proYear");
  const freeText = [arcYear, advYear, proYear];
  const arcPrice = document.querySelector(".arcPrice");
  const advPrice = document.querySelector(".advPrice");
  const proPrice = document.querySelector(".proPrice");

  const slideHandle = document.querySelector(".slider");
  let initial = false;
  if (checkSlide.checked) {
    initial = true;
    userClick[0] = true;
  } else {
    initial = false;
    userClick[0] = false;
  }
  if (initial) {
    slideHandle.classList.add("before:translate-x-5");
  } else {
    slideHandle.classList.remove("before:translate-x-5");
    arcPrice.textContent = "$9/mo";
    advPrice.textContent = "$12/mo";
    proPrice.textContent = "$15/mo";
    freeText.forEach((div) => div.classList.add("hidden"));
  }
  yearFunc();
  console.log(userClick);
  return initial;
}

function pageTwoSel() {
  const arcSel = document.querySelector(".arcSel");
  const advSel = document.querySelector(".advSel");
  const proSel = document.querySelector(".proSel");
  const selDiv = [arcSel, advSel, proSel];

  selDiv.forEach((selector, index) => {
    selector.addEventListener("click", function () {
      userData.plan = index;
      console.log(index);
    });
  });

  const jujuju = (event) => {
    selDiv.forEach((div) => {
      div.classList.remove("bg-PastelBlue");
    });

    event.currentTarget.classList.add("bg-PastelBlue");
    // userData.plan = event.currentTarget;
  };

  selDiv.forEach((div) => div.addEventListener("click", jujuju));
}

function planDisplay() {
  const planTitle = document.querySelector(".planTitle");
  const planPrice = document.querySelector(".planPrice");

  let addOnPrice = 0;

  if (userData.plan === 0) {
    if (userClick[0]) {
      addOnPrice = 90;
      planTitle.textContent = "Arcade(yearly)";
      planPrice.textContent = "+$90/yr";
    } else {
      addOnPrice = 9;
      planTitle.textContent = "Arcade(monthly)";
      planPrice.textContent = "+$9/mo";
    }
  } else if (userData.plan === 1) {
    if (userClick[0]) {
      addOnPrice = 120;
      planTitle.textContent = "Pro(yearly)";
      planPrice.textContent = "+$120/yr";
    } else {
      addOnPrice = 12;
      planTitle.textContent = "Pro(monthly)";
      planPrice.textContent = "+$12/mo";
    }
  } else if (userData.plan === 2) {
    if (userClick[0]) {
      addOnPrice = 150;
      planTitle.textContent = "Advance(yearly)";
      planPrice.textContent = "+$150/yr";
    } else {
      addOnPrice = 15;
      planTitle.textContent = "Advance(monthly)";
      planPrice.textContent = "+$12/mo";
    }
  }
  console.log(addOnPrice);
  return addOnPrice;
}

function addOnsDisplay() {
  const totalAmmt = document.querySelector(".ttalAmt");
  const addsOnList = document.querySelector(".summaryDown");
  addsOnList.innerHTML = "";
  totalAmmt.textContent = "";
  let totalAmount = 0;
  let planAmt = planDisplay();
  let addonPrice = 0;
  userData.addOns.forEach((addonIndex) => {
    const addonDiv = document.createElement("div");

    if (addonIndex === 0) {
      if (userClick[0]) {
        addonPrice = 10;
        addonDiv.innerHTML = `
        <div class="flex justify-between mt-3">
          <h1 class="text-CoolGray">Online service</h1>
          <h1 class="font-semibold">+$10/yr</h1>
        </div>`;
      } else {
        addonPrice = 1;
        addonDiv.innerHTML = `
        <div class="flex justify-between mt-3">
          <h1 class="text-CoolGray">Online service</h1>
          <h1 class="font-semibold">+$1/mo</h1>
        </div>`;
      }
    }

    if (addonIndex === 1) {
      if (userClick[0]) {
        addonPrice = 20;
        addonDiv.innerHTML = `
           <div class="flex justify-between mt-3">
            <h1 class="text-CoolGray">Larger storage</h1>
             <h1 class="font-semibold">+$20/yr</h1>
          </div>`;
      } else {
        addonPrice = 2;
        addonDiv.innerHTML = `
           <div class="flex justify-between mt-3">
            <h1 class="text-CoolGray">Larger storage</h1>
             <h1 class="font-semibold">+$2/mo</h1>
          </div>`;
      }
    }
    if (addonIndex === 2) {
      if (userClick[0]) {
        addonPrice = 20;
        addonDiv.innerHTML = `
           <div class="flex justify-between mt-3">
            <h1 class="text-CoolGray">Customizable profile</h1>
             <h1 class="font-semibold">+$20/yr</h1>
          </div>`;
      } else {
        addonPrice = 2;
        addonDiv.innerHTML = `
             <div class="flex justify-between mt-3">
              <h1 class="text-CoolGray">Customizable profile</h1>
               <h1 class="font-semibold">+$2/mo</h1>
            </div>`;
      }
    }
    totalAmount += addonPrice;
    addsOnList.appendChild(addonDiv);
  });
  totalAmmt.textContent = `+$${planAmt + totalAmount}`;
  return totalAmount;
}

function yearFunc() {
  if (userClick[0]) {
    if (currentPage === 1) {
      const arcYear = document.querySelector(".arcYear");
      const advYear = document.querySelector(".advYear");
      const proYear = document.querySelector(".proYear");
      const arcPrice = document.querySelector(".arcPrice");
      const advPrice = document.querySelector(".advPrice");
      const proPrice = document.querySelector(".proPrice");
      const freeText = [arcYear, advYear, proYear];
      arcPrice.textContent = "$90/yr";
      advPrice.textContent = "$120/yr";
      proPrice.textContent = "$150/yr";
      freeText.forEach((div) => div.classList.remove("hidden"));
    }
    if (currentPage === 2) {
      const priceYrOnl = document.querySelector(".priceYrOnl");
      const priceYrLar = document.querySelector(".priceYrLar");
      const priceYrCus = document.querySelector(".priceYrCus");
      priceYrOnl.textContent = "+$10/yr";
      priceYrLar.textContent = "+$20/yr";
      priceYrCus.textContent = "+$20/yr";
    }
    if (currentPage === 3) {
      const total = document.querySelector(".total");
      total.textContent = "Total(per year)";
    }
  }
}

nextButton.addEventListener("click", next);
backBtn.addEventListener("click", goBack);
