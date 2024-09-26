<template>
  <div class="p-sidebar">
    <ul class="p-menu">
      <li class="p-menuitem">
        <router-link to="/" class="p-menuitem-link">
          <i class="pi pi-home"></i>
          <span>Home</span>
        </router-link>
      </li>
      <li class="p-menuitem">
        <router-link to="/profile" class="p-menuitem-link">
          <i class="pi pi-user"></i>
          <span>Profile</span>
        </router-link>
      </li>
      <li class="p-menuitem">
        <router-link to="/reports" class="p-menuitem-link">
          <i class="pi pi-chart-line"></i>
          <span>Reports</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
.p-sidebar {
  width: 100%;
  height: 100%;
  background-color: #2d3748;
  color: white;
}

.p-menu {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.p-menuitem {
  padding: 1rem;
}

.p-menuitem-link {
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
}

.p-menuitem-link:hover {
  background-color: #4a5568;
}
</style>
