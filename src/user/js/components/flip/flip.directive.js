module.exports = [function () {
    return {
      restrict: 'E',
      templateUrl:  './js/components/flip/flip.template.html',
      transclude: {
        front: 'cardFlipFront',
        back: 'cardFlipBack'
      },
      scope: {
        flipped: '=',
        flipAlong: '@'
      }
    };
  }];