<template>
  <div id="app">
    <div class="container">
      <div><img src="./assets/Kakilogo.png" width="80px"></div>
      
      <div class="navbar" role="navigation" aria-label="main navigation">
        
        <router-link to="/"><button class="button is-small is-primary">Home</button></router-link> 

        <router-link to="/trending"><button class="button is-small is-link">Trending</button></router-link>
        
        <router-link to="/communities"><button class="button is-small is-info">Communities</button></router-link>

        <router-link to="/signin"><button class="button is-small is-success">Sign-In</button></router-link>
      </div>
      <router-view />

    <div class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Kaki</strong> by <a href="https://www.linkedin.com/in/ivana-uriarte">Ivana Uriarte</a>. 
        </p>
      </div>
    </div>
    
    </div>
  </div>
</template>

