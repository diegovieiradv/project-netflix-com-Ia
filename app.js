// ===== DADOS DOS PERFIS E CONTEÚDO =====
const profilesData = {
  alice: {
    name: "Alice",
    color: "#4169E1",
    continueWatching: [
      {
        id: 1,
        title: "Homem-Aranha",
        year: 2021,
        rating: "★ 8.2",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%234169E1" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="30" fill="white" text-anchor="middle" dominant-baseline="middle"%3ESpider-Man%3C/text%3E%3C/svg%3E',
      },
      {
        id: 2,
        title: "Duna",
        year: 2021,
        rating: "★ 8.0",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23FF6B35" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="35" fill="white" text-anchor="middle" dominant-baseline="middle"%3EDune%3C/text%3E%3C/svg%3E',
      },
      {
        id: 3,
        title: "Interestelar",
        year: 2014,
        rating: "★ 8.6",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23004E89" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="25" fill="white" text-anchor="middle" dominant-baseline="middle"%3EInterstellar%3C/text%3E%3C/svg%3E',
      },
      {
        id: 4,
        title: "Avatar",
        year: 2009,
        rating: "★ 7.8",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%231B998B" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="35" fill="white" text-anchor="middle" dominant-baseline="middle"%3EAvatar%3C/text%3E%3C/svg%3E',
      },
    ],
    trending: [
      {
        id: 5,
        title: "The Last of Us",
        year: 2023,
        rating: "★ 8.8",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%238B0000" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="20" fill="white" text-anchor="middle" dominant-baseline="middle"%3EThe Last of Us%3C/text%3E%3C/svg%3E',
      },
      {
        id: 6,
        title: "Barbie",
        year: 2023,
        rating: "★ 7.2",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23FF69B4" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="35" fill="white" text-anchor="middle" dominant-baseline="middle"%3EBarbie%3C/text%3E%3C/svg%3E',
      },
      {
        id: 7,
        title: "Oppenheimer",
        year: 2023,
        rating: "★ 8.5",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23FFD700" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="25" fill="white" text-anchor="middle" dominant-baseline="middle"%3EOppenheimer%3C/text%3E%3C/svg%3E',
      },
      {
        id: 8,
        title: "Killers of the Flower Moon",
        year: 2023,
        rating: "★ 8.1",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%238B4513" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="18" fill="white" text-anchor="middle" dominant-baseline="middle"%3EKillers of the Flower Moon%3C/text%3E%3C/svg%3E',
      },
    ],
    action: [
      {
        id: 9,
        title: "John Wick 4",
        year: 2023,
        rating: "★ 8.0",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23000" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="30" fill="white" text-anchor="middle" dominant-baseline="middle"%3EJohn Wick 4%3C/text%3E%3C/svg%3E',
      },
      {
        id: 10,
        title: "Fast X",
        year: 2023,
        rating: "★ 6.5",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23D32F2F" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="35" fill="white" text-anchor="middle" dominant-baseline="middle"%3EFast X%3C/text%3E%3C/svg%3E',
      },
    ],
    drama: [
      {
        id: 11,
        title: "The Crown",
        year: 2022,
        rating: "★ 8.6",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23B8860B" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="30" fill="white" text-anchor="middle" dominant-baseline="middle"%3EThe Crown%3C/text%3E%3C/svg%3E',
      },
    ],
    comedy: [
      {
        id: 12,
        title: "The Office",
        year: 2005,
        rating: "★ 9.0",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23228B22" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="30" fill="white" text-anchor="middle" dominant-baseline="middle"%3EThe Office%3C/text%3E%3C/svg%3E',
      },
    ],
  },
  bob: {
    name: "Bob",
    color: "#DC143C",
    continueWatching: [
      {
        id: 13,
        title: "Breaking Bad",
        year: 2008,
        rating: "★ 9.5",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23FFB81C" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="25" fill="white" text-anchor="middle" dominant-baseline="middle"%3EBreaking Bad%3C/text%3E%3C/svg%3E',
      },
    ],
    trending: [
      {
        id: 14,
        title: "Stranger Things",
        year: 2016,
        rating: "★ 8.7",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23C41E3A" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="20" fill="white" text-anchor="middle" dominant-baseline="middle"%3EStranger Things%3C/text%3E%3C/svg%3E',
      },
    ],
    action: [
      {
        id: 15,
        title: "The Dark Knight",
        year: 2008,
        rating: "★ 9.0",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23000" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="20" fill="white" text-anchor="middle" dominant-baseline="middle"%3EThe Dark Knight%3C/text%3E%3C/svg%3E',
      },
    ],
    drama: [
      {
        id: 16,
        title: "Parasite",
        year: 2019,
        rating: "★ 8.5",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23333" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="35" fill="white" text-anchor="middle" dominant-baseline="middle"%3EParasite%3C/text%3E%3C/svg%3E',
      },
    ],
    comedy: [
      {
        id: 17,
        title: "Friends",
        year: 1994,
        rating: "★ 8.9",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23FF6B9D" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="35" fill="white" text-anchor="middle" dominant-baseline="middle"%3EFriends%3C/text%3E%3C/svg%3E',
      },
    ],
  },
  carol: {
    name: "Carol",
    color: "#FFD700",
    continueWatching: [
      {
        id: 18,
        title: "The Witcher",
        year: 2019,
        rating: "★ 8.2",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23654321" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="25" fill="white" text-anchor="middle" dominant-baseline="middle"%3EThe Witcher%3C/text%3E%3C/svg%3E',
      },
    ],
    trending: [
      {
        id: 19,
        title: "Squid Game",
        year: 2021,
        rating: "★ 8.0",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23E74C3C" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="25" fill="white" text-anchor="middle" dominant-baseline="middle"%3ESquid Game%3C/text%3E%3C/svg%3E',
      },
    ],
    action: [
      {
        id: 20,
        title: "Mad Max",
        year: 2015,
        rating: "★ 8.1",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%238B0000" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="30" fill="white" text-anchor="middle" dominant-baseline="middle"%3EMad Max%3C/text%3E%3C/svg%3E',
      },
    ],
    drama: [
      {
        id: 21,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: "★ 9.3",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%234A4A4A" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="18" fill="white" text-anchor="middle" dominant-baseline="middle"%3EShawshank Redemption%3C/text%3E%3C/svg%3E',
      },
    ],
    comedy: [
      {
        id: 22,
        title: "Schitt's Creek",
        year: 2015,
        rating: "★ 8.4",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23E74C3C" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="20" fill="white" text-anchor="middle" dominant-baseline="middle"%3ESchitt\'s Creek%3C/text%3E%3C/svg%3E',
      },
    ],
  },
  david: {
    name: "David",
    color: "#20B2AA",
    continueWatching: [
      {
        id: 23,
        title: "Game of Thrones",
        year: 2011,
        rating: "★ 9.3",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23000" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="20" fill="white" text-anchor="middle" dominant-baseline="middle"%3EGame of Thrones%3C/text%3E%3C/svg%3E',
      },
    ],
    trending: [
      {
        id: 24,
        title: "The Mandalorian",
        year: 2019,
        rating: "★ 8.7",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23000033" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="20" fill="white" text-anchor="middle" dominant-baseline="middle"%3EThe Mandalorian%3C/text%3E%3C/svg%3E',
      },
    ],
    action: [
      {
        id: 25,
        title: "Mission Impossible",
        year: 2023,
        rating: "★ 7.7",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23333" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="20" fill="white" text-anchor="middle" dominant-baseline="middle"%3EMission Impossible%3C/text%3E%3C/svg%3E',
      },
    ],
    drama: [
      {
        id: 26,
        title: "The White Lotus",
        year: 2021,
        rating: "★ 8.0",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23006666" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="20" fill="white" text-anchor="middle" dominant-baseline="middle"%3EThe White Lotus%3C/text%3E%3C/svg%3E',
      },
    ],
    comedy: [
      {
        id: 27,
        title: "It's Always Sunny",
        year: 2005,
        rating: "★ 8.9",
        image:
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Crect fill="%23FFD700" width="200" height="300"/%3E%3Ctext x="50%" y="50%" font-size="18" fill="white" text-anchor="middle" dominant-baseline="middle"%3EIt\'s Always Sunny%3C/text%3E%3C/svg%3E',
      },
    ],
  },
};

