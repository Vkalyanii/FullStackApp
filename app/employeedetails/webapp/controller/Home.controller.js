//const TokenInfo = require("@sap/xssec/lib/tokeninfo");

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/Token"
   
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator,Token) {
        "use strict";

        return Controller.extend("com.app.employeedetails.controller.Home", {
            onInit: function () {

                const oView1 = this.getView();
                const oMulti = oView1.byId("multiInput1");
                const oMulti1 = oView1.byId("idLNameFilterValue");
                oMulti.addValidator(function (arg) {
                    if(true) {
                        var text = arg.text;
                        return new Token({key:text, text:text} );
                    }                    
                });

                oMulti1.addValidator(function (arg) {
                    if(true) {
                        var text = arg.text;
                        return new Token({key:text, text:text} );
                    }                    
                });
                

            },
            onGoPress: function (ev) {
                /**
                 * Create all the filters
                 * Use Multi Input in Filters so that we can push multiple filters at a time
                 * Add the Functionality for Clear Filter
                 */
                debugger
                const oView = this.getView();

                //const ofilter = [ "multiInput1","idLNameFilterValue","idEmailFilterValue","iPhoneFilterValue"] 
                    oFirstNameFilter = oView.byId("multiInput1"),
                    oLastNameFilter = oView.byId("idLNameFilterValue"),
                    oEmailFilter = oView.byId("idEmailFilterValue"),
                    oPhoneFilter = oView.byId("iPhoneFilterValue"),
                    sFirstName = oFirstNameFilter.getTokens(),
                    sFirstName = ofilter[1].getTokens(),
                    sLastName = oLastNameFilter.getTokens(),
                    sEmail = oEmailFilter.getValue(),
                    sPhone = oPhoneFilter.getValue(),
                    oTable = oView.byId("idEmployeeTable"),
                    aFilters = [];
                sFirstName.filter((ele)=>{
                    ele ? aFilters.push(new Filter("fName",FilterOperator.EQ, ele.getKey())): "";

                })
               // sFirstName ? aFilters.push(new Filter("fName", FilterOperator.EQ, sFirstName)) : "";
                oTable.getBinding("items").filter(aFilters);
                sLastName.filter((ele)=>{
                    ele ? aFilters.push(new Filter("lName",FilterOperator.EQ, ele.getKey())): "";

                })
                //sLastName ? aFilters.push(new Filter("lName", FilterOperator.EQ, sLastName)) : "";
                 oTable.getBinding("items").filter(aFilters);

                 sEmail ? aFilters.push(new Filter("email", FilterOperator.EQ, sEmail)) : "";
         oTable.getBinding("items").filter(aFilters);
         sPhone ? aFilters.push(new Filter("phone", FilterOperator.EQ, sPhone)) : "";
         oTable.getBinding("items").filter(aFilters);
            },
 

             onClearFilterPress:function () {
                const oView = this.getView(),
                 oFirstNameFilter = oView.byId("idFNameFilterValue").setValue(),
                 oEmail=oView.byId("idEmailFilterValue").setValue(),
                 oLastName=oView.byId("idLNameFilterValue").setValue(),
                 ophoneNumber=oView.byId("iPhoneFilterValue").setValue();
 
             }

        });
    });
