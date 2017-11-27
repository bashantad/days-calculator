### Days calculator between two dates 
You have joined a science project as the latest team
member. Scientists on the project are running a series of experiments and need to calculate the number of full days elapsed in between the experiment’s start and end dates, i.e. the first and the last day are considered partial days and never counted. Following this logic,
an experiment that has run from 07/11/1972 and 08/11/1972 should return 0, because there are no
fully elapsed days contained in between those dates, and 01/01/2000 to 03/01/2000 should return 1. The solution needs to cater for all valid dates between 01/01/1901 and 31/12/2999.

#### Install and run the tests
```
    $ npm install
    $ npm test
```

#### Execute the program
The program is built using node version 6.9.3.  

```
    node main.js fromDate toDate # eg: node main.js 03/01/1989 03/05/1989
```

### Constraints and design decisions
 1. Date range is considered only between 01/01/1901 to 31/12/2999.
 2. Didn't use any libraries or frameworks for the objective (including Date object).
 3. `DateObj` class is created to hold the information about date.
 4. January is taken as a reference to calculate the number of days from a given month in a year.
 5. Helper functions are extracted in `./src/helper.js`.
 6. Number of leap years is calculated by `divisibleOf4s - divisibleOf100s + divisibleOf400s`.
 7. Logging can be improved (with different log levels: eg: debug, error, info).
 8. Code is mix of OOP and functional.It can be easily converted into one or the other. 
 9. Thorough unit testing of individual methods and classes can be improved.
 10. Error handling can be improved.