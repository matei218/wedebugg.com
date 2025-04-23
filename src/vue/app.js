const { createApp, ref} = Vue;

createApp({
    setup(){
        const count = ref(0);
        return {
            count
        };
    },
    template:`
    <div>
        <h2>Vue App (External)</h2>
        <button @click="count++">Clicked {{count}} times</button>
    </div>
    `
}).mount('#vue-app')