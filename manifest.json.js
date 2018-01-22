{
 "manifest_version": 2,
 "name": "Site BlockLister",
 "version": "1.0",
 
 "description": "Description here.",
 
 "icons": { 
 "48": "icons/border-48.png" 
 },
 
  "content_scripts": [ 
  {
   "matches": ["*://joshmacdonald.net/*"],
   "js": ["borderify.js"]
  }
 ]  
}   
