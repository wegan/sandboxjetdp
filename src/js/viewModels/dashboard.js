// define(['accUtils', 'ojs/ojdatagrid', 'ojs/ojcollectiondatagriddatasource'],
//   function (accUtils) {

// define(['knockout', 'accUtils', 'text!../endpoints.json', 'ojs/ojdatagrid',
//   'ojs/ojcollectiondatagriddatasource'],
//   function (ko, accUtils, endpoints) {

define(
  ['knockout',
    'accUtils',
    'text!../endpoints.json', 'ojs/ojdatagrid',
    'ojs/ojcollectiondatagriddatasource',
    'my-employee-form/loader'
  ],
  function (ko, accUtils, endpoints) {


    function DashboardViewModel() {


      // Add Knockout observalbes
      var nextKey = 121;
      self.inputEmployeeID = ko.observable(nextKey);
      self.inputFirstName = ko.observable();
      self.inputLastName = ko.observable();
      self.inputHireDate = ko.observable();
      self.inputSalary = ko.observable();

      //Update model when there are changes
      //build a new model from the observables in the form
      self.buildModel = function () {
        return {
          'id': self.inputEmployeeID(),
          'FIRST_NAME': self.inputFirstName(),
          'LAST_NAME': self.inputLastName(),
          'HIRE_DATE': self.inputHireDate(),
          'SALARY': self.inputSalary()
        };
      };

      //used to update the fields based on the selected row:
      self.updateFields = function (model) {
        self.inputEmployeeID(model.get('id'));
        self.inputFirstName(model.get('FIRST_NAME'));
        self.inputLastName(model.get('LAST_NAME'));
        self.inputHireDate(model.get('HIRE_DATE'));
        self.inputSalary(model.get('SALARY'));
      };

      // Create a selection handler
      self.handleSelectionChanged = function (event) {
        var selection = event.detail['value'][0];
        if (selection != null) {
          var rowKey = selection['startKey']['row'];
          self.modelToUpdate = self.collection.get(rowKey);
          self.updateFields(self.modelToUpdate);
        }
      };


      //Step3begin from G's training https://github.com/geertjanw/ojet-training
      // self.url = 'http://localhost:3000/employees';
      self.url = JSON.parse(endpoints).employees;


      self.collection = new oj.Collection(null, {
        model: new oj.Model.extend({
          idAttribute: 'id',
          urlRoot: self.url
        }),
        url: self.url
      });

      self.dataSource = new oj.CollectionDataGridDataSource(
        self.collection, {
        rowHeader: 'id',
        columns: ['FIRST_NAME', 'LAST_NAME', 'HIRE_DATE', 'SALARY']
      });
      //step3end

      // Steps from Geertjan to add CRUD

      self.update = function () {
        self.empl = self.collection.get(self.inputEmployeeID());
        self.empl.save(self.buildModel(), {
          contentType: 'application/json',
          success: function (model, response) {
            console.log(self.inputEmployeeID() + ' -- updated successfully')
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.log(self.inputEmployeeID() + " -- " + jqXHR);
          }
        });
      };


      this.connected = () => {
        accUtils.announce('Dashboard page loaded.');
        document.title = "Dashboard";
      };

      this.disconnected = () => {
      };

      this.transitionCompleted = () => {
      };
    }

    return DashboardViewModel;
  }
);
