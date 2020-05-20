using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace RouterPeopleTable.data
{
    public class PeopleCarRepository
    {
        private string _connection;
        public PeopleCarRepository(string connection)
        {
            _connection = connection;
        }
        public List<Person> GetPeopleWithCars()
        {
            using(var context=new PeopleCarContext(_connection))
            {
                return context.People.Include(p => p.Cars).ToList();

            }
        }
        public void AddPerson(Person  p)
        {
            using (var context = new PeopleCarContext(_connection))
            {
                context.People.Add(p);
                context.SaveChanges();
            }
        }
        public Person GetPersonById(int id)
        {
            using (var context = new PeopleCarContext(_connection))
            {
                return context.People.FirstOrDefault(p => p.Id == id);
            }
        }
        public void AddCar(Car c)
        {
            using (var context = new PeopleCarContext(_connection))
            {
                context.Cars.Add(c);
                context.SaveChanges();
            }
        }
    }


}
