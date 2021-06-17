<template>
  <div>
    <div class="columns">
        <div class="column is-three-fifths">
          <a href="#">
            <section class="section">
              <h1 class="title">Section</h1>
              <h2 class="subtitle">
                A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
              </h2>
            </section>
          </a>
          
        </div>

      <div class="column">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <news></news>
              </article>
            </div>
          </div>
      </div>
    </div>
    

  

  
  </div>
</template>

<script>
// @ is an alias to /src
import News from "@/components/News.vue";

export default {
  name: "Home",
  components: {
    News
  },
};
</script>
