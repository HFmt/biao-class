<script>
    import api from "../lib/api";
    
    export default {
        data() {
            return {
                count: {
                    phone: '',
                    mail: ''
                },
                formValidate: {

                },
                verificationPhone: '',
                verificationMail: '',
                phoneTimer: null,
                emailTimer: null
            }
        },
        methods: {
            getPhoneVerificationCode() {
                if(!this.formValidate.phone || this.count.phone) {
                    this.$Message.error("手机号码不能为空");
                    return
                }

                this.count.phone = 5;

                if(!this.phoneTimer) {
                    this.phoneTimer = setInterval(() => {
                        if(this.count.phone <=0) {
                            clearInterval(this.phoneTimer);
                            this.phoneTimer = null;
                        } else {
                            this.count.phone--;
                            this.$set(this.count, 'phone', this.count.phone);
                        }
                    }, 1000);
                }

                api.api('captcha/sms', {phone: this.formValidate.phone})
                        .then(res => {
                            this.verificationPhone = atob(res.data.result);
                        });
            }
        }
    }
</script>