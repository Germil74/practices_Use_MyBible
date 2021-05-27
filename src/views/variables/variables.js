module.exports = function(){
   /* $.handlebars.registerPartial('footer', '<footer>the end!!!!</footer>')*/
    $.handlebars.registerHelper('capitals', function(str){
        return str.toUpperCase()
    })
    $.handlebars.registerHelper('lower', function(str){
        return str.toLowerCase()
    })
    $.handlebars.registerHelper('encodeURI', function(str){
        return encodeURIComponent(str)
    })
}

