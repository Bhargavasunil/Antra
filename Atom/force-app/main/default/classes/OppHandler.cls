public with sharing class OppHandler {
   
    @AuraEnabled(cacheable=true) 
     public static list<Opportunity> fetchOpportunities(){
         return [SELECT Id, AccountId, Name, Description, StageName, 
                                    Amount, Probability, ExpectedRevenue, CloseDate FROM Opportunity ];
                   
     }
}
