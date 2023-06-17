<script setup lang="ts">
type Rate = "great" | "verygood" | "good" | "improving" | "fluent";

const props = defineProps<{
    rate: Rate;
}>();

const style = computed(() => {
    const base = "inline-flex items-center py-1 px-2 rounded-full text-xs font-bold text-white";
    const sps = {
        great: "bg-teal-500",
        verygood: "bg-green-500",
        fluent: "bg-purple-500",
        good: "bg-blue-500",
        improving: "bg-amber-500",
    };
    return base.concat(" " + sps[props.rate]);
});

const text = computed(() => {
    const content = {
        great: "عالی",
        verygood: "بسیار خوب",
        fluent: "وارد",
        good: "خوب",
        improving: "درحال ارتقا",
    };
    return content[props.rate];
})
</script>

<template>
    <span :class="style">{{ text }}</span>
</template>