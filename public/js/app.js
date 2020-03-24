const app = angular.module('RecipeApp', [])

app.controller('MainController', ['$http', function($http){
  this.title = null
  this.url = null
  this.indexOfEditFormToShow = null
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
        controller.title = null
        controller.url = null
        controller.recipes.push(response.data)
      },
      function(err){
        console.log(err)
      }
    )
  }

  this.editRecipe = function(recipe){
    $http({
      method: 'PUT',
      url: '/recipes/' + recipe._id,
      data: {
        title: this.updatedTitle,
        url: this.updatedUrl
      }
    }).then(
      function(response){
        controller.indexOfEditFormToShow = null
        controller.getRecipes()
      },
      function(err){
        console.log(err)
      }
    )
  }

  this.deleteRecipe = function(recipe){
    $http({
      method: 'DELETE',
      url: '/recipes/' + recipe._id
    }).then(
      function(){
        controller.getRecipes()
      },
      function(error){

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
