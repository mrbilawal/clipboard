# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1: Update Agenet Schema/Modal/Table to add CustomID Field 
   
   Acceptence Criteria:
    => Update the Agent Modal or Agent table by adding new field/Column "customid"
    => The customid field should be unique for each facility
    => the customid should be consitence e.g by setting the max length let's say 10 characters, by following the specific rules like my can say the id should be consist of 3 numbers and    charachters or some thing like that.
    => The custom id should be optional and allow Facilities to save thier own custom IDs for each agent.

  Implementation Details: 
    => Update the agent table to add new a new column for customid.
    => Adding validation to validate the id should be unique for each row or facility.
    => Update the API enpoint for creating and updating the Agent to accept customid.
    => Modify the exiting end endpoint which return the Agent data to now consider the customid as well.
    => Write a crown job to update the existing table of facilities to add the default value for each facility data.

  Estimation:
    => This task will take 3-5 hours  

Ticket 2: Update the Report Generation by Adding Custom Agent IDs

  Acceptence Criteria: 
    => If customid is available then use that customid to generate the reports for facilities.
    => If the customid is not aailable then use the inter database id for report generation.

  Implementation: 
    => Update the generateReports function to check the Agent that assgned to Perticular facility having ht customid.
    => If the customeid is exists for the agent then use the customid rather then the internal db id.
    => If the customeid is not exsits then use the inter db id.

  Estimation
   => This task shoud take 2-3 hour to imeplementing the change.