var htmlparser = require("./");
var html = [
    "<script>",
    "/*<![CDATA[*/",
    "  var _gaq=[['_setAccount','UA-xxxxx-1'],['_trackPageview']];",
    "  (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];",
    "  g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';",
    "  s.parentNode.insertBefore(g,s)}(document,'script'));",
    "/*]]>*/",
    "</script>"
  ].join("\n");


var handler = new htmlparser.DomHandler({});
var parser = new htmlparser.Parser(handler, {});
parser.write(html);

function print(name, value) {
  console.log("\n\n" + name + "\n" + Array(name.length + 1).join("-"));
  console.log(value);
}

print("HTML", html);
print("Parsed", handler.dom[0].children);
