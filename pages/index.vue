<script setup>
const selectedTab = ref(0);
const skills = [
    { name: "Django", color: "green", rate: "great" },
    { name: "React", color: "blue", rate: "great" },
    { name: "Vue Js", color: "teal", rate: "fluent" },
    { name: "Laravel", color: "amber", rate: "verygood" },
    { name: "Tailwind", color: "blue", rate: "fluent" },
    { name: "Bootstrap", color: "purple", rate: "fluent" },
];

const sec_skills = [
    { name: "Docker", color: "blue", rate: "great" },
    { name: "Linux", color: "yellow", rate: "great" },
    { name: "Git", color: "rose", rate: "verygood" },
    { name: "Nginx", color: "green", rate: "verygood" },
    { name: "Postgres", color: "blue", rate: "good" },
    { name: "Redis", color: "rose", rate: "fluent" },
]

const onNaviagate = event => {
    if (event == 0) {
        const bio = document.getElementById("bio");
        bio.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    } else if (event == 1) {
        const skills = document.getElementById("skills");
        skills.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    } else if (event == 2) {
        const skills = document.getElementById("contact");
        skills.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    } else if (event == 3) {
        const skills = document.getElementById("contact");
        skills.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    } else if (event == 4) {
        navigateTo("/fa")
    }
}
</script>


