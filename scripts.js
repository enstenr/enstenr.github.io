fetch("users.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("profile-container");
    data.forEach(user => {
      const card = document.createElement("div");
      card.className = "profile-card";
      card.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Role:</strong> ${user.role}</p>
        <p><strong>Location:</strong> ${user.location}</p>
        <p><a href="mailto:${user.email}">${user.email}</a></p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Error loading profiles:", err);
  });
