<template>

	<div class="container valign-wrapper ajuste-centro">

		<div class="row">
			<h5 class="center">Login</h5>
		    <form class="col s12" @submit.prevent="login">	

		      <div class="row">

		        <div class="input-field col s12">
		          <i class="material-icons prefix">email</i>
		          <input v-model.trim="form.email" id="icon_prefix" type="text" class="validate" autofocus>
		          <label for="icon_prefix">Email</label>
		          <small v-if="errors.email">{{errors.email[0]}}</small>
		        </div>

		        <div class="input-field col s12">
		          <i class="material-icons prefix">lock</i>
		          <input v-model.trim="form.password" id="icon_telephone" type="password" class="validate">
		          <label for="icon_telephone">Senha</label>
		          <small v-if="errors.password">{{errors.password[0]}}</small>
		        </div>

		      </div>

		      <button class="btn waves-effect waves-light" type="submit" name="action">Login
			  </button>
			  <p>Não possui uma conta?<nuxt-link to="/register">Registar-se</nuxt-link></p>
		    </form>
		    

		 </div>
	</div>

</template>

<script>
export default
{	
	//Se o usuário já estiver autenticado não permitirá aceder a páginas restritas,Ex:Login e Register.
	middleware:['guest'],
	data()
	{
		return{

			form:
			{
				email:'',
				password:''
			}
		}
	},

	methods:
	{
		async login()
		{
			if(this.form.email && this.form.password) {
				await this.$auth.loginWith('local',{

					data:this.form

				})

				this.$router.push({

				path:this.$route.query.redirect || "/dashboard"

				}) 
			} else {
				alert('Preencha todos os campos');
			}
		}
	} 
}
	
</script>

<style scoped>

.ajuste-centro
{
	margin-top: 8%;
}
	
</style>