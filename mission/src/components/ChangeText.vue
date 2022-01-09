<template>
    <div>
        <input type = "text" v-model="message"/>
        <button v-on:click="changeMessage">제출</button>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: 'ChangeText',
    props:{
        propsmessage: {
            type: String,
        }
    },
    data(){
        return{
        message: this.propsmessage,
        }
    },
     methods: {
    changeMessage() {
      const array = this.message.split('');
      const temp = array.shift();
      array.push(temp);
      this.message = array.join('');
        },
    }
}
</script>

