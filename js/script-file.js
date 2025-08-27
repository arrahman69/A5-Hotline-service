
// Reuseable function
function getElement(id) {
    let element = document.getElementById(id);
    return element;
}
// get elements
const serviceContainer = getElement('service_container');
const historyContainer = getElement('history_container');
const clearBtn = getElement('clear_btn');
const heartCount = getElement('heart_count');
const coinCount = getElement('coin_count');
const copyCount = getElement('copy_count');

// Get value and convert string to number
let totalHeart = Number(heartCount.innerText);
let totalCoin = Number(coinCount.innerText);
let totalCopy = Number(copyCount.innerText);

// Service Item array
const services = [
    {
        id: 1,
        logo: '../assets/emergency.png',
        title: 'National Emergency Number',
        subtitle: 'National Emergency',
        number: '999',
        department: 'All',
    },
    {
        id: 2,
        logo: '../assets/police.png',
        title: 'Police Helpline Number',
        subtitle: 'Police',
        number: '999',
        department: 'Police',
    },
    {
        id: 3,
        logo: '../assets/fire-service.png',
        title: 'Fire Service Number',
        subtitle: 'Fire Service',
        number: '999',
        department: 'Fire',
    },
    {
        id: 4,
        logo: '../assets/ambulance.png',
        title: 'Ambulance Service',
        subtitle: 'Ambulance',
        number: '1994-999999',
        department: 'Health',
    },
    {
        id: 5,
        logo: '../assets/emergency.png',
        title: 'Women & Child Helpline',
        subtitle: 'Women & Child Helpline',
        number: '109',
        department: 'Help',
    },
    {
        id: 6,
        logo: '../assets/emergency.png',
        title: 'Anti-Corruption Helpline',
        subtitle: 'Anti-Corruption',
        number: '106',
        department: 'Govt.',
    },
    {
        id: 7,
        logo: '../assets/emergency.png',
        title: 'Electricity Helpline',
        subtitle: 'Electricity Outage',
        number: '16216',
        department: 'Electricity',
    },
    {
        id: 8,
        logo: '../assets/brac.png',
        title: 'Brac Helpline',
        subtitle: 'Brac',
        number: '16445',
        department: 'NGO',
    },
    {
        id: 9,
        logo: '../assets/Bangladesh-Railway.png',
        title: 'Bangladesh Railway Helpline',
        subtitle: 'Bangladesh Railway ',
        number: '163',
        department: 'Travel',
    },
];

for (const service of services) {
    let div = document.createElement('div');
    div.innerHTML = `
    <div class="bg-white p-8 rounded-lg shadow-md shadow-gray-300">
    <div class="flex justify-between items-center">
    <div class="bg-[#FFE3E2] w-15 h-15 rounded-2xl flex justify-center items-center">
    <img class="w-8" src=${service.logo} alt=${service.title}>
    </div>
    <button class="heart_btn text-[#5C5C5C] text-2xl cursor-pointer"><i
    class="fa-regular fa-heart pointer-events-none"></i></button>
    </div>
    <h3 class="text-2xl font-bold mt-4">${service.title}</h3>
    <p class="text-lg text-[#5C5C5C]">${service.subtitle}</p>
    <h2 class="font-bold text-[32px]">${service.number}</h2>
    <p class="px-4 py-[6px] bg-[#F2F2F2] rounded-full inline-block">${service.department}</p>
    <div class="flex justify-between gap-2 mt-4">
    <button
    class="copy_btn border border-[#D4D6D5] rounded-lg py-3 w-1/2 text-[#5C5C5C] cursor-pointer duration-300 hover:bg-gray-200"><i
    class="fa-regular fa-copy pointer-events-none mr-[6px]"></i>Copy</button>
    <button
    class="call_btn border border-[#00A63E] rounded-lg py-3 w-1/2 text-white bg-[#00A63E] cursor-pointer duration-300 hover:bg-green-700"><i
    class="fa-solid fa-phone pointer-events-none mr-[6px]"></i>Call</button>
    </div>
    </div>
    `;
    serviceContainer.appendChild(div);
}

serviceContainer.addEventListener('click', function (event) {
    // heart counter functionality-section
    if (event.target.className.includes('heart_btn')) {
        totalHeart++;
        heartCount.innerText = totalHeart;
    }
    // Get Values-section
    const serviceTitle = event.target.parentNode.parentNode.children[1].innerText;
    const serviceNumber = event.target.parentNode.parentNode.children[3].innerText;
    // copy function section
    if (event.target.className.includes('copy_btn')) {
        navigator.clipboard.writeText(serviceNumber);
        totalCopy++;
        copyCount.innerText = totalCopy;
        return alert(`${serviceNumber} number has been copied`)
    }
    // Call Function-section
    if (event.target.className.includes('call_btn')) {
        if (totalCoin <= 0) {
            return alert('Your coin is low, need minumam 20 coin for call!')
        }
        // Get date-time 
        let now = new Date();
        let time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        // Get time 
        const div = document.createElement('div');
        div.innerHTML = `
                            <div class="p-4 bg-[#FAFAFA] rounded-lg border border-gray-100">
                                <div class="flex items-center justify-between">
                                    <div class="">
                                        <h4 class="text-lg font-semibold">${serviceTitle}</h4>
                                        <p class="text-lg text-[#5C5C5C]">${serviceNumber}</p>
                                    </div>
                                    <p class="text-lg">${time}</p>
                                </div>
                            </div>
        `;
        historyContainer.appendChild(div);
        totalCoin -= 20;
        coinCount.innerText = totalCoin;
        return alert(`📞 Calling ${serviceTitle} - ${serviceNumber}...`);
    }
    console.log()
})

// clear function
clearBtn.addEventListener('click', function () {
    historyContainer.innerHTML = '';
})
