#SmartDocs App Select

This project adds a select list for API Keys to SmartDocs nodes. Developers no longer have to copy-paste the api keys; they can simply choose the app from the select list. This works for models with the custom attribute security scheme.

![screenshot](https://github.com/kbouwmee/smartdocs_app_select/blob/master/media/screenshot.png "Screenshot")

## Installation
1. Create the following folder in your Drupal developer portal for the custom moule: /sites/all/modules/custom/smartdocs_app_select
2. Move the following files to that folder:
  * smartdocs_app_select.info
  * smartdocs_app_select.module
  * js/smartdocs_app_select.js 
3. Upload the handlebars template smartdocs_app_select.hbr to the model Method Template under the settings of the Smartdocs model. Or add it as a the global template under Configuration > Smartdocs > Advanced Settings.
4. Enable the smartdocs module in Modules

## Configuration
Make sure you select the API Product/SmartDocs correlation under Configuration > Smartdocs. Only apps are shown with a API Product that has a correlation with the SmartDocs model that the documenation page belongs to.

![correlation](https://github.com/kbouwmee/smartdocs_app_select/blob/master/media/smartdocs_product_correlation.png "Correlate your product with your model")
