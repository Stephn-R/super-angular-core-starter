using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace WebApplication
{
    /// <summary>
    /// The Application Startup Class
    /// </summary>
    public class Startup
    {
        #region METHODS

        /// <summary>
        /// Prepares the startup environment
        /// </summary>
        /// <param name="env">the hosted dotnet core environment</param>
        public Startup(IHostingEnvironment env)
        {
            // Build the web environment from environment + JSON (w/ priority to env vars)
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        /// <summary>
        /// The Application Configuration Object
        /// </summary>
        /// <returns></returns>
        public IConfigurationRoot Configuration { get; }

        /// <summary>
        /// Configures additional services to be ran/setup
        /// </summary>
        /// <param name="services">the application services collector</param>
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services
            services.AddMvc();
            // Use memory caching
            // services.AddMemoryCache();
        }

        /// <summary>
        /// Prepares the web application environment before execution
        /// </summary>
        /// <param name="app">the web application builder</param>
        /// <param name="env">the hosted dotnet core environment</param>
        /// <param name="loggerFactory">the logging factory</param>
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            // Connect the logging tool
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            // Setup development specific properties
            if (env.IsDevelopment())
            {
                // Provide better debugger errors in website
                app.UseDeveloperExceptionPage();
                // Runs a webpack dev server in middleware to compile on the fly
                app.UseWebpackDevMiddleware();
            }
            else
            {
                // Default error handler
                app.UseExceptionHandler("/Home/Error");
            }

            // Load static files from wwwroot/ folder as routes
            app.UseStaticFiles();

            // Middleware/Route Management
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }

        #endregion
    }
}
