<script setup lang="ts">
import { Combobox, ComboboxOption } from '@/components/ui-custom/combobox';
import { Fab } from '@/components/ui-custom/fab';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { useRecipes } from '@/composables/useRecipes';
import { CloudUpload } from 'lucide-vue-next';
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
const recipeId = typeof route.params.id === "string" ? parseInt(route.params.id) : undefined;

const { recipes } = useRecipes();
const recipe = ref(recipes.find((recipe) => recipe.id === recipeId));

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
                <Input v-model="recipe.title" />
                <Combobox v-model="recipe.complexity" placeholder="Komplexität wählen">
                    <ComboboxOption value="easy" label="Einfach" />
                    <ComboboxOption value="medium" label="Mittel" />
                    <ComboboxOption value="hard" label="Schwer" />
                </Combobox>
            </CardHeader>
            <CardContent class="border-t border-gray-300 pt-5">
                <div class="flex flex-col-reverse md:flex-row grow gap-8">
                    <div class="flex flex-col grow">
                        <h1 class="font-semibold">Zubereitung</h1>
                        <Textarea class="w-full" v-model="recipe.text" />
                    </div>
                    <div class="flex flex-col">
                        <h1 class="font-semibold">Zutaten</h1>
                        <div class="grid gap-4">
                            <div class="grid grid-cols-4 items-center gap-4 text-sm">
                                <Label for="servings" class="text-left">Für Portionen: </Label>
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
        <RouterLink :to="`/recipes/${recipeId}`">
            <Fab>
                <template #icon>
                    <CloudUpload />
                </template>
                Speichern
            </Fab>
        </RouterLink>
    </div>
</template>
