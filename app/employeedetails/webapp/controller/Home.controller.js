sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("com.app.employeedetails.controller.Home", {
            onInit: function () {

            },
            onGoPress: function () {
                /**
                 * Create all the filters
                 * Use Multi Input in Filters so that we can push multiple filters at a time
                 * Add the Functionality for Clear Filter
                 */
                const oView = this.getView(),
                    oFirstNameFilter = oView.byId("idFNameFilterValue"),
                    sFirstName = oFirstNameFilter.getValue(),
                    oTable = oView.byId("idEmployeeTable"),
                    aFilters = [];

                sFirstName ? aFilters.push(new Filter("fName", FilterOperator.EQ, sFirstName)) : "";
                oTable.getBinding("items").filter(aFilters);
            }
        });
    });
