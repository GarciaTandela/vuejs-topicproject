<template>

	<div class="container valign-wrapper ajuste-centro">

		<div class="row">
			<br>
			<br>
			<br>
			<h5 class="center">Criar novo tópico</h5>
			<hr>

		    <form class="col s12" @submit.prevent="create">	

		      <div class="row">

		        <div class="input-field col s12">
		          <i class="material-icons prefix">message</i>
		          <input v-model.trim="form.title" id="icon_prefix" type="text" class="validate" autofocus>
		          <label for="icon_prefix">Título do Tópico</label>
		          <small v-if="errors.title">{{errors.title[0]}}</small>
		        </div>

		        <div class="input-field col s12">
		           <i class="material-icons prefix">message</i>
		           <textarea v-model="form.body" id="textarea1" class="materialize-textarea"></textarea>
          		   <label for="textarea1">Descrição</label>
          		   <small v-if="errors.body">{{errors.body[0]}}</small>
		        </div>

		      </div>

		      <button class="btn waves-effect waves-light" type="submit" name="action">Criar
			  </button>

			</form>
		    

		 </div>
	</div>

</template>

<script>
export default
{
	middleware:['auth'],
	data()
	{
		return{

			form:
			{
				title:'',
				body:''
			}
		}
	},

	methods:
	{
		async create()
		{
			await this.$axios.$post('/topics',this.form);

			this.$router.push('/topics');

		}
	} 
}
</script>

<style scoped>
	
</style>