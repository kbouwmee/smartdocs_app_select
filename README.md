#SmartDocs App Select

This project adds a select list to SmartDocs nodes when the custom attribute security is the Apikey type security scheme.

## Installation
1) Create the following folder: /profiles/apigee/modules/custom/smartdocs_app_select
2) Move the following files to that folder:
* smartdocs_app_select.info
* smartdocs_app_select.module
* js/smartdocs_app_select.js 
3) Upload the handlebars template smartdocs_app_select.hbr to the model Method Template under the settings of the Smartdcos model. Or add it as a the global template under Configuration > Smartdocs > Advanced Settings.

## Configuration
Make sure you select the API Product/SmartDocs correlation under Configuration > Smartdocs. Only apps are shown with a API Product that has a correlation with the SmartDocs model that the documenation page belongs to.

(/
