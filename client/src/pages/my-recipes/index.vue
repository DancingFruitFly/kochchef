<script setup lang="ts">
import { Fab } from '@/components/ui-custom/fab';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRecipes } from '@/composables/useRecipes';
import { getStarsForRating } from '@/utils/stars';
import { Plus } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const router = useRouter();
const { recipes } = useRecipes();
const username = "User123";
const myRecipes = recipes.filter((recipe) => recipe.author === username);
</script>

<template>
    <div class="flex flex-col p-4 mb-24">
        <h1 class="text-xl">
            Deine Rezepte
        </h1>
        <div class="flex flex-col gap-2 mt-4">
            <Card v-for="recipe in myRecipes" class="px-6 py-3 gap-1 hover:bg-gray-100"
                @click="router.push(`/recipes/${recipe.id}`)">
                <CardTitle>{{ recipe.title }}</CardTitle>
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
    <Dialog>
        <DialogTrigger as-child>
            <Fab>
                <template #icon>
                    <Plus class="w-6 h-6" />
                </template>
                Neues Rezept
            </Fab>
        </DialogTrigger>
        <DialogContent class="sm:max-w-100">
            <DialogHeader>
                <DialogTitle>Neues Rezept erstellen</DialogTitle>
                <DialogDescription>
                    Gib hier die Basisdaten für dein neues Gericht ein.
                </DialogDescription>
            </DialogHeader>

            <div class="grid gap-4 py-4">
                <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="name" class="text-left">Name</Label>
                    <Input id="name" placeholder="Omas Apfelkuchen" class="col-span-3" />
                </div>
            </div>

            <DialogFooter>
                <Button type="submit">Rezept speichern</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>