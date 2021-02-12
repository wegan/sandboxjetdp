// define(['accUtils'],
//   function (accUtils) {
define(['knockout', 'accUtils', 'ojs/ojarraydataprovider', 'ojs/ojchart'],
  function (ko, accUtils, ArrayDataProvider) {
    function AboutViewModel() {

      /* toggle button variables */
      this.stackValue = ko.observable("off");
      this.orientationValue = ko.observable("vertical");
      // this.dataProvider = new ArrayDataProvider(JSON.parse(data), { keyAttributes: "id", });
      this.dataProvider = new ArrayDataProvider(
        [
          {
            "id": 0,
            "series": "Series 1",
            "group": "Group A",
            "value": 42
          },
          {
            "id": 1,
            "series": "Series 1",
            "group": "Group B",
            "value": 34
          },
          {
            "id": 2,
            "series": "Series 2",
            "group": "Group A",
            "value": 55
          },
          {
            "id": 3,
            "series": "Series 2",
            "group": "Group B",
            "value": 30
          },
          {
            "id": 4,
            "series": "Series 3",
            "group": "Group A",
            "value": 36
          },
          {
            "id": 5,
            "series": "Series 3",
            "group": "Group B",
            "value": 50
          },
          {
            "id": 6,
            "series": "Series 4",
            "group": "Group A",
            "value": 22
          },
          {
            "id": 7,
            "series": "Series 4",
            "group": "Group B",
            "value": 46
          },
          {
            "id": 8,
            "series": "Series 5",
            "group": "Group A",
            "value": 22
          },
          {
            "id": 9,
            "series": "Series 5",
            "group": "Group B",
            "value": 46
          }
        ]
      );


      this.connected = () => {
        accUtils.announce('About page loaded.');
        document.title = "About";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return AboutViewModel;
  }
);
