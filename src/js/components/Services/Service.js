// Services.js

export default function Services() {
  const servicesSection = document.createElement("div");
  servicesSection.classList.add("services");

  const h1 = document.createElement("h1");
  h1.textContent = "See what the hype is about";

  const servicesContainer = document.createElement("div");
  servicesContainer.classList.add("services__container");

  const card1 = createServiceCard("Experience Bliss", "AI Powered technology");
  const card2 = createServiceCard("Are you Ready?", "Take the leap");
  const card3 = createServiceCard("Are you Ready?", "Take the leap");

  servicesContainer.appendChild(card1);
  servicesContainer.appendChild(card2);
  servicesContainer.appendChild(card3);

  servicesSection.appendChild(h1);
  servicesSection.appendChild(servicesContainer);

  return servicesSection;
}

function createServiceCard(title, description) {
  const card = document.createElement("div");
  card.classList.add("services__card");

  const h2 = document.createElement("h2");
  h2.textContent = title;

  const p = document.createElement("p");
  p.textContent = description;

  const button = document.createElement("button");
  button.textContent = "Get Started";

  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(button);

  return card;
}
