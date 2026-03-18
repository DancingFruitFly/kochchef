<script setup lang="ts">
import { Fab } from '@/components/ui-custom/fab';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { useRecipes } from '@/composables/useRecipes';
import { getStarsForRating } from '@/utils/stars';
import { Pencil } from 'lucide-vue-next';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const recipeId = typeof route.params.id === "string" ? parseInt(route.params.id) : undefined;

const { recipes } = useRecipes();
const recipe = recipes.find((recipe) => recipe.id === recipeId);

const username = "User123";
const owned = username == recipe?.author;

const servings = ref(1)
</script>

<template>
    <div v-if="!recipe" class="text-center text-xl mt-10">
        Rezept konnte nicht gefunden werden!
    </div>
    <div v-else class="m-4 mb-24">
        <Card class="pt-0 overflow-hidden">
            <img src="https://avatar.vercel.sh/shadcn1" alt="Rezeptbild" className="w-full max-h-50 object-cover" />
            <CardHeader>
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
            </CardHeader>
            <CardContent class="border-t border-gray-300 pt-5">
                <div class="flex flex-col-reverse md:flex-row grow gap-8">
                    <div class="flex flex-col grow">
                        <h1 class="font-semibold">Zubereitung</h1>
                        <p>
                            {{ recipe.text }}
                        </p>
                    </div>
                    <div class="flex flex-col">
                        <h1 class="font-semibold">Zutaten</h1>
                        <div class="grid gap-4">
                            <div class="grid grid-cols-4 items-center gap-4 text-sm">
                                <Label for="servings" class="text-left">Portionen</Label>
                                <Input id="servings" type="number" class="col-span-3" min="1" v-model="servings" />
                            </div>
                        </div>
                        <div class="rounded-xl border shadow-sm overflow-hidden mt-2">
                            <Table>
                                <TableHeader class="bg-muted/50">
                                    <TableRow>
                                        <TableHead class="w-[120px]">Menge</TableHead>
                                        <TableHead>Zutat</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow v-for="ingredient in recipe.ingredients" :key="ingredient.name">
                                        <TableCell class="font-semibold text-primary">
                                            {{ ingredient.amount * servings }} {{ ingredient.unit }}
                                        </TableCell>
                                        <TableCell>{{ ingredient.name }}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
        <RouterLink :to="`/recipes/${recipeId}/edit`">
            <Fab v-if="owned">
                <template #icon>
                    <Pencil />
                </template>
                Bearbeiten
            </Fab>
        </RouterLink>
    </div>
</template>
