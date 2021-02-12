/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your customer ViewModel code goes here
 */
// define(['accUtils'],
//   function (accUtils) {
//     function CustomerViewModel() {

define(['accUtils', 'text!../endpoints.json'],
  function (accUtils, endpoints) {
    function CustomerViewModel() {


      /*
      // Fetch from API
      fetch('http://localhost:3000/employees').then(function (response) {
        // The API call was successful!
        console.log('API call succeeded. Response: ', response);
      }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
      });
      */

      // Get API data as a JSON object
      /*
      self.url = JSON.parse(endpoints).employees;
      // fetch('http://localhost:3000/employees').then(function (response) {
      fetch(url).then(function (response) {
        // The API call was successful!
        console.log('API call to URL: ', url);
        return response.json();
      }).then(function (data) {
        // This is the JSON from our response
        console.log('JSON from our response:', data);
      }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
      });
      */

      // Assign JSON var data to DataGrid....
      // Is following code an option where we replace 
      // self.collection with data
      /*
      self.dataSource = new oj.CollectionDataGridDataSource(
        self.collection, {
        rowHeader: 'id',
        columns: ['FIRST_NAME', 'LAST_NAME', 'HIRE_DATE', 'SALARY']
      });

      No, because CollectionDataGridDataSource requires a collection as a parameter.
      Following link has an example:
      https://developer.mozilla.org/en-US/docs/Web/API/Body/json

      

      // Following is yet more code I tried and got thrown errors

      const myList = document.querySelector('ul');
      // const myRequest = new Request('products.json');
      self.url = JSON.parse(endpoints).products;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          for (const product of data.products) {
            let listItem = document.createElement('li');
            listItem.appendChild(
              document.createElement('strong')
            ).textContent = product.Name;
            listItem.append(
              ` can be found in ${product.Location
              }. Cost: `
            );
            listItem.appendChild(
              document.createElement('strong')
            ).textContent = `£${product.Price}`;
            myList.appendChild(listItem);
          }
        })
        .catch(console.error);
        


      var myList = document.querySelector('ul');
      self.url = JSON.parse(endpoints).products;

      fetch(url)
        .then(function (response) {
          if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
          }
          return response.json();
        })
        .then(function (json) {
          for (var i = 0; i < json.products.length; i++) {
            var listItem = document.createElement('li');
            listItem.innerHTML = '<strong>' + json.products[i].Name + '</strong>';
            listItem.innerHTML += ' can be found in ' + json.products[i].Location + '.';
            listItem.innerHTML += ' Cost: <strong>£' + json.products[i].Price + '</strong>';
            myList.appendChild(listItem);
          }
        })
        .catch(function (error) {
          var p = document.createElement('p');
          p.appendChild(
            document.createTextNode('Error: ' + error.message)
          );
          const list = new FormData(document.getElementById('listcontainer'));

          document.body.insertBefore(listcontainer, myList);
        });

        */



      // Following is boilerplate code from 
      this.connected = () => {
        accUtils.announce('Customers page loaded.');
        document.title = "Customers";
        // Implement further logic if needed
      };

      this.disconnected = () => {
        // Implement if needed
      };

      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    return CustomerViewModel;
  }
);
