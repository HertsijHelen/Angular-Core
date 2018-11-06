using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AngularCore.Models;
using AngularCore.Repository;

namespace AngularCore.Controllers
{
    [Route("api/Products")]
    public class ProductsController : Controller
    {
        private IRepository<Product> _rep;

        public ProductsController(IRepository<Product> rep)
        {
            _rep = rep;
        }

        [HttpGet]      
        public IActionResult Get()
        {
            IEnumerable<Product> products = _rep.GetAll();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Product product = _rep.GetById(id);
            return Ok(product);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Product product)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);

                }
                else
                {
                    _rep.Create(product);
                    return Ok(product);
                }
               
            }
            catch(Exception ex)
            {
                return StatusCode(500,ex);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Product product)
        {
            if (ModelState.IsValid)
            {
             _rep.Update(id, product);
             return Ok(product);
            }
            else
            {
             return BadRequest(ModelState);
            }
           
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Product product = _rep.GetById(id);
            if (product != null)
            {
                _rep.Delete(id);
            }
            return Ok(product);
        }

    }
}