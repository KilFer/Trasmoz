Handlebars.registerHelper("tagWithIcon", function(text) {
  var result;
  switch(text) {
    case 'Domótica':
      result = '<i class="fa-solid fa-house-user"></i> ' + text;
      break;
    case 'News':
      result = '<i class="fa-solid fa-newspaper"></i>  ' + text;
      break;
    case 'Personal':
      result = '<i class="fa-solid fa-circle-user"></i> ' + text;
      break;
    case 'Podcast':
      result = '<i class="fa-solid fa-microphone-lines"></i> ' + text;
      break;
    default:
      result = '<i class="fa-solid fa-tag"></i> ' + text;
  }
  return new Handlebars.SafeString(result);
});