<template>
    <Head>
        <Title>Ermia M. | Personal Website</Title>
    </Head>
    <div>
        <div id="header" class="relative w-full px-2 py-14 bg-slate-200 flex justify-center shadow-md">
            <div class="absolute top-0 bottom-0 start-0 end-0 flex justify-center items-center">
                <div
                    class="-z-0 h-[90%] md:h-64 w-[85%] lg:w-[45%] rounded-full bg-gradient-to-tr from-indigo-700 via-emerald-300 to-violet-100 blur-2xl opacity-60">
                </div>
            </div>
            <div class="z-50 w-full max-w-2xl flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-6">
                <div class="">
                    <img class="max-h-[12rem] w-auto rounded-full shadow-lg" src="/ermia.png" alt="Ermia Moghadamy">
                </div>
                <div class="flex-grow flex flex-col gap-4 justify-center">
                    <h1 class="text-center md:text-start text-4xl font-semibold">Ermia M.</h1>
                    <h3 class="text-center md:text-start text-3xl">Web Developer & DevOps</h3>
                    <div class="w-full">
                        <div class="flex justify-center md:justify-start px-4">
                            <Tabs @navigate="onNaviagate" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="w-full px-4 py-8 flex justify-center">
        <div class="w-full max-w-4xl">
            <div id="bio" class="pt-12 pb-24">
                <h1 class="text-4xl font-semibold text-center sm:text-start">ℹ️ <span class="italic">Biography</span></h1>

                <div class="pt-6">
                    <blockquote class="relative mt-1">
                        <svg class="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-300"
                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true">
                            <path
                                d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                                fill="currentColor" />
                        </svg>

                        <div class="relative z-10">
                            <p class="text-gray-800 text-xl sm:text-2xl font-medium text-center sm:text-start"><em>
                                    Hi I'm Ermia a Full-stack Developer 💻, System Admin 🔧 and DevOps ♾️.
                                    <br /> Also lover of linux 🐧 and opensource <span>
                                        <svg class="w-8 h-8 inline" id="emoji" viewBox="0 0 72 72"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="color">
                                                <path fill="#ea5a47"
                                                    d="M36 64.0001C51.464 64.0001 64 51.4641 64 36.0001C64 20.5361 51.464 8.0001 36 8.0001C20.536 8.0001 8 20.5361 8 36.0001C8 51.4641 20.536 64.0001 36 64.0001Z" />
                                                <path fill="#fff" fill-rule="evenodd"
                                                    d="M49.4735 22.6035C52.4478 25.5948 54.4327 29.571 54.896 34L47.8341 34C46.8819 28.3246 41.946 24 36 24C34.3793 24 32.8337 24.3213 31.4233 24.9036L27.6797 18.9139C30.1925 17.6879 33.0159 17 36 17C37.6895 17 39.3276 17.2205 40.8869 17.6344C40.9673 17.4436 41.0605 17.2557 41.1667 17.0718C42.5474 14.6803 45.6053 13.861 47.9968 15.2417C50.3883 16.6224 51.2076 19.6803 49.8269 22.0718C49.719 22.2588 49.6008 22.4361 49.4735 22.6035ZM17.6533 40.9577C17.4395 40.9856 17.2214 41 17 41C14.2386 41 12 38.7614 12 36C12 33.2386 14.2386 31 17 31C17.2214 31 17.4395 31.0144 17.6533 31.0423C18.7365 27.0241 21.1045 23.533 24.2895 21.0368L28.0329 27.0262C25.5588 29.2244 24 32.4301 24 36C24 39.5699 25.5588 42.7756 28.0329 44.9738L24.2895 50.9632C21.1045 48.467 18.7365 44.9759 17.6533 40.9577ZM49.4846 49.3852C49.6149 49.5556 49.7357 49.7364 49.8458 49.9271C51.2265 52.3186 50.4071 55.3765 48.0157 56.7572C45.6242 58.1379 42.5663 57.3186 41.1855 54.9271C41.0787 54.742 40.985 54.553 40.9042 54.361C39.3397 54.7778 37.6958 55 36 55C33.0159 55 30.1925 54.3121 27.6797 53.0861L31.4233 47.0964C32.8337 47.6787 34.3793 48 36 48C41.946 48 46.8819 43.6754 47.8341 38L54.896 38C54.4333 42.4234 52.4528 46.3952 49.4846 49.3852Z"
                                                    clip-rule="evenodd" />
                                            </g>
                                            <g id="line">
                                                <path fill="#000"
                                                    d="M54.896 34L54.896 35C55.1793 35 55.4493 34.8798 55.639 34.6693C55.8286 34.4588 55.92 34.1777 55.8906 33.8959L54.896 34ZM49.4735 22.6035L48.6775 21.9983C48.3754 22.3955 48.4125 22.9547 48.7644 23.3086L49.4735 22.6035ZM47.8341 34L46.8479 34.1654C46.9287 34.6471 47.3456 35 47.8341 35L47.8341 34ZM31.4233 24.9036L30.5753 25.4336C30.834 25.8476 31.3537 26.0142 31.8049 25.8279L31.4233 24.9036ZM27.6797 18.9139L27.2412 18.0151C26.9865 18.1394 26.7965 18.3659 26.7184 18.6383C26.6403 18.9108 26.6815 19.2035 26.8317 19.4439L27.6797 18.9139ZM40.8869 17.6344L40.6303 18.6009C41.1121 18.7288 41.6145 18.4823 41.8083 18.023L40.8869 17.6344ZM41.1667 17.0718L40.3007 16.5718L40.3007 16.5718L41.1667 17.0718ZM47.9968 15.2417L47.4968 16.1077L47.4968 16.1077L47.9968 15.2417ZM49.8269 22.0718L50.693 22.5718L50.693 22.5718L49.8269 22.0718ZM17.6533 40.9577L18.6188 40.6974C18.4885 40.2139 18.0205 39.9013 17.5239 39.9661L17.6533 40.9577ZM17.6533 31.0423L17.5239 32.0339C18.0205 32.0987 18.4885 31.7861 18.6188 31.3026L17.6533 31.0423ZM24.2895 21.0368L25.1375 20.5068C24.9872 20.2663 24.7418 20.1009 24.4624 20.0519C24.183 20.0029 23.8959 20.0748 23.6727 20.2497L24.2895 21.0368ZM28.0329 27.0262L28.6971 27.7738C29.0618 27.4498 29.1395 26.9099 28.8809 26.4962L28.0329 27.0262ZM28.0329 44.9738L28.8809 45.5038C29.1395 45.0901 29.0618 44.5502 28.6971 44.2262L28.0329 44.9738ZM24.2895 50.9632L23.6727 51.7502C23.8959 51.9252 24.183 51.9971 24.4624 51.9481C24.7418 51.8991 24.9872 51.7337 25.1375 51.4932L24.2895 50.9632ZM49.8458 49.9271L50.7118 49.4271L50.7118 49.4271L49.8458 49.9271ZM49.4846 49.3852L48.7749 48.6807C48.4229 49.0354 48.3867 49.5955 48.6902 49.9925L49.4846 49.3852ZM48.0157 56.7572L48.5157 57.6233L48.5157 57.6233L48.0157 56.7572ZM41.1855 54.9271L40.3195 55.4271L40.3195 55.4271L41.1855 54.9271ZM40.9042 54.361L41.8259 53.9731C41.6323 53.5131 41.1291 53.2662 40.6468 53.3947L40.9042 54.361ZM27.6797 53.0861L26.8317 52.5561C26.6815 52.7965 26.6403 53.0892 26.7184 53.3617C26.7965 53.6341 26.9865 53.8606 27.2412 53.9849L27.6797 53.0861ZM31.4233 47.0964L31.8049 46.172C31.3537 45.9858 30.834 46.1524 30.5753 46.5664L31.4233 47.0964ZM47.8341 38L47.8341 37C47.3456 37 46.9287 37.3528 46.8479 37.8345L47.8341 38ZM54.896 38L55.8906 38.104C55.92 37.8223 55.8286 37.5412 55.639 37.3307C55.4493 37.1202 55.1793 37 54.896 37L54.896 38ZM55.8906 33.8959C55.4027 29.2321 53.3122 25.046 50.1826 21.8985L48.7644 23.3086C51.5834 26.1437 53.4627 29.91 53.9014 34.104L55.8906 33.8959ZM47.8341 35L54.896 35L54.896 33L47.8341 33L47.8341 35ZM36 25C41.4495 25 45.9752 28.9637 46.8479 34.1654L48.8203 33.8345C47.7887 27.6854 42.4425 23 36 23V25ZM31.8049 25.8279C33.0964 25.2947 34.5125 25 36 25V23C34.2461 23 32.5709 23.3479 31.0416 23.9793L31.8049 25.8279ZM26.8317 19.4439L30.5753 25.4336L32.2713 24.3736L28.5277 18.3839L26.8317 19.4439ZM36 16C32.8607 16 29.8876 16.724 27.2412 18.0151L28.1181 19.8126C30.4974 18.6518 33.1711 18 36 18V16ZM41.1434 16.6678C39.5011 16.232 37.7769 16 36 16V18C37.6022 18 39.154 18.2091 40.6303 18.6009L41.1434 16.6678ZM41.8083 18.023C41.8726 17.8704 41.9473 17.7197 42.0327 17.5718L40.3007 16.5718C40.1737 16.7918 40.062 17.0168 39.9655 17.2458L41.8083 18.023ZM42.0327 17.5718C43.1373 15.6586 45.5836 15.0031 47.4968 16.1077L48.4968 14.3756C45.6271 12.7188 41.9575 13.702 40.3007 16.5718L42.0327 17.5718ZM47.4968 16.1077C49.41 17.2123 50.0655 19.6586 48.9609 21.5718L50.693 22.5718C52.3498 19.702 51.3666 16.0325 48.4968 14.3756L47.4968 16.1077ZM48.9609 21.5718C48.8741 21.7221 48.7793 21.8643 48.6775 21.9983L50.2695 23.2088C50.4223 23.0079 50.5639 22.7954 50.693 22.5718L48.9609 21.5718ZM17 42C17.2648 42 17.5261 41.9828 17.7827 41.9493L17.5239 39.9661C17.3529 39.9884 17.178 40 17 40V42ZM11 36C11 39.3137 13.6863 42 17 42V40C14.7909 40 13 38.2091 13 36H11ZM17 30C13.6863 30 11 32.6863 11 36H13C13 33.7909 14.7909 32 17 32V30ZM17.7827 30.0507C17.5261 30.0172 17.2648 30 17 30V32C17.178 32 17.3529 32.0116 17.5239 32.0339L17.7827 30.0507ZM18.6188 31.3026C19.6444 27.498 21.8874 24.19 24.9064 21.8239L23.6727 20.2497C20.3216 22.8761 17.8285 26.5502 16.6878 30.782L18.6188 31.3026ZM23.4415 21.5668L27.1849 27.5562L28.8809 26.4962L25.1375 20.5068L23.4415 21.5668ZM27.3687 26.2787C24.6901 28.6585 23 32.1325 23 36H25C25 32.7278 26.4275 29.7902 28.6971 27.7738L27.3687 26.2787ZM23 36C23 39.8675 24.6901 43.3415 27.3687 45.7213L28.6971 44.2262C26.4275 42.2098 25 39.2722 25 36H23ZM27.1849 44.4438L23.4415 50.4332L25.1375 51.4932L28.8809 45.5038L27.1849 44.4438ZM24.9064 50.1761C21.8874 47.81 19.6444 44.502 18.6188 40.6974L16.6878 41.218C17.8285 45.4498 20.3216 49.1239 23.6727 51.7502L24.9064 50.1761ZM50.7118 49.4271C50.5801 49.199 50.4354 48.9824 50.2791 48.7779L48.6902 49.9925C48.7944 50.1288 48.8912 50.2737 48.9798 50.4271L50.7118 49.4271ZM48.5157 57.6233C51.3854 55.9664 52.3687 52.2969 50.7118 49.4271L48.9798 50.4271C50.0843 52.3403 49.4288 54.7866 47.5157 55.8912L48.5157 57.6233ZM40.3195 55.4271C41.9764 58.2969 45.6459 59.2801 48.5157 57.6233L47.5157 55.8912C45.6025 56.9958 43.1561 56.3403 42.0516 54.4271L40.3195 55.4271ZM39.9825 54.7489C40.0795 54.9793 40.1917 55.2058 40.3195 55.4271L42.0516 54.4271C41.9657 54.2783 41.8906 54.1267 41.8259 53.9731L39.9825 54.7489ZM40.6468 53.3947C39.1655 53.7894 37.6081 54 36 54V56C37.7835 56 39.5139 55.7663 41.1617 55.3273L40.6468 53.3947ZM36 54C33.1711 54 30.4974 53.3481 28.1181 52.1874L27.2412 53.9849C29.8876 55.276 32.8607 56 36 56V54ZM28.5277 53.6161L32.2713 47.6264L30.5753 46.5664L26.8317 52.5561L28.5277 53.6161ZM31.0416 48.0207C32.5709 48.6521 34.2461 49 36 49V47C34.5125 47 33.0964 46.7053 31.8049 46.172L31.0416 48.0207ZM36 49C42.4425 49 47.7887 44.3146 48.8203 38.1654L46.8479 37.8345C45.9752 43.0363 41.4495 47 36 47V49ZM47.8341 39L54.896 39L54.896 37L47.8341 37L47.8341 39ZM53.9014 37.8959C53.4632 42.0848 51.5881 45.8468 48.7749 48.6807L50.1943 50.0897C53.3175 46.9436 55.4033 42.7621 55.8906 38.104L53.9014 37.8959Z" />
                                                <path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"
                                                    d="M36 64.0001C51.464 64.0001 64 51.4641 64 36.0001C64 20.5361 51.464 8.0001 36 8.0001C20.536 8.0001 8 20.5361 8 36.0001C8 51.4641 20.536 64.0001 36 64.0001Z" />
                                            </g>
                                        </svg>
                                    </span>.
                                </em></p>
                        </div>
                    </blockquote>
                </div>
            </div>
            <div id="skills" class="py-8">
                <h1 class="text-center sm:text-start text-4xl font-semibold">⚙️ <span class="underline">Skills</span></h1>
                <SkillSection :sec_skills="sec_skills" :skills="skills" />
            </div>
            <div id="stacks" class="py-8">
                <h1 class="text-center sm:text-start text-4xl font-semibold">📚 <span class="italic">Stacks</span></h1>
                <div class="text-center sm:text-start py-4 underline text-3xl">comming soon.</div>
            </div>
            <div id="contact" class="py-10">
                <h1 class="text-center sm:text-start text-4xl font-semibold">📞 <span
                        class="italic underline">Contact</span></h1>
                <div class="py-8 flex flex-wrap justify-center gap-4">
                    <SocialLink color="rose" name="Email" avatar="/logos/email.png" link="ermia1303@gmail.com" />
                    <SocialLink color="indigo" name="LinkedIn" avatar="/logos/linkedin.png" :islink="true" link="https://www.linkedin.com/in/ermia-moghadamy-40b074217/" />
                    <SocialLink color="slate" name="Github" avatar="/logos/github.png" :islink="true" link="https://github.com/GeekyChunk/" />
                    <SocialLink color="orange" name="Reddit" avatar="/logos/reddit.jpg" :islink="true" link="https://www.reddit.com/user/Ermia_codev" />
                    <SocialLink color="blue" name="Twitter" avatar="/logos/twitter.png" :islink="true" link="https://twitter.com/Ermia_Codev" />
                    <SocialLink color="purple" name="Telegram" avatar="/logos/telegram.png" :islink="true" link="https://MakaveliDon619.t.me" />
                    <SocialLink color="amber" name="StackOverflow" avatar="/logos/stack.png" :islink="true" link="https://stackoverflow.com/users/15701892/" />
                </div>
            </div>
        </div>
    </div>
</template>
