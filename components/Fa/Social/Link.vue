<script setup lang="ts">
const props = defineProps<{
    label: string;
    name: string;
    avatar: string;
    islink?: boolean;
    link: string;
    color: "blue" | "green" | "slate" | "orange" | "indigo" | "rose" | "amber" | "purple";
}>();

const styles = computed(() => {
    const base = "py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm  "
    const styls = {
        blue: "bg-blue-500 hover:bg-blue-600 focus:ring-blue-500",
        indigo: "bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-500",
        green: "bg-green-500 hover:bg-green-600 focus:ring-green-500",
        slate: "bg-slate-600 hover:bg-slate-700 focus:ring-slate-600",
        orange: "bg-orange-500 hover:bg-orange-600 focus:ring-orange-500",
        rose: "bg-rose-500 hover:bg-rose-600 focus:ring-rose-500",
        amber: "bg-amber-500 hover:bg-amber-600 focus:ring-amber-500",
        purple: "bg-purple-500 hover:bg-purple-600 focus:ring-purple-500"
    }
    return base + styls[props.color]
})

const copied = ref(false)
const onCopy = () => {
    navigator.clipboard.writeText(props.link);
    copied.value = true;
} 
const onClose = () => {
    HSOverlay.close(document.getElementById(props.name))
}
</script>

<template>
    <button type="button"
        :class="styles"
        :data-hs-overlay="`#${props.name}`">
        {{ props.label }}
    </button>

    <div :id="props.name" class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div class="flex flex-col bg-white border shadow-sm rounded-xl">
            <div class="flex justify-between items-center py-3 px-4 border-b">
                <h3 class="font-bold text-gray-800">
                    ارتباط از {{ props.label }}
                </h3>
                <button @click="onClose" type="button" class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm" data-hs-overlay="#hs-focus-management-modal">
                <span class="sr-only">Close</span>
                    <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
                    </svg>
                </button>
            </div>
            <div class="p-4 overflow-y-auto">
                <div class="flex justify-center">
                    <img class="w-36 h-36 rounded-full" :src="props.avatar" :alt="props.name">
                </div>
                <label for="input-label" class="block text-sm font-medium mb-2">{{ props.label }}:</label>
                <input dir="ltr" readonly :value="props.link" class="py-3 font-medium px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" placeholder="you@site.com" autofocus>
            </div>
            <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
                <button @click="onClose" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm" data-hs-overlay="#hs-focus-management-modal">
                    بستن
                </button>
                <a v-if="props.islink == true" target="_blank" :href="props.link" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
                    برو!
                </a>
                <template v-else>
                    <button v-if="!copied" @click="onCopy" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
                        کپی
                    </button>
                    <button v-else class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm">
                        کپی شد!
                    </button>
                </template>
            </div>
            </div>
        </div>
        </div>
</template>