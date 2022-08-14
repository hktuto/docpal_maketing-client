<template>
    <div class="contactInput">
        <input v-model="email" placeholder="Email" @keydown.enter="submit" />
    </div>
</template>

<script lang="ts" setup>
    const email = ref('')

    function submit(){
        if(!email.value){
            return
        }
        console.log(email.value)
        email.value = '';
        // submit email
    }
</script>

<style scoped>
.contactInput{
    width:100%;
    border: 1px solid var(--primary-color);
    padding: 8px 12px;
    border-radius: 4px;
}
input {
    border:none;
    width:100%;
}
</style>