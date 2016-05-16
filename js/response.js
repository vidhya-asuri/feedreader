/* response.js
 *
 */
function Response(){
   this.entries = [];
}
Response.prototype.isEntriesEmpty = function(){
   return (this.entries.length > 0);
}; 

