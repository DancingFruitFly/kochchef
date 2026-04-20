<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
</script>

<template>
    <Card class="self-center mt-10 w-full max-w-sm">
        <CardHeader>
            <CardTitle>Registriere dich</CardTitle>
        </CardHeader>
        <CardContent>
            <form>
                <div class="flex flex-col gap-6">
                    <div class="grid gap-2">
                        <Label for="username">Benutzername</Label>
                        <Input id="username" type="text" placeholder="Max Mustermann" required />
                    </div>
                    <div class="grid gap-2">
                        <Label for="email">E-Mail</Label>
                        <Input id="email" type="email" placeholder="name@example.com" required />
                    </div>
                    <div class="grid gap-2">
                        <div class="flex items-center">
                            <Label for="password">Passwort</Label>
                        </div>
                        <Input id="password" type="password" required />
                    </div>
                    <div class="grid gap-2">
                        <div class="flex items-center">
                            <Label for="password2">Passwort wiederholen</Label>
                        </div>
                        <Input id="password2" type="password" required />
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter class="flex-col gap-2 items-center">
            <Button type="submit" class="w-full">
                Registrieren
            </Button>
            <RouterLink to="/login" class="my-4 inline-block text-sm underline-offset-4 hover:underline">
                Du hast schon ein Konto? Jetzt einloggen...
            </RouterLink>
        </CardFooter>
    </Card>
</template>