// ===== ELEMENTOS DO DOM =====
const profileSelection = document.getElementById("profile-selection");
const mainContent = document.getElementById("main-content");
const profileCards = document.querySelectorAll(".profile-card");
const profileChangeBtn = document.getElementById("profileChangeBtn");
const logoutBtn = document.getElementById("logoutBtn");

let currentProfile = null;

// ===== FUNÇÕES PRINCIPAIS =====
function selectProfile(profileName) {
  currentProfile = profileName;
  const profileData = profilesData[profileName];

  // Esconder seleção de perfil, mostrar conteúdo
  profileSelection.classList.add("hidden");
  mainContent.classList.remove("hidden");

  // Carregar conteúdo do perfil
  loadProfileContent(profileData);
}

function loadProfileContent(profileData) {
  // Hero Banner
  document.getElementById("heroTitle").textContent =
    profileData.continueWatching[0]?.title || "Bem-vindo";
  document.getElementById("heroDesc").textContent =
    `Você está no perfil de ${profileData.name}. Aproveite o conteúdo personalizado para este perfil.`;
  document.getElementById("heroBg").style.backgroundImage =
    `url('${profileData.continueWatching[0]?.image}')`;

  // Carregar carrosséis
  loadCarousel("continueWatching", profileData.continueWatching);
  loadCarousel("trendingCarousel", profileData.trending);
  loadCarousel("actionCarousel", profileData.action);
  loadCarousel("dramaCarousel", profileData.drama);
  loadCarousel("comedyCarousel", profileData.comedy);
}

function loadCarousel(elementId, items) {
  const carousel = document.getElementById(elementId);
  carousel.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "content-card";
    card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="content-card-overlay">
                <div class="content-card-title">${item.title}</div>
                <div class="content-card-year">${item.year}</div>
                <div class="content-card-rating">${item.rating}</div>
            </div>
        `;
    carousel.appendChild(card);
  });
}

function goBackToProfileSelection() {
  profileSelection.classList.remove("hidden");
  mainContent.classList.add("hidden");
  currentProfile = null;
}

// ===== EVENT LISTENERS =====
profileCards.forEach((card) => {
  card.addEventListener("click", () => {
    const profileName = card.getAttribute("data-profile");
    selectProfile(profileName);
  });
});

profileChangeBtn.addEventListener("click", goBackToProfileSelection);
logoutBtn.addEventListener("click", () => {
  if (confirm("Tem certeza que deseja sair?")) {
    goBackToProfileSelection();
  }
});

// Animações de hover nas seções
document.addEventListener("DOMContentLoaded", () => {
  const contentRows = document.querySelectorAll(".content-row");

  contentRows.forEach((row) => {
    row.addEventListener("mouseenter", () => {
      row.style.opacity = "1";
    });
  });
});
