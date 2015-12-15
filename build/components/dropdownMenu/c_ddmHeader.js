(function() {
  var DDMHeader, DDMHeaderCssManager, DDMHeaderDirective, directiveDir,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  directiveDir = 'lib/components/dropdownMenu/';

  DDMHeader = (function(superClass) {
    extend(DDMHeader, superClass);

    function DDMHeader(rawData) {
      this.rawData = rawData;
      this.title = this.rawData;
    }

    return DDMHeader;

  })(Model);

  DDMHeaderCssManager = (function(superClass) {
    extend(DDMHeaderCssManager, superClass);

    function DDMHeaderCssManager() {
      return DDMHeaderCssManager.__super__.constructor.apply(this, arguments);
    }

    return DDMHeaderCssManager;

  })(CssManager);

  DDMHeaderDirective = (function(superClass) {
    extend(DDMHeaderDirective, superClass);


    /*
    Construct an instance of DDMDirective
    @param params [Dict] parameters of angular directive
    @param cssKlass [Class] css management class for DDMHeaderDirective
     */

    function DDMHeaderDirective(params, cssKlass) {
      var headerParams;
      params = params != null ? params : {};
      cssKlass = cssKlass != null ? cssKlass : DDMHeaderCssManager;
      headerParams = {
        templateUrl: directiveDir + 'ddmHeader.html'
      };
      _.extend(params, headerParams);
      DDMHeaderDirective.__super__.constructor.call(this, params, DDMHeader, cssKlass);
    }

    return DDMHeaderDirective;

  })(Directive);

  this.DDMHeaderDirective = DDMHeaderDirective;

  this.DDMHeaderCssManager = DDMHeaderCssManager;

}).call(this);


/*
Create an angular module called OOD_Table
@author Phoenix Grey
 */

(function() {
  var d, lib;

  lib = angular.module("OOD_ddmHeader", ['gettext']);

  lib.run([
    'gettextCatalog', function(gettextCatalog) {
      gettextCatalog.currentLanguage = 'zh';
      return gettextCatalog.debug = true;
    }
  ]);


  /*
  Expose OOD to Browser as a global object
  @author Phoenix Grey
   */

  d = new DDMHeaderDirective();

  DirectiveSchool.register(lib, 'ddmHeader', d);

}).call(this);

angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('zh', {});
/* jshint +W100 */
}]);
angular.module('OOD_ddmHeader').run(['$templateCache', function ($templateCache) {
	$templateCache.put('lib/components/dropdownMenu/ddmHeader.html', '<div>{{model.title}}</div>');
}]);