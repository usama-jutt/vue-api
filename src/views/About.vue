<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>Articles</h1>
    <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(article,i) in articles" :key="i">  
       <td>{{ article.id }}</td> 
       <td>{{ article.title }}</td>
       <td>{{ article.body }}</td>  
    </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import ApiService from '../apis/api-services'

  export default {

    name: "About",
    components: {},
    data() {
      return {
        articles: [],
      }
    },
    created () {
     this.checkForm();
  },
    methods: {
      checkForm(){
        ApiService.getArticles()
            .then(response => {
              this.articles = response.data
            })
            .catch(
              error => {
                console.log('error');
                this.credentials_error = "provided credentials are incorrect"
              }
            )
      }
    },
  }
</script>

