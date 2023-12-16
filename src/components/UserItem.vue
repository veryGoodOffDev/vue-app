<template>
    <li @click="openUserPage(user.id, user.name)">
      {{user.name }}
    </li>
</template>

<script>
// import UserViewVue from '../views/UserView.vue';
export default {
    name: 'UserItem',
    props: {
        user: {
            type: Object,
            required: true,
        }
    },
    components: {
        
    },

    methods: {
        openUserPage(id, userName) {
            this.$router.push({name: "user", params:{id, userName:userName}})
        }
    },
};
</script>

<style lang="scss" scoped>

</style>