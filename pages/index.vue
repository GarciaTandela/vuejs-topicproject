<template>
  <h2 class="center">Bemvindo ao App de Tópicos</h2>
</template>

<script>
export default
{
	//Se o usuário não estiver autenticado, irá manter o mesmo  na página do login, não permitindo ele navegar outras páginas para além do register
	middleware:['auth']

}
</script>

<style>
  
</style>