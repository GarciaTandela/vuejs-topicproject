<template>
	<div class="container">
		<h2>Update Topic Title</h2>

		<form @submit.prevent="update">

			<div class="row">

		        <div class="input-field col s6">
		          <input id="first_name" type="text" class="validate" v-model="topic.title">
		          <small v-if="errors.title">{{errors.title[0]}}</small>
		        </div>
		        <br>
		        <button class="btn waves-effect waves-light" type="submit" name="action">Update
			  	</button>

        	</div>

		</form>
		<p>
			<nuxt-link to="/topics">Back to topics</nuxt-link>	
		</p>
	</div>
</template>

<script>
export default
{
	data()
	{
		return{

			topic:
			{

				title:''
			}
		}
	},
	async asyncData({$axios,params})
	{
		const {data} = await $axios.$get(`/topics/${params.id}`);
		return{

			topic:data
		}
	},
	methods:
	{
		async update()
		{
			await this.$axios.patch(`/topics/${this.$route.params.id}`,{

				title:this.topic.title

			});

			//redirect
			this.$router.push('/topics');
		}
	}
}	
</script>

<style>
	
</style>