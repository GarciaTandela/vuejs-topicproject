<template>

	<div class="container">

		<h2 class="center">Últimos Tópicos</h2>

		<div v-for="(topic,index) in topics" :key="index" class="light">

			<ul class="collection">
			    <li class="collection-item avatar">

			      <div v-if="authenticated">
			      	<div v-if="user.id === topic.user.id">
			      		<nuxt-link :to="{name:'topics-edit', params:{id: topic.id}}"><i class="material-icons">update</i></nuxt-link>
			      	</div>	
			      </div>

			      <i class="material-icons circle">folder</i>
			      <span class="title"><nuxt-link :to="{name:'topics-id', params:{id: topic.id}}">{{topic.title}}</nuxt-link></span>

			      <div v-for="(content,index) in topic.posts" :key="index">
			      	{{content.body}}
			      	<p>{{content.created_at}} by {{content.user.name}}</p>	
			      </div>

			      <a class="secondary-content" style="cursor: pointer">
			      	<div v-if="authenticated">
				      	<div v-if="user.id === topic.user.id">
				      		<i class="material-icons" @click="deleteTopic(topic.id, index)">delete</i>
				      	</div>	
			      	</div>
			      </a>

			    </li>

			</ul>

		</div>

		<ul class="pagination center">

			<li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>

			<li class="active" v-for="(key,value) in links" :key="key">
				<a @click="loadMore(key)" href="#!">{{value}}</a>	
			</li>
	
		    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
		</ul>

	</div>

</template>

<script>

export default
{

	data()
	{
		return{

			topics:[],
			links:[]

		}
	},
	async asyncData({$axios})
	{
			/*let response = await this.$axios.$get('/topics');
			console.log(response);*/

			let {data,links} = await $axios.$get('/topics');
			
			return{
				topics:data,
				links
			}
	},

	methods:
	{
		async loadMore(key)
		{
			let {data} = await this.$axios.$get(key);

			return this.topics = {...this.topics, ...data}
		},
		async deleteTopic(id, index)
		{
			this.$axios.$delete(`/topics/${id}`);

			//redirect
			// this.$router.push('/topics');

			this.topics.splice(index,1);
		}	
	}
}

</script>

<style>
	
</style>