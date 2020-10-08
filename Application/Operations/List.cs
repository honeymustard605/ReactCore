using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Operations
{
    public class List
    {
        public class Query : IRequest<List<Operation>> { }

        public class Handler : IRequestHandler<Query, List<Operation>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Operation>> Handle(Query request,
                CancellationToken cancellationToken)
            {
                var operations = await _context.Operations.ToListAsync();

                return operations;
               
            }
        }
    }
}