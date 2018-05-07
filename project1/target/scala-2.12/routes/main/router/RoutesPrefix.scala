// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/janekkurzydlo/Desktop/My projects/Uczelnia/e-business/project1/conf/routes
// @DATE:Sun May 06 15:31:22 CEST 2018


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
