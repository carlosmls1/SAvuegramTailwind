<template>
  <div class="hidden lg:block lg:col-span-3 xl:col-span-2">
    <nav aria-label="Sidebar" class="sticky top-4 divide-y divide-gray-300">
      <div class="pb-8 space-y-1">
        <a href="#" class="bg-gray-200 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="page">
          <!-- Heroicon name: outline/home -->
          <HomeIcon class="text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"></HomeIcon>
          <span class="truncate">
                Home
              </span>
        </a>

        <a href="#" class="text-gray-600 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="false">
          <!-- Heroicon name: outline/fire -->
          <FireIcon class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"></FireIcon>
          <span class="truncate">
                Popular
              </span>
        </a>

        <a href="#" class="text-gray-600 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="false">
          <!-- Heroicon name: outline/user-group -->
          <UserGroupIcon class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"></UserGroupIcon>
          <span class="truncate">
                Communities
              </span>
        </a>

        <a href="#" class="text-gray-600 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="false">
          <!-- Heroicon name: outline/trending-up -->
          <TrendingUpIcon class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"></TrendingUpIcon>
          <span class="truncate">
                Trending
              </span>
        </a>
      </div>
      <div class="pt-10">
        <p class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="communities-headline">
          My communities
        </p>
        <div class="mt-3 space-y-2" aria-labelledby="communities-headline">
          <a href="#" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                <span class="truncate">
                  Movies
                </span>
          </a>

          <a href="#" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                <span class="truncate">
                  Food
                </span>
          </a>

          <a href="#" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                <span class="truncate">
                  Sports
                </span>
          </a>

          <a href="#" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                <span class="truncate">
                  Animals
                </span>
          </a>

          <a href="#" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                <span class="truncate">
                  Science
                </span>
          </a>

          <a href="#" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                <span class="truncate">
                  Dinosaurs
                </span>
          </a>

          <a href="#" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                <span class="truncate">
                  Talents
                </span>
          </a>

          <a href="#" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                <span class="truncate">
                  Gaming
                </span>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {FireIcon, HomeIcon, TrendingUpIcon, UserGroupIcon} from "@vue-hero-icons/outline";

export default {
name: "SideBar",
  components:{
    HomeIcon,FireIcon, UserGroupIcon, TrendingUpIcon
  }
}
</script>

<style scoped>

</style>