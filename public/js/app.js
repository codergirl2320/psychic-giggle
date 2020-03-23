const app = angular.module('RecipeApp', [])

app.controller('MainController', ['$http', function($http){
  this.title = null
  this.url = null
  const controller = this

this.createRecipe = function(){
  $http({
    method: 'POST',
    url: '/recipes',
    data: {
      title: this.title,
      url: this.url
    }
  }).then(
    function(response){
      // controller.title = null
      // controller.url = null
      controller.getRecipes()
    },
    function(err){
      console.log(err)
    }
  )
}

this.getRecipes = function(){
  $http({
    method: 'GET',
    url: '/recipes'
  }).then(
    function(response){
      console.log(controller)
      controller.recipes = response.data
    },
    function(err){
    }
  )
}

this.getRecipes()



}])
