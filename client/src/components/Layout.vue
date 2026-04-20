<script setup lang="ts">
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { ChefHat, LogIn, LogOut, Menu } from 'lucide-vue-next';
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from './ui/navigation-menu';

const currentRoute = useRoute();
const loggedIn = true;

interface Route {
    title: string;
    icon?: any;
    href: string;
    visible: boolean;
}

const leftRoutes: Route[] = [
    { title: "Übersicht", href: "/", visible: true },
    { title: "Meine Rezepte", href: "/my-recipes", visible: loggedIn }
]

const rightRoutes: Route[] = [
    { title: "Einloggen", icon: LogIn, href: "/login", visible: !loggedIn }
]

const allRoutes = [...leftRoutes, ...rightRoutes];

const isMenuOpen = ref(false);

const closeMenu = () => {
    isMenuOpen.value = false;
};
</script>

<template>
    <div class="flex flex-row shrink-0 w-full items-center px-4 py-2 bg-gray-200 justify-between">
        <div class="flex items-center gap-4">
            <div class="md:hidden">
                <Sheet v-model:open="isMenuOpen">
                    <SheetTrigger as-child>
                        <Button variant="ghost" size="icon">
                            <Menu class="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" class="w-[250px]">
                        <SheetHeader>
                            <SheetTitle class="flex flex-row items-center gap-2 text-left text-xl font-bold">
                                <ChefHat />
                                Kochchef
                            </SheetTitle>
                        </SheetHeader>
                        <nav class="flex flex-col gap-2 mt-8">
                            <RouterLink v-for="route in allRoutes.filter(r => r.visible)" :key="route.href"
                                :to="route.href" @click="closeMenu"
                                class="flex items-center gap-3 px-3 py-2 text-lg font-medium rounded-md transition-colors hover:bg-gray-100"
                                :class="[route.href === currentRoute.path ? 'bg-gray-100 text-primary' : 'text-muted-foreground']">
                                <component :is="route.icon" v-if="route.icon" class="w-5 h-5" />
                                {{ route.title }}
                            </RouterLink>

                            <button v-if="loggedIn" @click="closeMenu"
                                class="flex items-center gap-3 px-3 py-2 text-lg font-medium text-red-500 hover:bg-red-50 rounded-md transition-colors">
                                <LogOut class="w-5 h-5" />
                                Ausloggen
                            </button>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>

            <div class="flex flex-row items-center gap-2 font-bold text-lg tracking-tight">
                <ChefHat />
                Kochchef
            </div>

            <NavigationMenu class="hidden md:flex">
                <NavigationMenuList>
                    <NavigationMenuItem v-for="route in leftRoutes" :key="route.href">
                        <NavigationMenuLink v-if="route.visible" :active="route.href === currentRoute.path" as-child>
                            <RouterLink :to="route.href"
                                class="flex flex-row items-center gap-1 px-3 py-2 hover:bg-gray-300 rounded-sm transition-colors">
                                <component :is="route.icon" v-if="route.icon" />
                                <span>{{ route.title }}</span>
                            </RouterLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>

        <div class="hidden md:flex items-center">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem v-for="route in rightRoutes" :key="route.href">
                        <NavigationMenuLink v-if="route.visible" :active="route.href === currentRoute.path" as-child>
                            <RouterLink :to="route.href"
                                class="flex flex-row items-center gap-1 px-3 py-2 hover:bg-gray-300 rounded-sm transition-colors">
                                <component :is="route.icon" v-if="route.icon" />
                                <span>{{ route.title }}</span>
                            </RouterLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem v-if="loggedIn">
                        <NavigationMenuLink
                            class="flex flex-row items-center gap-1 cursor-pointer px-3 py-2 hover:bg-gray-300 rounded-sm transition-colors">
                            <LogOut />
                            <span>Ausloggen</span>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    </div>

    <div class="flex flex-col">
        <slot />
    </div>
</template>