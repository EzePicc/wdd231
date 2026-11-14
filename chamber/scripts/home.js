
const spotlightsContent = document.querySelector("#spotlights-content");

async function loadSpotlights() 
{
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();

        const qualifiedMembers = members.filter(member =>
            member.membershipLevel === 2 || member.membershipLevel === 3
        );
        qualifiedMembers.sort(() => Math.random() - 0.5);

        const selectedMembers = qualifiedMembers.slice(0, 3);
        selectedMembers.forEach(member => {
            const membership = member.membershipLevel=== 3 ? "Gold Member" :"Silver Member";

            const card = document.createElement("div");
            card.classList.add("spotlight-card");

            card.innerHTML = `
                <h3>${member.name}</h3>

                <img src="images/${member.image}" alt="${member.name}" loading="lazy">

                <p>${membership}</p>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>`;

            spotlightsContent.appendChild(card);

        });

    } 
    catch (error) 
    {
        spotlightsContent.textContent="Unable to load business spotlights.";
        console.error("Error loading business spotlights:", error);
    }
}

loadSpotlights();
