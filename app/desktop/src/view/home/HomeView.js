Ext.define('CovidApp.view.home.HomeView',{
	xtype: 'homeview',
	cls: 'homeview',
	controller: {type: 'homeviewcontroller'},
	viewModel: {type: 'homeviewmodel'},
	requires: [],
	extend: 'Ext.Container',
  scrollable: true,
  html: `<div style="user-select: text !important;">Welcome to the Covid-19 Application!
<br><br>
This is a simple desktop application to track Covid-19 situation in the world:
<br>
- using this <a href="https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest">API</a> as a source info
<br>
- using ExtJS features such as Grid and Window

<br><br>
Notice that the menu allows you to select from several views:
<br>
- Home (the view you are currently on)
<br>
- World
<br><br>
Select the World menu item to see a pandemic situation around the world
</div>`
});
