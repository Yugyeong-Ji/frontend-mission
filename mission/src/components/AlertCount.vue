<template>
    <div>
        <button v-on:click="countClick">알림</button>
    </div>
</template>

<script>
export default {
    name: 'AlertCount',
    props:{
        counter: 0
    },
    data(){
        return{
            cnt: this.counter,
        }
    },
    method: {
        countClick() {
            cnt += 1;
        },
    }
}
</script>