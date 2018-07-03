import Vue from 'vue';

export default Vue.directive('bgRed', {
    bind: el => {
        el.addEventListener('click', () => {
            el.style.backgroundColor = 'red';
        });
    }
});

