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
            <p>Membership Level: ${member.membershipLevel}</p>
            <a href="${member.website}" target="_blank" rel="noopener">
                Visit Website
            </a>
        `;
        membersContainer.appendChild(card);
    });

}
