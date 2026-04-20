<script setup lang="ts">
import { Button } from '@/components/ui/button';
</script>

<template>
    <Button
        class="fixed bottom-6 right-6 h-14 rounded-full px-6 shadow-lg hover:shadow-xl transition-all gap-2 min-w-[56px]"
        size="lg">
        <slot name="icon" />
        <span class="hidden md:inline font-semibold">
            <slot />
        </span>
    </Button>
</template>