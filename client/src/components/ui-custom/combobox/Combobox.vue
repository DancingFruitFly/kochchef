<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown } from 'lucide-vue-next'
import { computed, ref, useSlots } from 'vue'

const props = defineProps<{
    modelValue: string
    placeholder?: string
}>()

const emit = defineEmits(['update:modelValue'])
const slots = useSlots()
const open = ref(false)

// Extract options from <ComboboxOption> child components:
const options = computed(() => {
    const defaultSlot = slots.default?.() || []
    return defaultSlot.map((vnode) => ({
        value: vnode.props?.value,
        label: vnode.props?.label || vnode.props?.value,
    })).filter(opt => opt.value)
})

const selectedLabel = computed(() =>
    options.value.find(opt => opt.value === props.modelValue)?.label || props.placeholder
)
</script>

<template>
    <Popover v-model:open="open">
        <PopoverTrigger as-child>
            <Button variant="outline" role="combobox" class="justify-between">
                {{ selectedLabel }}
                <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent class="w-[250px] p-0">
            <Command :model-value="modelValue">
                <CommandInput :placeholder="placeholder" />
                <CommandList>
                    <CommandEmpty>Kein Ergebnis.</CommandEmpty>
                    <CommandGroup>
                        <CommandItem v-for="opt in options" :key="opt.value" :value="opt.value" @select="() => {
                            emit('update:modelValue', opt.value)
                            open = false
                        }">
                            <Check :class="cn(
                                'mr-2 h-4 w-4',
                                modelValue === opt.value ? 'opacity-100' : 'opacity-0'
                            )" />
                            {{ opt.label }}
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </PopoverContent>
    </Popover>
</template>