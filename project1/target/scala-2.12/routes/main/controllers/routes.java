// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/janekkurzydlo/Desktop/My projects/Uczelnia/e-business/project1/conf/routes
// @DATE:Sun May 06 15:31:22 CEST 2018

package controllers;

import router.RoutesPrefix;

public class routes {
  
  public static final controllers.ReverseProductController ProductController = new controllers.ReverseProductController(RoutesPrefix.byNamePrefix());
  public static final controllers.ReverseAssets Assets = new controllers.ReverseAssets(RoutesPrefix.byNamePrefix());

  public static class javascript {
    
    public static final controllers.javascript.ReverseProductController ProductController = new controllers.javascript.ReverseProductController(RoutesPrefix.byNamePrefix());
    public static final controllers.javascript.ReverseAssets Assets = new controllers.javascript.ReverseAssets(RoutesPrefix.byNamePrefix());
  }

}
