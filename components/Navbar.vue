<template>

	<div>

		<nav class="blue-grey darken-3">

		    <div class="nav-wrapper container">
		      <label class="brand-logo">TandelaLine</label>
		      <ul id="nav-mobile" class="right hide-on-med-and-down">
		        <template v-if="authenticated">
					<!-- <li><nuxt-link to="/">Home</nuxt-link></li> -->
					<li><nuxt-link to="/topics">Tópicos</nuxt-link></li>
					<li><nuxt-link to="/dashboard">Criar tópico</nuxt-link></li>
			        <li><a>{{user.name}}</a></li>
			        <li><a>{{user.email}}</a></li>	
			        <li><a @click.prevent="logout">Sair</a></li>
		        </template>

		        <template v-else>
			        <li><nuxt-link to="/login">Entrar</nuxt-link></li>
			        <li><nuxt-link to="/register">Registrar-se</nuxt-link></li>
		        </template>

		      </ul>
		    </div>
		
	  	</nav>
	
	</div>

</template>

<script>
export default
{
	methods:
	{
		logout()
		{
			this.$auth.logout();
		}
	}
} 
</script>

<style>
  
</style>