public with sharing class OppHandler {
    public OppHandler() {

    }
    @AuraEnabled(cacheable=true) 
     public static list<Opportunity> fetchOpportunities(){
         List<Opportunity> oppData =[SELECT Id, AccountId, Name, Description, StageName, 
                                    Amount, Probability, ExpectedRevenue, CloseDate FROM Opportunity ];
                    return oppData;
     }
}
