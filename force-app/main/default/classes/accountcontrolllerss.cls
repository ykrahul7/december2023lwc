public with sharing class accountcontrolllerss {
    @AuraEnabled(cacheable =true)
   public static list<account> getaccount(){
      return [select Id,name,Type,Industry,Rating from account limit 5];
   }
   @AuraEnabled(cacheable =true)
   public static list<account> getaccountparameter(String searchkey){
      string key = '%'+ searchkey +'%';
    return [select Id,name,Type,Industry,Rating from account where name like : key limit 5];
 }
    }
