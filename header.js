// Header HTML template - used across all pages for consistency
const headerHTML = `
<!-- Navigation -->
<header class="sticky top-0 z-50 w-full bg-[#fbfaf8]/90 dark:bg-[#211911]/90 backdrop-blur-md border-b border-[#e6dbd1] dark:border-[#3a2e23]">
<div class="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
<div class="flex items-center gap-3">
<div class="text-primary">
<span class="material-symbols-outlined text-3xl">local_library</span>
</div>
<h2 class="text-xl font-bold tracking-tight text-[#1b140e] dark:text-white">Club de Lecture</h2>
</div>
<nav class="hidden md:flex items-center gap-8">
<a class="text-sm font-medium hover:text-primary transition-colors" href="index.html">Accueil</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="proposclub.html">À propos</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="event.html">Événements</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="devenir_membre.html">Adhésion</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="contact.html">Contact</a>
</nav>
<div class="flex items-center gap-4">
<button onclick="window.location.href='devenir_membre.html'" class="hidden md:flex bg-primary hover:bg-primary/90 text-white text-sm font-bold py-2.5 px-5 rounded-lg transition-all shadow-sm">
                    Rejoindre
                </button>
<button class="md:hidden text-[#1b140e] dark:text-white">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</div>
</header>
`;

// Function to insert header into the page
function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }
}

// Load header when DOM is ready
document.addEventListener('DOMContentLoaded', loadHeader);

