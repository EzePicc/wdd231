function displayMembers(members) {
    membersContainer.innerHTML = "";

    members.forEach((member) => {

        const card = document.createElement("section");

        card.classList.add("member-card");

        card.innerHTML = `
            <h2>${member.name}</h2>
            <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p>
            Membership Level: ${member.membershipLevel === 3 ? "Gold" :
                member.membershipLevel === 2 ? "Silver" : "Member"
            }
            </p>
            <a href="${member.website}" target="_blank" rel="noopener">
                Visit Website
            </a>
        `;
        membersContainer.appendChild(card);
    });

}

const membersContainer = document.querySelector("#members-content");
async function getMembers() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Could not load members data");
        }

        const members = await response.json();

        displayMembers(members);

    } catch (error) {
        console.error("Error loading members:", error);

        membersContainer.innerHTML = "<p>Unable to load members.</p>";
    }
}

document.querySelector("#current-year").textContent =
    new Date().getFullYear();

document.querySelector("#last-modified").textContent =
    new Date(document.lastModified).toLocaleString("en-US", {
        dateStyle: "long"
    });

const gridButton = document.querySelector("#grid-button");
const listButton = document.querySelector("#list-button");

gridButton.addEventListener("click", () => {
    membersContainer.classList.remove("list-view");
    membersContainer.classList.add("grid-view");

    gridButton.classList.add("active");
    listButton.classList.remove("active");
});

listButton.addEventListener("click", () => {
    membersContainer.classList.remove("grid-view");
    membersContainer.classList.add("list-view");

    listButton.classList.add("active");
    gridButton.classList.remove("active");
});

getMembers()
