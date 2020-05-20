using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using RouterPeopleTable.data;

namespace RouterPeopleTable.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCarController : ControllerBase
    {
        private string _connection;
        public PeopleCarController(IConfiguration configuration)
        {
            _connection = configuration.GetConnectionString("Conn");
        }

        [HttpGet]
        [Route("getpeoplewithcars")]
        public List<Person> GetPeoplewithCars()
        {
            var repo = new PeopleCarRepository(_connection);
            return repo.GetPeopleWithCars();
        }

        [HttpPost]
        [Route("addperson")]
        public void AddPerson(Person p)
        {
            var repo = new PeopleCarRepository(_connection);
            repo.AddPerson(p);
        }

        [HttpGet]
        [Route("getpersonbyid")]
        public Person GetPersonById(int id)
        {
            var repo = new PeopleCarRepository(_connection);
            return repo.GetPersonById(id);
        }

        [HttpPost]
        [Route("addcar")]
        public void AddCar(Car c)
        {
            var repo = new PeopleCarRepository(_connection);
            repo.AddCar(c);
        }
    }
}
