<script setup lang="ts">
type Skill = {
    color: "green" | "teal" | "blue" | "indigo" | "amber" | "purple" | "yellow" | "rose";
    name: string;
    rate: "great" | "verygood" | "good" | "improving" | "fluent";
}

const props = defineProps<{
    skills: Skill[],
    sec_skills: Skill[],
}>();
</script>

<template>
    <div dir="rtl" class="flex flex-wrap">
        <ul class="flex-grow space-y-3 text-sm mt-6 px-6 font-medium">
            <li dir="rtl" v-for="skill in props.skills" class="flex space-x-3 text-xl py-1">
                <FaSkillIcon :color="skill.color" />
                <span class="text-gray-700 px-2">
                    {{ skill.name }} <span class="px-2"></span>
                    <FaSkillRate :rate="skill.rate" />
                </span>
            </li>
        </ul>
        <ul class="flex-grow space-y-3 text-sm mt-6 px-6 font-medium">
            <li dir="rtl" v-for="skill in props.sec_skills" class="flex space-x-3 text-xl py-1">
                <FaSkillIcon :color="skill.color" />
                <span class="text-gray-700 px-2">
                    {{ skill.name }} <span class="px-2"></span>
                    <FaSkillRate :rate="skill.rate" />
                </span>
            </li>
        </ul>
    </div>
</template>