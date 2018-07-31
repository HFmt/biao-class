<script>

import api from "../lib/api";
export default {
    data() {
        return {
            count: {
                phone: "",
                mail: ""
            },
            current: {},
            phoneCode: "",
            emailCode: "",
            typeBox: 'phone',
            phoneTimer: null,
            emailTimer: null,
        };
    },
    methods: {
        phoneboxShow() {
            this.typeBox = 'phone';
        },
        emailboxShow() {
            this.typeBox = 'mail';
        },

        getPhoneCode() {
            if (!this.current.phone || this.current.phone.length != 11 || this.count.phone) return;
            
            this.count.phone = 5;  

            if (!this.phoneTimer) {
                this.phoneTimer = setInterval(() => {
                    if (this.count.phone <= 0) {
                        clearInterval(this.timer);
                        this.phoneTimer = null;
                    } else {
                        this.count.phone--;
                        this.$set(this.count, 'phone', this.count.phone);
                    }
                }, 1000);
            }
            api.api("captcha/sms", { phone: this.current.phone })
                .then( res => {
                    this.phoneCode = atob(res.data.result);
                }); 
        },
        getEmailCode() {
            if (!this.current.mail || this.current.mail.length != 11 || this.count.mail) return;
            
            this.count.mail = 30;  

            if (!this.emailTimer) {
                this.emailTimer = setInterval(() => {
                    if (this.count.mail <= 0) {
                        clearInterval(this.timer);
                        this.timer = null;
                    } else {
                        this.count.mail--;
                        this.$set(this.count, 'mail', this.count.mail);
                    }
                }, 1000);
            }

            // api.api("captcha/mail", { mail: this.current.mail })
            //     .then( res => {
            //         this.emailCode = atob(res.data.result);
            //     });
        }

    }
};
</script>