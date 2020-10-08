using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Details
{
    public class Details
    {
        public class Query: IRequest<Operation>
        {
            public Guid Id { get; set; }


        }

        public class Handler : IRequestHandler<Query, Operation>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Operation> Handle(Query request, CancellationToken cancellationToken)
            {
                var operation = await _context.Operations.FindAsync(request.Id);

                return operation;
            }
        }
    }
}