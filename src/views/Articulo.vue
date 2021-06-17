<template>
    <div class="container is-max-desktop">
        <div class="columns">
            <div class="column">
                <hgroup>
                    <h2 class="title is-4">Titulo</h2>
                    <h3 class="subtitle is-5">Subtitulo</h3>
                </hgroup>
            </div>
            <div class="column">
                
            </div>
        </div>
        
        <time datetime="01-05-2021">Publish 1-05-2021</time>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laudantium commodi numquam ratione facilis modi nostrum odio corporis sint ipsam, aut fugiat saepe dolor deserunt sit sunt laborum porro exercitationem.</p>
        <comments></comments>
                
            
    </div>
</template>
<script>
import Comments from "@/components/Comments.vue"

export default {
  components: {
    Comments
  },
};
</script>