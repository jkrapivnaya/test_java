const TabsBtn = document.querySelectorAll(".tabs__nav-btn");
const TabsItems = document.querySelectorAll(".tabs__item");

TabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function () {

        console.log("clicked");

        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        console.log(tabId);
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            TabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });

            TabsItems.forEach(function (item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }

    });
}

document.querySelector('.tabs__nav-btn:nth-child(2)').click();
