SedrickCz::Application.routes.draw do

  root :to => 'refinery/blog/posts#index'

  mount Refinery::Core::Engine, :at => '/'

end
