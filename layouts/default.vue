<template>
  <div class="min-h-screen flex flex-col">
    <!-- Top AppBar (Header) -->
    <header class="bg-blue-500 text-white p-4">
      <div class="flex justify-between items-center">
        <button
          @click="toggleSidebar"
          class="p-button p-button-rounded p-button-text"
        >
          <i class="pi pi-bars"></i>
        </button>
        <h1 class="text-lg font-bold">Baseline Wireframe</h1>
      </div>
    </header>

    <div class="flex flex-1">
      <!-- Sidebar (Drawer) -->
      <aside
        :class="`transition-transform bg-gray-100 w-64 p-4 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`"
      >
        <ul>
          <li class="mb-4">
            <button class="p-button p-button-text">Menu Item 1</button>
          </li>
          <li>
            <button class="p-button p-button-text">Menu Item 2</button>
          </li>
        </ul>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-4">
        <div class="rounded shadow-md p-6">
          <slot />
        </div>
      </main>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4 text-center">
      &copy; 2024 Company
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
};
</script>

<style scoped>
/* Custom transition for sidebar */
aside {
  transition: transform 0.3s ease-in-out;
}
</style>
