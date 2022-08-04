<template>
    <div>
        <h1>你好 vue</h1>
        


        <bjw-table>
           
        </bjw-table>

    </div>
</template>

<script>
    export default {
        name: "packageMjDialog",
        data(){
            return{

            }
        },
        methods:{
         
          
        },
        mounted(){
        }
    }
</script>

<style>
.mj_dialog_box {
    padding: 14px;
}

.mj_dialog_head {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.mj_dialog_head > span:last-child {
    font-size: 24px;
    font-weight: 600;
    color: #ff0000;
    cursor: pointer;
}

.mj_dialog_content {
    margin-top: 10px;
}

</style>