UI.registerHelper('mresultsloaded',function(input){
  return Session.get("mresultsloaded");
});

UI.registerHelper('tresultsloaded',function(input){
  return Session.get("tresultsloaded");
});

UI.registerHelper('searchingresults',function(input){
  return Session.get("searchingresults");
});

UI.registerHelper('noresults',function(input){
  return Session.get("noresults");
});

UI.registerHelper('searcherror',function(input){
  return Session.get("searcherror");
});

UI.registerHelper('mrequests',function(input){
  return Session.get("mrequests");
});

UI.registerHelper('trequests',function(input){
  return Session.get("trequests");
});

UI.registerHelper('movieexists',function(input){
  return Session.get("movieexists");
});

UI.registerHelper('movieadded',function(input){
  return Session.get("movieadded");
});

UI.registerHelper('moviedownloaded',function(input){
  return Session.get("moviedownloaded");
});

UI.registerHelper('searchmovie',function(input){
  return Session.get("searchmovie");
});

UI.registerHelper('searchtv',function(input){
  return Session.get("searchtv");
});