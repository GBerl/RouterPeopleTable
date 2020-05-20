﻿using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace RouterPeopleTable.data
{
    public class PeopleCarContextFactory: IDesignTimeDbContextFactory<PeopleCarContext>
    {
        public PeopleCarContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}RouterPeopleTable.web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new PeopleCarContext(config.GetConnectionString("Conn"));
        }
    }
}
