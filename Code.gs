var idBaseDatos="1anGeMqQlSveaBCfEW5E_IRq_ZT6Q1gSyc4LOpdm_Cuk";


function doGet(e) {
  
  var libro= SpreadsheetApp.openById(idBaseDatos);
  var hoja= libro.getSheetByName("Sheet1");
  
  
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/
  var rangoUno= hoja.getRange(1,1, hoja.getRange("a1").getDataRegion().getLastRow(),1).getValues();
  var listaUno=rangoUno.map(function(r){return '<option>' + r[0] + '</option>';}).join('');
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/
  
  
  
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/
  var rangoDos= hoja.getRange(1,2, hoja.getRange("b1").getDataRegion().getLastRow(),1).getValues();
  var listaDos=rangoDos.map(function(r){return '<option>' + r[0] + '</option>';}).join('');
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/
  
  
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/
  var rangoTres= hoja.getRange(1,4, hoja.getRange("d1").getDataRegion().getLastRow(),1).getValues();
  var listaTres=rangoTres.map(function(r){return '<option>' + r[0] + '</option>';}).join('');
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/

  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/
  var rangoCuatro= hoja.getRange(1,5, hoja.getRange("d1").getDataRegion().getLastRow(),1).getValues();
  var listaCuatro=rangoCuatro.map(function(r){return '<option>' + r[0] + '</option>';}).join('');
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/

  
  var tmp= HtmlService.createTemplateFromFile("index.html");
  tmp.list1=listaUno;
  tmp.list2=listaDos;
  tmp.list3=listaTres;
  tmp.list4=listaCuatro;
  
  
  
  
  
  return tmp.evaluate();
  
 
}
