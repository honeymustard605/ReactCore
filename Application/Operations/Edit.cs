using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Operations
{
    public class Edit
    {
        
         public class Command : IRequest
        {
            public Guid Id { get; set; }

            public string Title { get; set; }

            public string Description { get; set; }

            public string Category { get; set; }

            public DateTime? Date { get; set; }

            public string City { get; set; }

            public string Venue { get; set; }

        }
    
            public class Handler : IRequestHandler<Command>
            {
                private readonly DataContext _context;
                public Handler(DataContext context)
                {
                    _context = context;
                }
    
                public async Task<Unit> Handle(Command request, 
                CancellationToken cancellationToken)
                {
                    
                    var operation = await _context.Operations.FindAsync(request.Id);

                    if (operation == null) 
                        throw new Exception("Could not find actitvity");

                        operation.Title = request.Title ?? operation.Title;
                        operation.Description = request.Description ?? operation.Description;
                        operation.Category = request.Category ?? operation.Category;
                        operation.Date = request.Date ?? operation.Date;
                        operation.City = request.City ?? operation.City;
                        operation.Venue = request.Venue ?? operation.Venue;

                    var success = await _context.SaveChangesAsync() > 0;
    
                    if (success) return Unit.Value;
    
                    throw new Exception("Problem saving changes");
    
                }
            }        
    }
}