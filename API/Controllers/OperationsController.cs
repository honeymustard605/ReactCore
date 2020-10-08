using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Details;
using Application.Operations;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class OperationsController : ControllerBase   
    {
        
        private readonly IMediator _mediator;
        public OperationsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Operation>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Operation>> Details(Guid id)
        {
            return await _mediator.Send(new Details.Query{Id = id});
        }
    }
}