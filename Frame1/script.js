document.addEventListener("DOMContentLoaded", function () {
  const mainContent = document.querySelector(".main-content");
  const leftSidebar = document.querySelector(".sidebar.left");
  const rightSidebar = document.querySelector(".sidebar.right");

  const mainContentData = [
    {
      image: "https://picsum.photos/id/100/200/300",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      image: "https://picsum.photos/id/101/200/300",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  for (let i = 1; i < 16; i++) {
    let section = document.createElement("div");
    section.classList.add("section");
    section.textContent = `Left Section ${i}`;
    leftSidebar.appendChild(section);
  }

  for (let i = 1; i < 7; i++) {
    let section = document.createElement("div");
    section.classList.add("trend");
    section.textContent = `Trend ${i}`;
    rightSidebar.appendChild(section);
  }

  for (let i = 0; i < mainContentData.length; i++) {
    const content = mainContentData[i];

    let section = document.createElement("div");
    section.classList.add("section-content");
    i === 0 ? section.classList.add("mt-4") : section.classList.add("mt-8");

    if (content.image) {
      let image = document.createElement("img");
      image.src = content.image;
      section.appendChild(image);
    }

    let text = document.createElement("p");
    text.textContent = content.text;
    section.appendChild(text);

    mainContent.appendChild(section);
  }
});
