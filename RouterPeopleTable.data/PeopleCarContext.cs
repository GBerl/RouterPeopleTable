using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace RouterPeopleTable.data
{
    public class PeopleCarContext:DbContext
    {
        private string _connection;

        public PeopleCarContext(string connection)
        {
            _connection = connection;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connection);
        }

        public DbSet<Person> People { get; set; }
        public DbSet<Car> Cars { get; set; }

    }
}

