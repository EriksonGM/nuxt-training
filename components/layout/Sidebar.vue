<script setup lang="ts">

const route = useRoute()

interface menuItem {
  icon: string,
  title: string,
  url?: string,
  subMenu?: Array<menuItem>
}

const menus: Array<menuItem> = [
  {icon: 'ti ti-home', title: 'Inicio', url: '/'},
  {icon: 'ti ti-user', title: 'Perfil', url: '/profile'},
  {
    icon: 'ti ti-speakerphone', title: 'Comunicação', subMenu: [
      {icon: 'ti ti-news', title: 'Noticias', url: '/news'},
      {icon: 'ti ti-bell', title: 'Notificações', url: '/notifications'},
      {icon: 'ti ti-device-mobile-message', title: 'SMS Broadcast', url: '/sms-broadcast'},
    ]
  },
  {
    icon: 'ti ti-presentation-analytics', title: 'Gestão de Projectos', subMenu: [
      {icon: 'ti ti-presentation', title: 'Projectos', url: '/projects'},
      {icon: 'ti ti-list-check', title: 'Tarefas', url: '/tasks'}
    ]
  },
  {
    icon: 'ti ti-shield-lock', title: 'Segurança', subMenu: [
      {icon: 'ti ti-layers-intersect', title: 'Roles', url: '/roles'},
      {icon: 'ti ti-users', title: 'Utilizadores', url: '/users'}
    ]
  },
  {icon: 'ti ti-settings', title: 'Configurações', url: '/config'},
]
</script>
<template>

  <ul class="menu p-4 w-80 min-h-full">
    <li v-for="m in menus">
      <template v-if="m.subMenu">
        <details :open="m.subMenu.some(e=>e.url === route.path)">
          <summary class="text-lg">
            <i class="text-xl" :class="m.icon"></i><span>{{ m.title }}</span>
          </summary>
          <ul>
            <li v-for="s in m.subMenu">
              <NuxtLink class="text-lg" :class="route.path === s.url ? 'active' :'' " :to="s.url">
                <i class="text-xl" :class="s.icon"></i>
                <span>{{ s.title }}</span>
              </NuxtLink>
            </li>
          </ul>
        </details>
      </template>
      <template v-else>
        <NuxtLink class="text-lg" :class="route.path === m.url ? 'active' :'' " :to="m.url">
          <i class="text-xl" :class="m.icon"></i>
          <span>
            {{ m.title }}
          </span>
        </NuxtLink>
      </template>
    </li>
  </ul>
</template>

<style scoped>

</style>