<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { useRecipes } from '@/composables/useRecipes';
import { getStarsForRating } from '@/utils/stars';
import { useRouter } from 'vue-router';

const router = useRouter();
const { recipes } = useRecipes();
const username = "User123";
</script>

<template>
    <div class="flex flex-col p-4">
        <h1 v-if="username" class="text-xl">
            Hallo {{ username }}!
        </h1>
        <h1 v-else class="text-xl">
            Hallo!
        </h1>
        <h2>Was kochen wir heute?</h2>
        <div class="flex flex-col gap-2 mt-4">
            <Card v-for="recipe in recipes" class="px-6 py-3 gap-1 hover:bg-gray-100"
                @click="router.push(`/recipes/${recipe.id}`)">
                <CardTitle>{{ recipe.title }}</CardTitle>
                <CardDescription>von {{ recipe.author }}</CardDescription>
                <div class="flex gap-1">
                    <Badge variant="secondary">
                        {{ getStarsForRating(recipe.rating) }}
                    </Badge>
                    <Badge variant="secondary">
                        <span v-if="recipe.complexity === 'easy'">Einfach</span>
                        <span v-if="recipe.complexity === 'medium'">Mittel</span>
                        <span v-if="recipe.complexity === 'hard'">Schwer</span>
                    </Badge>
                </div>
            </Card>
        </div>
    </div>
</template>