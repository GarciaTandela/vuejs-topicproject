<template>
	<div class="container">

		<div class="light">

			<ul class="collection">

			    <li class="collection-item">
			      
			      <span class="title">{{topic.title}}</span>
			     
			      <div v-for="(content,index) in topic.posts" :key="index">
			      	{{content.body}}
			      	<p>{{content.created_at}} by {{content.user.name}}</p>	
			      </div>
			    </li>

			</ul>

		</div>

	</div>
</template>

<script>
export default
{
	data()
	{
		return{

			topic:[]
		}
	},

	async asyncData({$axios,params})
	{
		const {data} = await $axios.$get(`/topics/${params.id}`);

		return{
			topic: data
		}
	}
}	
</script>

<style>
	
</style>