( function() {

  test( 'getMeasurements', function() {
    var container = document.querySelector('#get-measurements')
    var layout = new CellsByRow( container, {
      columnWidth: 80,
      rowHeight: 65
    });

    equal( layout.columnWidth, 80, 'columnWidth option set 80' );
    equal( layout.rowHeight, 65, 'rowHeight option set 65' );

    var gridSizer = container.querySelector('.grid-sizer');

    layout.options.columnWidth = gridSizer;
    layout.options.rowHeight = gridSizer;
    layout.layout();

    equal( layout.columnWidth, 75, 'columnWidth element sized as 75px' );
    equal( layout.rowHeight, 90, 'rowHeight element sized as 90px' );

    gridSizer.style.width = '50%';
    layout.layout();

    equal( layout.columnWidth, 100, 'columnWidth element sized as 50% => 100px' );

  });

})();
