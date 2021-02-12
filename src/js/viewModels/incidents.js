/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your incidents ViewModel code goes here
 */
define([
  'knockout',
  'accUtils',
  'my-employee-form-container'
],
  function (ko, accUtils) {
    function IncidentsViewModel() {

      /**
       * This step in Geertjan's wiki uses JQuery, I think. Need to update it 
       */
      //Step3begin from G's training https://github.com/geertjanw/ojet-training
      // self.url = 'http://localhost:3000/employees';

      self.employees = ko.observableArray();
      $.getJSON("http://localhost:3000/employees").
        then(function (data) {
          var tempArray = [];
          $.each(data, function () {
            tempArray.push({
              empno: this.id,
              name: this.FIRST_NAME,
              lastname: this.LAST_NAME,
              hiredate: this.HIRE_DATE,
              salary: this.SALARY
            });
          });
          self.employees(tempArray);
        });


      // self.dataSource = new oj.CollectionDataGridDataSource(
      //   self.collection, {
      //   rowHeader: 'id',
      //   columns: ['FIRST_NAME', 'LAST_NAME', 'HIRE_DATE', 'SALARY']
      // });
      //step3end


      // EndStep1 Part B

      this.connected = () => {
        accUtils.announce('Incidents page loaded.');
        document.title = "Incidents";
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
    return IncidentsViewModel;
  }
);
