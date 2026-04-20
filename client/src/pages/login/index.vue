<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
</script>

<template>
    <Card class="self-center mt-10 w-full max-w-sm">
        <CardHeader>
            <CardTitle>Melde dich an</CardTitle>
        </CardHeader>
        <CardContent>
            <form>
                <div class="flex flex-col gap-6">
                    <div class="grid gap-2">
                        <Label for="email">E-Mail</Label>
                        <Input id="email" type="email" placeholder="name@example.com" required />
                    </div>
                    <div class="grid gap-2">
                        <div class="flex items-center">
                            <Label for="password">Passwort</Label>
                            <a href="#" class="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                                Passwort vergessen?
                            </a>
                        </div>
                        <Input id="password" type="password" required />
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter class="flex-col gap-2 items-center">
            <Button type="submit" class="w-full">
                Anmelden
            </Button>
            <RouterLink to="/register" class="my-4 inline-block text-sm underline-offset-4 hover:underline">
                Noch kein Benutzer? Jetzt registrieren...
            </RouterLink>
        </CardFooter>
    </Card>
</template>