describe('Controllers definition', function(){
    'use strict';

    beforeEach(module('arete.controllers'));

    it('cmnMenuCtrl should be defined', inject(function($controller) {
        var cmnMenuCtrl = $controller('cmnMenuCtrl', { $scope: {} });
        expect(cmnMenuCtrl).to.not.be.undefined();
    }));

    it('hmHomeCtrl should be defined', inject(function($controller) {
        var hmHomeCtrl = $controller('hmHomeCtrl', { $scope: {} });
        expect(hmHomeCtrl).to.not.be.undefined();
    }));

});
