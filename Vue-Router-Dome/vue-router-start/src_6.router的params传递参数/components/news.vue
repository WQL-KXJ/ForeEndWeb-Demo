<template>
    <div>
        <ul>
            <li v-for="n in newsList" :key="n.id">
                {{ n.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "news",
    data() {
        return {
            newsList: [
                { id: '001', title: 'news001' },
                { id: '002', title: 'news002' },
                { id: '003', title: 'news003' }
            ]
        }
    }
}
</script>