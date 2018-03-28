<template>
	<div class="login">
		<Row>
        <Col span="8" offset="8">
        	<Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
		        <FormItem prop="user">
		            <Input type="text" v-model="formInline.user" placeholder="Username">
		                <Icon type="ios-person-outline" slot="prepend"></Icon>
		            </Input>
		        </FormItem>
		        <FormItem prop="password">
		            <Input type="password" v-model="formInline.password" placeholder="Password">
		                <Icon type="ios-locked-outline" slot="prepend"></Icon>
		            </Input>
		        </FormItem>
		        <FormItem>
		            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
		        </FormItem>
		    </Form>
        </Col>
    </Row>
	</div>
</template>

<script>
	 export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                        setTimeout(()=>{
                        	this.$router.push('/index/home');
                        })
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>

<style>
	.login {
		position: absolute;
	    margin: auto;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    top: 0;
	    height: 170px;
	    text-align: center;
	}
</style>