using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if(!context.Operations.Any())
            {
               var operations = new List<Operation>
               {
          
          new Operation		  
          {
		      Title = "Past Operation 1",
		      Date = DateTime.Now.AddMonths(-2),
		     Description = "Activity 2 months ago",
		    Category = "drinks",
		     City = "London",
		      Venue = "Pub",
		  },

            new Operation		  
          {
		      Title = "Past Operation 2",
		      Date = DateTime.Now.AddMonths(-1),
		     Description = "Activity 1 months ago",
		    Category = "culture",
		     City = "Paris",
		      Venue = "Louvre",
		  },

          new Operation		  
          {
		      Title = "Future Operation 1",
		      Date = DateTime.Now.AddMonths(1),
		     Description = "Activity 1 months in future",
		    Category = "culture",
		     City = "London",
		      Venue = "Natural History",
		  },

		  new Operation		  
          {
		      Title = "Future Operation 2",
		      Date = DateTime.Now.AddMonths(2),
		     Description = "Activity 2 months in future",
		    Category = "music",
		     City = "London",
		      Venue = "02 Arena",
		  },
		  
		 new Operation		  
          {
		      Title = "Future Operation 3",
		      Date = DateTime.Now.AddMonths(3),
		     Description = "Activity 3 months in future",
		    Category = "drink",
		     City = "London",
		      Venue = "Another pub",
		  },
		  
               };
               context.Operations.AddRange(operations);
               context.SaveChanges();

            }
        }
    }
}