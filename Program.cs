using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace WebApplication
{
    /// <summary>
    /// Initial Start Program to run Webapp Server
    /// </summary>
    public class Program
    {
        /// <summary>
        /// Begins the web server using IIS
        /// </summary>
        /// <param name="args">the console arguments</param>
        public static void Main(string[] args)
        {
            // Build command-line vars
            var config = new ConfigurationBuilder()
                .AddCommandLine(args)
                .Build();

            // Initialize the Web Host + Run
            var host = new WebHostBuilder()
                .UseConfiguration(config)
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
