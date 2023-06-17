module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "node_modules/preline/dist/*.js",
    ],
    plugins: [
        require('preline/plugin'),
    ]
}