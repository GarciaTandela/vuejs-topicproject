<template>

	<div class="container valign-wrapper ajuste-centro">

		<div class="row">
			<h5 class="center">Registrar-se</h5>

		    <form class="col s12" @submit.prevent="register">	

		      <div class="row">

		      	<div class="input-field col s12">
		          <i class="material-icons prefix">account_circle</i>
		          <input v-model.trim="form.name" id="icon_prefix" type="text" class="validate" autofocus>
		          <label for="icon_prefix">Nome Completo</label>
		          <small v-if="errors.name">{{errors.name[0]}}</small>
		        </div>

		        <div class="input-field col s12">
		          <i class="material-icons prefix">email</i>
		          <input v-model.trim="form.email" id="icon_prefix" type="text" class="validate">
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

		      <button class="btn waves-effect waves-light" type="submit" name="action">Registar-se
			  </button>
			  <p>Possui uma conta?<nuxt-link to="/login">Entrar</nuxt-link></p>

		    </form>
		    

		 </div>
	</div>

</template>

<script>
export default
{
	//Se o usuário já estiver autenticado não permitirá aceder a páginas restritas,Ex:Login e Register.
	middleware:['guest'],
	data(){

		return{

			form:
			{
				name:'',
				email:'',
				password:''
			}

		}

	},

	methods:
	{
		async register()
		{
			if(this.form.name && this.form.email && this.form.password) {
				await this.$axios.$post('register',this.form);

				await this.$auth.loginWith('local',{

					data:{

						email:this.form.email,
						password:this.form.password

					}

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