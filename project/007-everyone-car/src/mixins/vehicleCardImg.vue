<script>
    export default {
        methods: {
            getVehicleCardList(row) {
           return row.preview && row.preview[0] ? row.preview[0].url : '//img2.rrcimg.com/o_1cgr90a8e330993051447853708856301.jpg?imageView2/2/interlace/1/w/290/h/192/format/webp';
        },
        }
    }
</script>