<script setup>
const selectedTab = ref(0);
const emit = defineEmits(['navigate']);

const select = (n) => {
    emit("navigate", n)
    selectedTab.value = n
}

</script>

<template>
    <div class="flex justify-center bg-gray-100 rounded-lg transition p-1">
        <nav class="flex space-x-2 md:w-auto" aria-label="Tabs" role="tablist">
            <button @click="$event => select(0)" type="button"
                class="hs-tab-active:bg-white hs-tab-active:text-gray-700 py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-md hover:hover:text-blue-600 active"
                id="segment-item-1" data-hs-tab="#segment-1" aria-controls="segment-1" role="tab">
                بیو
            </button>
            <button @click="$event => select(1)" type="button"
                class="hs-tab-active:bg-white hs-tab-active:text-gray-700 py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-md hover:hover:text-blue-600"
                id="segment-item-2" data-hs-tab="#segment-2" aria-controls="segment-2" role="tab">
                مهارت ها
            </button>
            <button @click="$event => select(3)" type="button"
                class="hs-tab-active:bg-white hs-tab-active:text-gray-700 py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-md hover:hover:text-blue-600"
                id="segment-item-3" data-hs-tab="#segment-3" aria-controls="segment-3" role="tab">
                ارتباط
            </button>
            <button @click="$event => select(4)" type="button"
                class="hs-tab-active:bg-white hs-tab-active:text-gray-700 py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-md hover:hover:text-blue-600"
                id="segment-item-3" data-hs-tab="#segment-3" aria-controls="segment-3" role="tab">
                English
            </button>
        </nav>
    </div>
</template>