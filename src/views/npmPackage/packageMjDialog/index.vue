<template>
    <div>
       <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="活动名称" prop="name">
				<el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
			
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
    </div>
</template>

<script>
export default {
	name: "bjw-table",
	props:{
		
	},
	data() {
		return {
			ruleForm: {
				name: '',
				
			},
			rules: {
				name: [
					{ required: true, message: '请输入活动名称', trigger: 'blur' },
				]
			}
		};
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
			if (valid) {
				alert('submit!');
			} else {
				console.log('error submit!!');
				return false;
			}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		initForm(obj){
			this.$nextTick(() => {
				let formDom = document.getElementsByClassName('demo-ruleForm'),
				{width,backgroundColor} = obj
	
				console.log(formDom,'========')
				for (let i = 0; i < formDom.length; i++) {
					formDom[i].style.width = `${width || 660}px`;
					formDom[i].style.backgroundColor = `${backgroundColor}`;
					
					console.log(formDom[i])
					console.log(formDom[i].children)
				}
			})
		}
	}
};

</script>

<style lang="less" scoped>
	.demo-ruleForm{
		widows: 500px;
		border-radius: 10px;
		background: skyblue;
	}
</style>